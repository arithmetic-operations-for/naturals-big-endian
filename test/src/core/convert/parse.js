import test from 'ava';
import * as integer from '../../../../src/index.js';

test('parse', (t) => {
	t.throws(integer.parse.bind(null, 16, 16, '!00b0C0def'), {
		message: /invalid/,
	});
	t.throws(integer.parse.bind(null, 37, 37, '!'), {message: /not implemented/});

	t.deepEqual(integer.parse(2, 2, '0'), [0]);
	t.deepEqual(integer.parse(2, 2, '1'), [1]);
	t.deepEqual(integer.parse(2, 2, '10'), [1, 0]);
	t.deepEqual(integer.parse(2, 2, '11'), [1, 1]);

	t.deepEqual(integer.parse(2, 2, '1001010111'), [
		1,
		0,
		0,
		1,
		0,
		1,
		0,
		1,
		1,
		1,
	]);

	t.deepEqual(integer.parse(16, 16, '0'), [0]);
	t.deepEqual(integer.parse(16, 16, 'a'), [10]);
	t.deepEqual(integer.parse(16, 16, 'A0'), [10, 0]);
	t.deepEqual(integer.parse(16, 16, 'a1'), [10, 1]);

	t.deepEqual(integer.parse(16, 16, 'a00b0C0def'), [
		10,
		0,
		0,
		11,
		0,
		12,
		0,
		13,
		14,
		15,
	]);

	t.deepEqual(integer.parse(2, 16, '11'), [3]);
	t.deepEqual(integer.parse(16, 2, '3'), [1, 1]);

	t.deepEqual(integer.parse(2, 16, '10001'), [1, 1]);
	t.deepEqual(integer.parse(16, 2, '11'), [1, 0, 0, 0, 1]);

	t.deepEqual(integer.parse(2, 10, '11'), [3]);
	t.deepEqual(integer.parse(10, 2, '3'), [1, 1]);

	t.deepEqual(integer.parse(10, 16, '256'), [1, 0, 0]);
	t.deepEqual(integer.parse(16, 10, '100'), [2, 5, 6]);

	t.deepEqual(integer.parse(10, 16, '255'), [15, 15]);
	t.deepEqual(integer.parse(16, 10, 'ff'), [2, 5, 5]);

	t.deepEqual(integer.parse(16, 100, 'ff'), [2, 55]);
	t.deepEqual(integer.parse(16, 1000, 'ff'), [255]);
	t.deepEqual(integer.parse(16, 10000, 'ff'), [255]);

	t.deepEqual(integer.parse(16, 100, 'fedcba9876543210'), [
		18,
		36,
		47,
		58,
		54,
		44,
		93,
		6,
		47,
		20,
	]);

	t.deepEqual(
		integer.parse(36, 10000, '1234567890azertyuiopqsdfghjklmwxcvbn'),
		[
			312,
			6485,
			6500,
			280,
			6599,
			6167,
			8564,
			7451,
			522,
			8125,
			564,
			4362,
			6409,
			4355,
		],
	);
});
