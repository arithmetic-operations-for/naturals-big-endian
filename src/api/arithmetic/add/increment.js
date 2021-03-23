import assert from 'assert';

/**
 * Adds 1 to a big endian array.
 *
 * Wraps on overflow. Hence, does nothing if aj <= ai.
 *
 * O(|A|) time in the worst case.
 * O(1) amortized time over any number of successive operations starting with A = O(1).
 * O(1) amortized time over O(|A|) successive operations starting with any A.
 *
 * @param {Number} r radix
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */
export function increment(r, a, ai, aj) {
	assert(r >= 2);
	assert(ai >= 0 && aj <= a.length);

	const _r = r - 1;

	while (--aj >= ai) {
		if (a[aj] < _r) {
			++a[aj];
			return;
		}

		a[aj] = 0;
	}
}
