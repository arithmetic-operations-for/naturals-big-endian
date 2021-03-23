import test from 'ava';
import {parse, _zeros, mul, stringify} from '../../../src/index.js';

function macro(t, A, B, C) {
	const r = 10;
	const a = parse(10, r, A);
	const b = parse(10, r, B);
	const c = _zeros(a.length + b.length);

	mul(r, a, 0, a.length, b, 0, b.length, c, 0, c.length);

	const result = stringify(r, 10, c, 0, c.length);

	t.is(C, result);
}

macro.title = (providedTitle, A, B, C) =>
	providedTitle || `mul(${A},${B}) = ${C}`;

test(macro, '0', '9223239263', '0');
test(macro, '1', '1', '1');
test(macro, '47', '124', '5828');
test(macro, '999', '1', '999');
test(macro, '1234567890', '9876543210', '12193263111263526900');
test(
	macro,
	'783947893749873947398479387498374983794837948',
	'783947893749873947398479387498374983794837948',
	'614574300114863651719572431453540650301628339851759553910063055039260739276277131580850704',
);

test(
	macro,
	'41635564802587630124971701498526931600520671849926893478847011',
	'11',
	'457991212828463931374688716483796247605727390349195828267317121',
);
test(
	macro,
	'11',
	'41635564802587630124971701498526931600520671849926893478847011',
	'457991212828463931374688716483796247605727390349195828267317121',
);
