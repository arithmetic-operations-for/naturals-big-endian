import assert from 'assert';

export default function _trim_positive(a, ai, aj) {
	assert(ai >= 0 && aj <= a.length);

	while (ai < aj && a[ai] === 0) ++ai;

	return ai;
}
