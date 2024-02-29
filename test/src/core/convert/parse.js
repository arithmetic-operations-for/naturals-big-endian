import test from 'ava';

import {parse} from '#module';

const throws = test.macro({
	exec(t, from, to, string, expected) {
		t.throws(() => parse(from, to, string), expected);
	},
	title(title, from, to, string, expected) {
		return (
			title ??
			`parse(${from}, ${to}, ${JSON.stringify(string)}) throws ${JSON.stringify(
				expected,
			)}`
		);
	},
});

test(throws, 16, 16, '!00b0C0def', {message: /invalid/});
test(throws, 37, 37, '!', {message: /not implemented/});

const macro = test.macro({
	exec(t, from, to, string, expected) {
		const parsed = parse(from, to, string);
		t.deepEqual(parsed, expected);
	},
	title(title, from, to, string, expected) {
		return (
			title ??
			`parse(${from}, ${to}, ${JSON.stringify(string)}) === ${JSON.stringify(
				expected,
			)}`
		);
	},
});

test(macro, 2, 2, '0', [0]);
test(macro, 2, 2, '1', [1]);
test(macro, 2, 2, '10', [1, 0]);
test(macro, 2, 2, '11', [1, 1]);

test(macro, 2, 2, '1001010111', [1, 0, 0, 1, 0, 1, 0, 1, 1, 1]);

test(macro, 16, 16, '0', [0]);
test(macro, 16, 16, 'a', [10]);
test(macro, 16, 16, 'A0', [10, 0]);
test(macro, 16, 16, 'a1', [10, 1]);

test(macro, 16, 16, 'a00b0C0def', [10, 0, 0, 11, 0, 12, 0, 13, 14, 15]);

test(macro, 2, 16, '11', [3]);
test(macro, 16, 2, '3', [1, 1]);

test(macro, 2, 16, '10001', [1, 1]);
test(macro, 16, 2, '11', [1, 0, 0, 0, 1]);

test(macro, 2, 10, '11', [3]);
test(macro, 10, 2, '3', [1, 1]);

test(macro, 10, 16, '256', [1, 0, 0]);
test(macro, 16, 10, '100', [2, 5, 6]);

test(macro, 10, 16, '255', [15, 15]);
test(macro, 16, 10, 'ff', [2, 5, 5]);

test(macro, 16, 100, 'ff', [2, 55]);
test(macro, 16, 1000, 'ff', [255]);
test(macro, 16, 10_000, 'ff', [255]);

test(
	macro,
	16,
	100,
	'fedcba9876543210',
	[18, 36, 47, 58, 54, 44, 93, 6, 47, 20],
);

test(
	macro,
	36,
	10_000,
	'1234567890azertyuiopqsdfghjklmwxcvbn',
	[
		312, 6485, 6500, 280, 6599, 6167, 8564, 7451, 522, 8125, 564, 4362, 6409,
		4355,
	],
);
