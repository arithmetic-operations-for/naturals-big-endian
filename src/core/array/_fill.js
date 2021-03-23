import assert from 'assert';

export default function _fill(a, ai, aj, v) {
	assert(ai >= 0);
	assert(aj <= a.length);
	assert(aj - ai >= 0);
	assert(typeof v === 'number');

	for (let i = ai; i < aj; ++i) a[i] = v;
}
