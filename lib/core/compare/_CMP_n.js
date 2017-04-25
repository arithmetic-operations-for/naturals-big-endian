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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbXBhcmUvX0NNUF9uLmpzIl0sIm5hbWVzIjpbIl9DTVBfbiIsImEiLCJhaSIsImFqIiwiYiIsImJpIl0sIm1hcHBpbmdzIjoiOzs7OztRQWFnQkEsTSxHQUFBQSxNOztBQVpoQjs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0EsTUFBVCxDQUFrQkMsQ0FBbEIsRUFBc0JDLEVBQXRCLEVBQTJCQyxFQUEzQixFQUFnQ0MsQ0FBaEMsRUFBb0NDLEVBQXBDLEVBQXlDOztBQUUvQyxTQUFPSCxLQUFLQyxFQUFaLEVBQWdCLEVBQUVELEVBQUYsRUFBTSxFQUFFRyxFQUF4QixFQUE0QjtBQUMzQixRQUFJSixFQUFFQyxFQUFGLElBQVFFLEVBQUVDLEVBQUYsQ0FBWixFQUFtQixPQUFRLENBQVI7QUFDbkIsUUFBSUosRUFBRUMsRUFBRixJQUFRRSxFQUFFQyxFQUFGLENBQVosRUFBbUIsT0FBTyxDQUFDLENBQVI7QUFDbkI7O0FBRUQsU0FBTyxDQUFQO0FBQ0EiLCJmaWxlIjoiX0NNUF9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvbXBhcmVzIHR3byBiaWcgZW5kaWFuIGFycmF5cywgfGF8ID0gfGJ8XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gYWkgYSBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gYWogYSByaWdodFxuICogQHBhcmFtIHtBcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIGIgbGVmdFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gMSBpZiBhID4gYjsgMCBpZiBhID0gYjsgLTEgb3RoZXJ3aXNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfQ01QX24gKCBhICwgYWkgLCBhaiAsIGIgLCBiaSApIHtcblxuXHRmb3IgKDsgYWkgPCBhajsgKythaSwgKytiaSkge1xuXHRcdGlmIChhW2FpXSA+IGJbYmldKSByZXR1cm4gIDE7XG5cdFx0aWYgKGFbYWldIDwgYltiaV0pIHJldHVybiAtMTtcblx0fVxuXG5cdHJldHVybiAwO1xufVxuIl19