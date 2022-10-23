import test from 'ava';
import {stringify} from '#module';

function macro(t, from, to, array, i, j, expected) {
	const got = stringify(from, to, array, i, j);
	t.is(expected, got);
	const second_time = stringify(from, to, array, i, j);
	t.is(expected, second_time);
}

macro.title = (providedTitle, from, to, array, i, j, expected) =>
	providedTitle ||
	`stringify ${JSON.stringify(
		array,
	)}[${i}:${j}]_${from} ->_${to} = ${expected}`;

function throws(t, from, to, array, i, j, expected) {
	const fn = () => stringify(from, to, array, i, j);
	t.throws(fn, expected);
}

throws.title = (providedTitle, from, to, array, i, j, _expected) =>
	providedTitle ||
	`stringify ${JSON.stringify(array)}[${i}:${j}]_${from} -> ${to} throws`;

test(throws, 37, 37, [0], 0, 1, {message: /not implemented/});

test(macro, 2, 2, [0], 0, 1, '0');
test(macro, 2, 2, [1], 0, 1, '1');
test(macro, 2, 2, [1, 0], 0, 2, '10');
test(macro, 2, 2, [1, 1], 0, 2, '11');

test(macro, 2, 2, [1, 0, 0, 1, 0, 1, 0, 1, 1, 1], 0, 10, '1001010111');

test(macro, 16, 16, [0], 0, 1, '0');
test(macro, 16, 16, [10], 0, 1, 'a');
test(macro, 16, 16, [10, 0], 0, 2, 'a0');
test(macro, 16, 16, [10, 1], 0, 2, 'a1');

test(macro, 16, 16, [10, 0, 0, 11, 0, 12, 0, 13, 14, 15], 0, 10, 'a00b0c0def');

test(macro, 16, 2, [3], 0, 1, '11');
test(macro, 2, 16, [0, 0, 1, 1], 0, 4, '3');

test(macro, 16, 2, [1, 1], 0, 2, '10001');
test(macro, 2, 16, [0, 0, 0, 1, 0, 0, 0, 1], 0, 8, '11');

test(macro, 10, 2, [3], 0, 1, '11');
test(macro, 2, 10, [0, 0, 1, 1], 1, 4, '3');

test(macro, 16, 10, [1, 0, 0], 0, 3, '256');
test(macro, 10, 16, [0, 2, 5, 6], 1, 4, '100');

test(macro, 16, 10, [0, 15, 15], 1, 3, '255');
test(macro, 10, 16, [2, 5, 5], 0, 3, 'ff');

test(macro, 100, 16, [2, 55], 0, 2, 'ff');
test(macro, 1000, 16, [255], 0, 1, 'ff');
test(macro, 10_000, 16, [255], 0, 1, 'ff');

test(
	macro,
	100,
	16,
	[18, 36, 47, 58, 54, 44, 93, 6, 47, 20],
	0,
	10,
	'fedcba9876543210',
);

test(
	macro,
	10_000,
	36,
	[
		0, 312, 6485, 6500, 280, 6599, 6167, 8564, 7451, 522, 8125, 564, 4362, 6409,
		4355,
	],
	0,
	15,
	'1234567890azertyuiopqsdfghjklmwxcvbn',
);

test(
	macro,
	10,
	36,
	[
		3, 1, 2, 6, 4, 8, 5, 6, 5, 0, 0, 0, 2, 8, 0, 6, 5, 9, 9, 6, 1, 6, 7, 8, 5,
		6, 4, 7, 4, 5, 1, 0, 5, 2, 2, 8, 1, 2, 5, 0, 5, 6, 4, 4, 3, 6, 2, 6, 4, 0,
		9, 4, 3, 5, 5,
	],
	0,
	55,
	'1234567890azertyuiopqsdfghjklmwxcvbn',
);

test(macro, 10_000, 36, [55, 3415], 0, 2, 'bv0n');

test('stringify is pure', (t) => {
	const x = [1, 0, 0, 0, 0];
	const s1 = stringify(10, 10, x, 0, x.length);
	const s2 = stringify(10, 10, x, 0, x.length);
	const s3 = stringify(10, 16, x, 0, x.length);
	const s4 = stringify(10, 16, x, 0, x.length);
	t.is(s1, '10000');
	t.is(s2, '10000');
	t.is(s3, '2710');
	t.is(s4, '2710');
});
