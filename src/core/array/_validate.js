import assert from 'assert';

export function _validate(base, a, ai, aj) {
	assert(Number.isInteger(base));
	assert(base >= 2);
	assert(ai >= 0 && aj <= a.length);

	for (; ai < aj; ++ai) {
		const x = a[ai];
		assert(Number.isInteger(x));
		assert(x >= 0 && x <= base - 1);
	}

	return true;
}
