import assert from 'assert';

export default function _alloc(n) {
	assert(n >= 0);

	return new Array(n);
}
