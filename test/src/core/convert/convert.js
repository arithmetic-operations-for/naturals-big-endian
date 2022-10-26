import test from 'ava';

import {xoroshiro128plus, fill} from '@entropy-source/pseudo-random';
import {decode as hex} from '@codec-bytes/base16';

import {
	parse,
	stringify,
	_convert_to_larger_fast,
	_convert_to_smaller_fast,
	_log,
	_zeros,
} from '#module';

function macro_larger(t, f, _t, a, e) {
	const [z, x] = _log(_t, f);

	t.is(1, x);

	const b = _zeros(e.length);

	_convert_to_larger_fast(f, z, a, 0, a.length, b, 0, b.length);

	t.deepEqual(e, b);
}

macro_larger.title = (title, f, t, a, e) =>
	title ??
	`_convert_to_larger_fast(${f}, ${t}, ${JSON.stringify(a)}) <${e.length}>`;

function macro_smaller(t, f, _t, a, e) {
	const [z, x] = _log(f, _t);

	t.is(1, x);

	const b = _zeros(e.length);

	_convert_to_smaller_fast(_t, z, a, 0, a.length, b, 0, b.length);

	t.deepEqual(e, b);
}

macro_smaller.title = (title, f, t, a, e) =>
	title ??
	`_convert_to_smaller_fast(${f}, ${t}, ${JSON.stringify(a)}) <${e.length}>`;

test(macro_larger, 16, 256, [], []);
test(macro_larger, 16, 256, [15], []);
test(macro_larger, 16, 256, [15], [15]);
test(macro_larger, 16, 256, [15, 15], [255]);
test(macro_larger, 16, 256, [15, 15, 15], [255]);
test(macro_larger, 16, 256, [15, 15, 15], [15, 255]);
test(macro_larger, 16, 256, [15, 15, 15], [0, 15, 255]);
test(macro_larger, 16, 256, [15, 15, 15, 15], [255]);
test(macro_larger, 16, 256, [15, 15, 15, 15], [255, 255]);

test(macro_smaller, 256, 16, [], []);
test(macro_smaller, 256, 16, [255], []);
test(macro_smaller, 256, 16, [255], [15]);
test(macro_smaller, 256, 16, [255], [15, 15]);
test(macro_smaller, 256, 16, [255, 255], [15, 15]);
test(macro_smaller, 256, 16, [255, 255], [15, 15, 15]);
test(macro_smaller, 256, 16, [255, 255], [15, 15, 15, 15]);
test(macro_smaller, 256, 16, [255, 255], [0, 15, 15, 15, 15]);

function macro_convert(t, f, _t, e) {
	const a = parse(f, _t, e);
	const s = stringify(_t, f, a, 0, a.length);
	t.is(e, s);
}

macro_convert.title = (_, f, _t, s) =>
	`convert ${f} ${_t} ${s.slice(0, 40) + '...'}`;

const seed = [1, 0, 0, 0];
const prng = xoroshiro128plus(seed, {});
const buffer = new Uint8Array(8192);
fill(prng, buffer);
const _b8192 = hex(buffer).toLowerCase().replace(/^0*/, '');
test(macro_convert, 16, 94_906_266, _b8192);
test(macro_convert, 16, 13, _b8192);
