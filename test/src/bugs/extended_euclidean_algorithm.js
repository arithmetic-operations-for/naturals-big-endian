import test from 'ava';

import {
	parse,
	stringify,
	extended_euclidean_algorithm,
} from '#module';

const ge = (t, a, b, v) => t.true(a >= b, `${v} = ${a} >= ${b}`);
const le = (t, a, b, v) => t.true(a <= b, `${v} = ${a} <= ${b}`);

function macro(t, A) {
	const [B, D, X, Y, U, V, steps] = [A, A, '0', '1', '1', '1', 2];

	const r = 10;

	const a = parse(10, r, A);
	const aj = a.length;
	const ai = 0;

	const b = parse(10, r, B);
	const bj = b.length;
	const bi = 0;

	const [d, di, x, xi, y, yi, u, ui, v, vi, s] = extended_euclidean_algorithm(
		r,
		a,
		ai,
		aj,
		b,
		bi,
		bj,
	);

	ge(t, di, 0, 'di');
	le(t, di, d.length, 'di');
	ge(t, xi, 0, 'xi');
	le(t, xi, x.length, 'xi');
	ge(t, yi, 0, 'yi');
	le(t, yi, y.length, 'yi');
	ge(t, ui, 0, 'ui');
	le(t, ui, u.length, 'ui');
	ge(t, vi, 0, 'vi');
	le(t, vi, v.length, 'vi');

	t.is(steps, s, 'steps');

	const _d = stringify(r, 10, d, di, d.length);
	const _x = stringify(r, 10, x, xi, x.length);
	const _y = stringify(r, 10, y, yi, y.length);
	const _u = stringify(r, 10, u, ui, u.length);
	const _v = stringify(r, 10, v, vi, v.length);

	t.is(D, _d, 'd');
	t.is(X, _x, 'x');
	t.is(Y, _y, 'y');
	t.is(U, _u, 'u');
	t.is(V, _v, 'v');
}

macro.title = (_, A) =>
	`GCD(${A}, ${A}) = ${A} = 0*${A} + 1*${A} AND 1 * ${A} = 1 * ${A} (2 steps)`;

// A === b
// d = a * x + b * y
// ud = b <=> u = b / d
// vd = a <=> v = a / d
// => ua - vb = ab/d - ba/d = 0
test(macro, '1');
test(macro, '2');
test(macro, '23');
test(macro, '123');
test(macro, '5000');
