import _cmp from '../../core/compare/_cmp.js';

export default function cmp(a, ai, aj, b, bi, bj) {
	if (aj - ai < bj - bi) return -_cmp(b, bi, bj, a, ai, aj);
	return _cmp(a, ai, aj, b, bi, bj);
}
