import test from 'ava';
import {translate} from '#module';

const throws = test.macro({
	exec(t, from, to, string, expected) {
		t.throws(() => translate(from, to, string), expected);
	},
	title(title, from, to, string, expected) {
		return (
			title ??
			`translate(${from}, ${to}, ${JSON.stringify(
				string,
			)}) throws ${JSON.stringify(expected)}`
		);
	},
});

test(throws, 16, 16, '!00b0C0def', {message: /invalid/});
test(throws, 37, 36, '!', {
	message: /not implemented/,
});
test(throws, 36, 37, 'z', {
	message: /not implemented/,
});

const macro = test.macro({
	exec(t, from, to, string, expected) {
		const translated = translate(from, to, string);
		t.deepEqual(translated, expected);
	},
	title(title, from, to, string, expected) {
		return (
			title ??
			`translate(${from}, ${to}, ${JSON.stringify(
				string,
			)}) === ${JSON.stringify(expected)}`
		);
	},
});

test(macro, 2, 2, '0', '0');
test(macro, 2, 2, '1', '1');
test(macro, 2, 2, '10', '10');
test(macro, 2, 2, '11', '11');

test(macro, 2, 2, '1001010111', '1001010111');

test(macro, 16, 16, '0', '0');
test(macro, 16, 16, 'a', 'a');
test(macro, 16, 16, 'A0', 'a0');
test(macro, 16, 16, 'a1', 'a1');

test(macro, 16, 16, 'a00b0C0def', 'a00b0c0def');

test(macro, 2, 16, '11', '3');
test(macro, 16, 2, '3', '11');

test(macro, 2, 16, '10001', '11');
test(macro, 16, 2, '11', '10001');

test(macro, 2, 10, '11', '3');
test(macro, 10, 2, '3', '11');

test(macro, 10, 16, '256', '100');
test(macro, 16, 10, '100', '256');

test(macro, 10, 16, '255', 'ff');
test(macro, 16, 10, 'ff', '255');

test(macro, 16, 10, 'fedcba9876543210', '18364758544493064720');

test(
	macro,
	36,
	10,
	'1234567890azertyuiopqsdfghjklmwxcvbn',
	'3126485650002806599616785647451052281250564436264094355',
);
