"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._CMP = _CMP;

/**
 * Compares two big endian arrays, |a| >= |b|
 *
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 * @param {array} b second operand
 * @param {int} bi b left
 * @param {int} bj b right
 *
 * @return {int} 1 if a > b; 0 if a = b; -1 otherwise.
 */

function _CMP(a, ai, aj, b, bi, bj) {

  var tmp = aj - bj + bi;

  for (; ai < tmp; ++ai) {
    if (a[ai] > 0) return 1;
  } // same size aj - ai === bj - bi
  for (; ai < aj; ++ai, ++bi) {
    if (a[ai] > b[bi]) return 1;
    if (a[ai] < b[bi]) return -1;
  }

  return 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb21wYXJlL19DTVAuanMiXSwibmFtZXMiOlsiX0NNUCIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJ0bXAiXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2dCQSxJLEdBQUFBLEk7O0FBYmhCOzs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0EsSUFBVCxDQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEJDLENBQTFCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBb0M7O0FBRTFDLE1BQUlDLE1BQU1KLEtBQUtHLEVBQUwsR0FBVUQsRUFBcEI7O0FBRUEsU0FBT0gsS0FBS0ssR0FBWixFQUFpQixFQUFFTCxFQUFuQjtBQUNDLFFBQUlELEVBQUVDLEVBQUYsSUFBUSxDQUFaLEVBQWUsT0FBTyxDQUFQO0FBRGhCLEdBSjBDLENBTzFDO0FBQ0EsU0FBT0EsS0FBS0MsRUFBWixFQUFnQixFQUFFRCxFQUFGLEVBQU0sRUFBRUcsRUFBeEIsRUFBNEI7QUFDM0IsUUFBSUosRUFBRUMsRUFBRixJQUFRRSxFQUFFQyxFQUFGLENBQVosRUFBbUIsT0FBUSxDQUFSO0FBQ25CLFFBQUlKLEVBQUVDLEVBQUYsSUFBUUUsRUFBRUMsRUFBRixDQUFaLEVBQW1CLE9BQU8sQ0FBQyxDQUFSO0FBQ25COztBQUVELFNBQU8sQ0FBUDtBQUNBIiwiZmlsZSI6Il9DTVAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQ29tcGFyZXMgdHdvIGJpZyBlbmRpYW4gYXJyYXlzLCB8YXwgPj0gfGJ8XG4gKlxuICogQHBhcmFtIHthcnJheX0gYSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge2ludH0gYWkgYSBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gYWogYSByaWdodFxuICogQHBhcmFtIHthcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtpbnR9IGJqIGIgcmlnaHRcbiAqXG4gKiBAcmV0dXJuIHtpbnR9IDEgaWYgYSA+IGI7IDAgaWYgYSA9IGI7IC0xIG90aGVyd2lzZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX0NNUCAoYSwgYWksIGFqLCBiLCBiaSwgYmope1xuXG5cdHZhciB0bXAgPSBhaiAtIGJqICsgYmk7XG5cblx0Zm9yICg7IGFpIDwgdG1wOyArK2FpKVxuXHRcdGlmIChhW2FpXSA+IDApIHJldHVybiAxO1xuXG5cdC8vIHNhbWUgc2l6ZSBhaiAtIGFpID09PSBiaiAtIGJpXG5cdGZvciAoOyBhaSA8IGFqOyArK2FpLCArK2JpKSB7XG5cdFx0aWYgKGFbYWldID4gYltiaV0pIHJldHVybiAgMTtcblx0XHRpZiAoYVthaV0gPCBiW2JpXSkgcmV0dXJuIC0xO1xuXHR9XG5cblx0cmV0dXJuIDA7XG59XG4iXX0=