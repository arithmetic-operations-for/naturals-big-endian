import test from 'ava';

import {_zeros, mul, stringify} from '#module';

function boundaries(t, a, ai, aj, b, bi, bj, C) {
	const r = 10;
	const c = _zeros(aj - ai + bj - bi);

	mul(r, a, ai, aj, b, bi, bj, c, 0, c.length);

	const result = stringify(r, 10, c, 0, c.length);

	t.is(C, result);
}

boundaries.title = (providedTitle, a, ai, aj, b, bi, bj, C) =>
	providedTitle ||
	`mul(${a.join('')}[${ai}:${aj}],${b.join('')}[${bi}:${bj}]) = ${C}`;

test(boundaries, [1, 2], 0, 1, [1, 2, 3], 0, 1, '1');
test(boundaries, [1, 2], 0, 1, [1, 2, 3], 0, 2, '12');
test(boundaries, [1, 2], 0, 1, [1, 2, 3], 0, 3, '123');
test(boundaries, [1, 2], 0, 1, [1, 2, 3], 1, 2, '2');
test(boundaries, [1, 2], 0, 1, [1, 2, 3], 1, 3, '23');
test(boundaries, [1, 2], 0, 1, [1, 2, 3], 2, 3, '3');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 0, 1, '12');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 0, 2, '144');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 0, 3, '1476');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 1, 2, '24');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 1, 3, '276');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 2, 3, '36');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 0, 1, '2');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 0, 2, '24');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 0, 3, '246');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 1, 2, '4');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 1, 3, '46');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 2, 3, '6');

test(boundaries, [1, 2], 0, 0, [1, 2, 3], 0, 0, '0');
test(boundaries, [1, 2], 0, 0, [1, 2, 3], 1, 1, '0');
test(boundaries, [1, 2], 0, 0, [1, 2, 3], 2, 2, '0');
test(boundaries, [1, 2], 0, 0, [1, 2, 3], 3, 3, '0');

test(boundaries, [1, 2], 1, 1, [1, 2, 3], 0, 0, '0');
test(boundaries, [1, 2], 1, 1, [1, 2, 3], 1, 1, '0');
test(boundaries, [1, 2], 1, 1, [1, 2, 3], 2, 2, '0');
test(boundaries, [1, 2], 1, 1, [1, 2, 3], 3, 3, '0');

test(boundaries, [1, 2], 2, 2, [1, 2, 3], 0, 0, '0');
test(boundaries, [1, 2], 2, 2, [1, 2, 3], 1, 1, '0');
test(boundaries, [1, 2], 2, 2, [1, 2, 3], 2, 2, '0');
test(boundaries, [1, 2], 2, 2, [1, 2, 3], 3, 3, '0');

test(boundaries, [1, 2], 0, 0, [1, 2, 3], 0, 1, '0');
test(boundaries, [1, 2], 0, 0, [1, 2, 3], 0, 2, '0');
test(boundaries, [1, 2], 0, 0, [1, 2, 3], 0, 3, '0');
test(boundaries, [1, 2], 0, 0, [1, 2, 3], 1, 2, '0');
test(boundaries, [1, 2], 0, 0, [1, 2, 3], 1, 3, '0');
test(boundaries, [1, 2], 0, 0, [1, 2, 3], 2, 3, '0');

test(boundaries, [1, 2], 1, 1, [1, 2, 3], 0, 1, '0');
test(boundaries, [1, 2], 1, 1, [1, 2, 3], 0, 2, '0');
test(boundaries, [1, 2], 1, 1, [1, 2, 3], 0, 3, '0');
test(boundaries, [1, 2], 1, 1, [1, 2, 3], 1, 2, '0');
test(boundaries, [1, 2], 1, 1, [1, 2, 3], 1, 3, '0');
test(boundaries, [1, 2], 1, 1, [1, 2, 3], 2, 3, '0');

test(boundaries, [1, 2], 2, 2, [1, 2, 3], 0, 1, '0');
test(boundaries, [1, 2], 2, 2, [1, 2, 3], 0, 2, '0');
test(boundaries, [1, 2], 2, 2, [1, 2, 3], 0, 3, '0');
test(boundaries, [1, 2], 2, 2, [1, 2, 3], 1, 2, '0');
test(boundaries, [1, 2], 2, 2, [1, 2, 3], 1, 3, '0');
test(boundaries, [1, 2], 2, 2, [1, 2, 3], 2, 3, '0');

test(boundaries, [1, 2], 0, 1, [1, 2, 3], 0, 0, '0');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 0, 0, '0');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 0, 0, '0');

test(boundaries, [1, 2], 0, 1, [1, 2, 3], 1, 1, '0');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 1, 1, '0');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 1, 1, '0');

test(boundaries, [1, 2], 0, 1, [1, 2, 3], 2, 2, '0');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 2, 2, '0');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 2, 2, '0');

test(boundaries, [1, 2], 0, 1, [1, 2, 3], 3, 3, '0');
test(boundaries, [1, 2], 0, 2, [1, 2, 3], 3, 3, '0');
test(boundaries, [1, 2], 1, 2, [1, 2, 3], 3, 3, '0');
