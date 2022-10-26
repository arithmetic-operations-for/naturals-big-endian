import test from 'ava';
import {parse, stringify} from '#module';

test('convert bug', (t) => {
	const src =
		'2a9a63896d946d67f7a9d370d6c60d971a0659e5d96548e799e92b79f784e24f';

	const parsed = parse(16, 10_000_000, src);

	t.deepEqual(src, stringify(10_000_000, 16, parsed, 0, parsed.length));
});
