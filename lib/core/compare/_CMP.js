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
 * @return {int} result 1 if a > b; 0 if a = b; -1 otherwise.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbXBhcmUvX0NNUC5qcyJdLCJuYW1lcyI6WyJfQ01QIiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsInRtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFjZ0JBLEksR0FBQUEsSTs7QUFiaEI7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTQSxJQUFULENBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQkMsQ0FBMUIsRUFBNkJDLEVBQTdCLEVBQWlDQyxFQUFqQyxFQUFvQzs7QUFFMUMsTUFBSUMsTUFBTUosS0FBS0csRUFBTCxHQUFVRCxFQUFwQjs7QUFFQSxTQUFPSCxLQUFLSyxHQUFaLEVBQWlCLEVBQUVMLEVBQW5CO0FBQ0MsUUFBSUQsRUFBRUMsRUFBRixJQUFRLENBQVosRUFBZSxPQUFPLENBQVA7QUFEaEIsR0FKMEMsQ0FPMUM7QUFDQSxTQUFPQSxLQUFLQyxFQUFaLEVBQWdCLEVBQUVELEVBQUYsRUFBTSxFQUFFRyxFQUF4QixFQUE0QjtBQUMzQixRQUFJSixFQUFFQyxFQUFGLElBQVFFLEVBQUVDLEVBQUYsQ0FBWixFQUFtQixPQUFRLENBQVI7QUFDbkIsUUFBSUosRUFBRUMsRUFBRixJQUFRRSxFQUFFQyxFQUFGLENBQVosRUFBbUIsT0FBTyxDQUFDLENBQVI7QUFDbkI7O0FBRUQsU0FBTyxDQUFQO0FBQ0EiLCJmaWxlIjoiX0NNUC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDb21wYXJlcyB0d28gYmlnIGVuZGlhbiBhcnJheXMsIHxhfCA+PSB8YnxcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7aW50fSBhaSBhIGxlZnRcbiAqIEBwYXJhbSB7aW50fSBhaiBhIHJpZ2h0XG4gKiBAcGFyYW0ge2FycmF5fSBiIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gYmogYiByaWdodFxuICpcbiAqIEByZXR1cm4ge2ludH0gcmVzdWx0IDEgaWYgYSA+IGI7IDAgaWYgYSA9IGI7IC0xIG90aGVyd2lzZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX0NNUCAoYSwgYWksIGFqLCBiLCBiaSwgYmope1xuXG5cdHZhciB0bXAgPSBhaiAtIGJqICsgYmk7XG5cblx0Zm9yICg7IGFpIDwgdG1wOyArK2FpKVxuXHRcdGlmIChhW2FpXSA+IDApIHJldHVybiAxO1xuXG5cdC8vIHNhbWUgc2l6ZSBhaiAtIGFpID09PSBiaiAtIGJpXG5cdGZvciAoOyBhaSA8IGFqOyArK2FpLCArK2JpKSB7XG5cdFx0aWYgKGFbYWldID4gYltiaV0pIHJldHVybiAgMTtcblx0XHRpZiAoYVthaV0gPCBiW2JpXSkgcmV0dXJuIC0xO1xuXHR9XG5cblx0cmV0dXJuIDA7XG59XG4iXX0=