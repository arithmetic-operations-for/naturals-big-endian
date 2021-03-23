import _trim_positive from '../../../core/convert/_trim_positive.js';
import _cmp_n from '../../../core/compare/_cmp_n.js';
import _extended_euclidean_algorithm from '../../../core/arithmetic/gcd/_extended_euclidean_algorithm.js';

/**
 * No constraints on the input.
 *
 * @param {Number} r The radix.
 * @param {Array} a First input number <code>a>b</code>.
 * @param {Number} ai <code>a</code> left bound.
 * @param {Number} aj <code>a</code> right bound.
 * @param {Array} b Second input number <code>b<a</code>.
 * @param {Number} bi <code>b</code> left bound.
 * @param {Number} bj <code>b</code> right bound.
 */

export default function extended_euclidean_algorithm(r, a, ai, aj, b, bi, bj) {
	const _ai = _trim_positive(a, ai, aj);
	const _bi = _trim_positive(b, bi, bj);
	const m = aj - _ai;
	const n = bj - _bi;

	if (m > n || (m === n && _cmp_n(a, _ai, aj, b, _bi) >= 0))
		return _extended_euclidean_algorithm(r, a, _ai, aj, b, _bi, bj);

	const [
		R0,
		R0i,
		T0,
		T0i,
		S0,
		S0i,
		T1,
		T1i,
		S1,
		S1i,
		steps,
	] = _extended_euclidean_algorithm(r, b, _bi, bj, a, _ai, aj);

	return [R0, R0i, S0, S0i, T0, T0i, S1, S1i, T1, T1i, steps + 1];
}
