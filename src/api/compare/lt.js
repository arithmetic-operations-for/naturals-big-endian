import cmp from './cmp.js';

/**
 * Compares two big endian arrays: returns true if the first is less than
 * the second.
 *
 * Input:
 *   - |A| >= 0
 *   - |B| >= 0
 *
 * @param {number[]} a first operand
 * @param {number} ai a left
 * @param {number} aj a right
 * @param {number[]} b second operand
 * @param {number} bi b left
 * @param {number} bj b right
 *
 * @return {boolean} true iff A < B.
 */
const lt = (a, ai, aj, b, bi, bj) => cmp(a, ai, aj, b, bi, bj) < 0;
export default lt;
