import test from 'ava';
import {decrement} from '#module';

function macro(t, r, x, e) {
	const _x = ['x', ...x.slice(), 'x'];
	const _e = ['x', ...e.slice(), 'x'];

	decrement(r, _x, 1, _x.length - 1);

	t.deepEqual(_e, _x);
}

macro.title = (title, r, x, e) =>
	`${title || ''} ${JSON.stringify(x)}_${r} - 1 = ${JSON.stringify(e)}`.trim();

test(macro, 10, [], []);
test(macro, 10, [0], [9]);
test(macro, 10, [0, 0, 0], [9, 9, 9]);
test(macro, 10, [7, 0, 0], [6, 9, 9]);
test(macro, 11, [7, 0, 0], [6, 10, 10]);
test(macro, 11, [1, 2, 3], [1, 2, 2]);
test(macro, 2, [0, 0, 0], [1, 1, 1]);
