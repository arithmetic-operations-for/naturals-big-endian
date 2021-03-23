import test from 'ava';
import * as integer from '../../../../src/index.js';

test('translate', (t) => {
	t.throws(integer.translate.bind(null, 16, 16, '!00b0C0def'), {
		message: /invalid/,
	});
	t.throws(integer.translate.bind(null, 37, 36, '!'), {
		message: /not implemented/,
	});
	t.throws(integer.translate.bind(null, 36, 37, 'z'), {
		message: /not implemented/,
	});

	t.is(integer.translate(2, 2, '0'), '0');
	t.is(integer.translate(2, 2, '1'), '1');
	t.is(integer.translate(2, 2, '10'), '10');
	t.is(integer.translate(2, 2, '11'), '11');

	t.is(integer.translate(2, 2, '1001010111'), '1001010111');

	t.is(integer.translate(16, 16, '0'), '0');
	t.is(integer.translate(16, 16, 'a'), 'a');
	t.is(integer.translate(16, 16, 'A0'), 'a0');
	t.is(integer.translate(16, 16, 'a1'), 'a1');

	t.is(integer.translate(16, 16, 'a00b0C0def'), 'a00b0c0def');

	t.is(integer.translate(2, 16, '11'), '3');
	t.is(integer.translate(16, 2, '3'), '11');

	t.is(integer.translate(2, 16, '10001'), '11');
	t.is(integer.translate(16, 2, '11'), '10001');

	t.is(integer.translate(2, 10, '11'), '3');
	t.is(integer.translate(10, 2, '3'), '11');

	t.is(integer.translate(10, 16, '256'), '100');
	t.is(integer.translate(16, 10, '100'), '256');

	t.is(integer.translate(10, 16, '255'), 'ff');
	t.is(integer.translate(16, 10, 'ff'), '255');

	t.is(integer.translate(16, 10, 'fedcba9876543210'), '18364758544493064720');

	t.is(
		integer.translate(36, 10, '1234567890azertyuiopqsdfghjklmwxcvbn'),
		'3126485650002806599616785647451052281250564436264094355',
	);
});

test('convert bug', (t) => {
	const src =
		'2a9a63896d946d67f7a9d370d6c60d971a0659e5d96548e799e92b79f784e24f';

	const parsed = integer.parse(16, 10000000, src);

	t.deepEqual(src, integer.stringify(10000000, 16, parsed, 0, parsed.length));
});
