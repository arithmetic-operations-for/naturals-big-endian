import test from 'ava';

import {range} from '@iterable-iterator/range';
import {randint} from '@randomized/random';

import {parse, _zeros, mul, stringify} from '#module';

function macro(t, r, A, B) {
	const C = A * B;

	const a = parse(r, r, A.toString(r));
	const b = parse(r, r, B.toString(r));
	const c = _zeros(a.length + b.length);

	mul(r, a, 0, a.length, b, 0, b.length, c, 0, c.length);

	const result = stringify(r, r, c, 0, c.length);

	t.is(C.toString(r), result);
}

macro.title = (providedTitle, r, A, B) =>
	providedTitle || `mul(${r},${A},${B}) = ${A * B} <random>`;

const N = 20_000;
const MIN_RADIX = 2;
const MAX_RADIX = 36;
const MIN = 0;
const MAX = 2 ** Math.floor(Math.log(Math.sqrt(2 ** 53)));
const DONE = new Set();

test(macro, 2, 236_498, 196_086);
test(macro, 2, 237_731, 234_914);
test(macro, 2, 242_475, 221_659);
test(macro, 2, 247_796, 204_437);
test(macro, 2, 87_996, 226_805);
test(macro, 2, 240_042, 191_854);
test(macro, 3, 58_072, 38_617);
test(macro, 3, 51_224, 54_163);

for (const _ of range(N)) {
	while (true) {
		const r = randint(MIN_RADIX, MAX_RADIX + 1);
		const A = randint(MIN, MAX + 1);
		const B = randint(MIN, MAX + 1);
		const key = macro.title(null, r, A, B);
		if (!DONE.has(key)) {
			DONE.add(key);
			test(macro, r, A, B);
			break;
		}
	}
}
