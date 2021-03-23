import assert from 'assert';

export default function _cmp_half_odd_radix(_r, a, ai, aj) {
	assert(_r >= 1);
	assert(ai >= 0 && aj <= a.length);

	for (; ai < aj; ++ai) {
		if (a[ai] > _r) return 1;
		if (a[ai] < _r) return -1;
	}

	return -1;
}
