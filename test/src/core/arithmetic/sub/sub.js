import test from 'ava';

import {parse, stringify, _zeros, _sub} from '#module';

test('_sub: wraps', (t) => {
	const a = [0];
	const b = [1];
	const c = [0, 0, 0];

	_sub(10, a, 0, 1, b, 0, 1, c, 0, 3);

	t.deepEqual(c, [9, 9, 9]);
});

function macro(t, C, B, A) {
	const r = 10;
	const a = parse(10, r, A);
	const b = parse(10, r, B);
	const c = _zeros(Math.max(a.length, b.length) + 1);
	_sub(r, a, 0, a.length, b, 0, b.length, c, 0, c.length);

	t.deepEqual(C, stringify(r, 10, c, 0, c.length));
}

macro.title = (_, C, B, A) => `_sub: ${A} - ${B} = ${C}`;

test(macro, '1', '1', '2');
test(macro, '47', '124', '171');
test(macro, '999', '1', '1000');
test(macro, '1234567890', '9876543210', '11111111100');
