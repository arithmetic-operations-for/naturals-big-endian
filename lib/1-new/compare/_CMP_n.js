"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._CMP_n = _CMP_n;

/**
 * Compares two big endian arrays, |a| = |b|
 *
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 *
 * @return {Number} 1 if a > b; 0 if a = b; -1 otherwise.
 */

function _CMP_n(a, ai, aj, b, bi) {

  for (; ai < aj; ++ai, ++bi) {
    if (a[ai] > b[bi]) return 1;
    if (a[ai] < b[bi]) return -1;
  }

  return 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb21wYXJlL19DTVBfbi5qcyJdLCJuYW1lcyI6WyJfQ01QX24iLCJhIiwiYWkiLCJhaiIsImIiLCJiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFhZ0JBLE0sR0FBQUEsTTs7QUFaaEI7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLE1BQVQsQ0FBa0JDLENBQWxCLEVBQXNCQyxFQUF0QixFQUEyQkMsRUFBM0IsRUFBZ0NDLENBQWhDLEVBQW9DQyxFQUFwQyxFQUF5Qzs7QUFFL0MsU0FBT0gsS0FBS0MsRUFBWixFQUFnQixFQUFFRCxFQUFGLEVBQU0sRUFBRUcsRUFBeEIsRUFBNEI7QUFDM0IsUUFBSUosRUFBRUMsRUFBRixJQUFRRSxFQUFFQyxFQUFGLENBQVosRUFBbUIsT0FBUSxDQUFSO0FBQ25CLFFBQUlKLEVBQUVDLEVBQUYsSUFBUUUsRUFBRUMsRUFBRixDQUFaLEVBQW1CLE9BQU8sQ0FBQyxDQUFSO0FBQ25COztBQUVELFNBQU8sQ0FBUDtBQUNBIiwiZmlsZSI6Il9DTVBfbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDb21wYXJlcyB0d28gYmlnIGVuZGlhbiBhcnJheXMsIHxhfCA9IHxifFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGEgcmlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBiIGxlZnRcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IDEgaWYgYSA+IGI7IDAgaWYgYSA9IGI7IC0xIG90aGVyd2lzZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX0NNUF9uICggYSAsIGFpICwgYWogLCBiICwgYmkgKSB7XG5cblx0Zm9yICg7IGFpIDwgYWo7ICsrYWksICsrYmkpIHtcblx0XHRpZiAoYVthaV0gPiBiW2JpXSkgcmV0dXJuICAxO1xuXHRcdGlmIChhW2FpXSA8IGJbYmldKSByZXR1cm4gLTE7XG5cdH1cblxuXHRyZXR1cm4gMDtcbn1cbiJdfQ==