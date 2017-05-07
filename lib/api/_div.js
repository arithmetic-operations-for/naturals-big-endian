'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._div = _div;

var _core = require('../core');

/**
 * Computes the quotient and remainder of two numbers. Uses the most
 * appropriate algorithms depending on the size of the operands. The remainder
 * is written to the dividend array. There are a few assumptions made on the
 * input.
 *
 * Input
 * -----
 *  - No leading zeros
 *  - |A| = |C|
 *
 * @param {Number} r The base to work with.
 * @param {Array} a Dividend / Remainder array.
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b Divisor array.
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {Array} c Quotient array.
 * @param {Number} ci c left
 * @param {Number} cj c right
 */
function _div(r, a, ai, aj, b, bi, bj, c, ci, cj) {

  var n = bj - bi;

  if (n === 1) {
    return (0, _core._div_limb)(r, b[bi], a, ai, aj, c, ci);
  } else if (n < _core.THRESHOLD_DIV_DC) {
    return (0, _core.schoolbook_div)(r, a, ai, aj, b, bi, bj, c, ci);
  } else {
    return (0, _core._dc_div)(r, a, ai, aj, b, bi, bj, c, ci, cj);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvX2Rpdi5qcyJdLCJuYW1lcyI6WyJfZGl2IiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJjIiwiY2kiLCJjaiIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7O1FBeUJnQkEsSSxHQUFBQSxJOztBQXpCaEI7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQk8sU0FBU0EsSUFBVCxDQUFnQkMsQ0FBaEIsRUFBb0JDLENBQXBCLEVBQXdCQyxFQUF4QixFQUE2QkMsRUFBN0IsRUFBa0NDLENBQWxDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLENBQWhELEVBQW9EQyxFQUFwRCxFQUF5REMsRUFBekQsRUFBOEQ7O0FBRXBFLE1BQU1DLElBQUlKLEtBQUtELEVBQWY7O0FBRUEsTUFBS0ssTUFBTSxDQUFYLEVBQWU7QUFDZCxXQUFPLHFCQUFXVixDQUFYLEVBQWVJLEVBQUVDLEVBQUYsQ0FBZixFQUF1QkosQ0FBdkIsRUFBMkJDLEVBQTNCLEVBQWdDQyxFQUFoQyxFQUFxQ0ksQ0FBckMsRUFBeUNDLEVBQXpDLENBQVA7QUFDQSxHQUZELE1BSUssSUFBS0UsMEJBQUwsRUFBNEI7QUFDaEMsV0FBTywwQkFBZ0JWLENBQWhCLEVBQW9CQyxDQUFwQixFQUF3QkMsRUFBeEIsRUFBNkJDLEVBQTdCLEVBQWtDQyxDQUFsQyxFQUFzQ0MsRUFBdEMsRUFBMkNDLEVBQTNDLEVBQWdEQyxDQUFoRCxFQUFvREMsRUFBcEQsQ0FBUDtBQUNBLEdBRkksTUFJQTtBQUNKLFdBQU8sbUJBQVNSLENBQVQsRUFBYUMsQ0FBYixFQUFpQkMsRUFBakIsRUFBc0JDLEVBQXRCLEVBQTJCQyxDQUEzQixFQUErQkMsRUFBL0IsRUFBb0NDLEVBQXBDLEVBQXlDQyxDQUF6QyxFQUE2Q0MsRUFBN0MsRUFBa0RDLEVBQWxELENBQVA7QUFDQTtBQUVEIiwiZmlsZSI6Il9kaXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGl2X2xpbWIgLCBzY2hvb2xib29rX2RpdiAsIF9kY19kaXYgfSBmcm9tICcuLi9jb3JlJyA7XG5pbXBvcnQgeyBUSFJFU0hPTERfRElWX0RDIH0gZnJvbSAnLi4vY29yZScgO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBxdW90aWVudCBhbmQgcmVtYWluZGVyIG9mIHR3byBudW1iZXJzLiBVc2VzIHRoZSBtb3N0XG4gKiBhcHByb3ByaWF0ZSBhbGdvcml0aG1zIGRlcGVuZGluZyBvbiB0aGUgc2l6ZSBvZiB0aGUgb3BlcmFuZHMuIFRoZSByZW1haW5kZXJcbiAqIGlzIHdyaXR0ZW4gdG8gdGhlIGRpdmlkZW5kIGFycmF5LiBUaGVyZSBhcmUgYSBmZXcgYXNzdW1wdGlvbnMgbWFkZSBvbiB0aGVcbiAqIGlucHV0LlxuICpcbiAqIElucHV0XG4gKiAtLS0tLVxuICogIC0gTm8gbGVhZGluZyB6ZXJvc1xuICogIC0gfEF8ID0gfEN8XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgVGhlIGJhc2UgdG8gd29yayB3aXRoLlxuICogQHBhcmFtIHtBcnJheX0gYSBEaXZpZGVuZCAvIFJlbWFpbmRlciBhcnJheS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBhIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBhIHJpZ2h0XG4gKiBAcGFyYW0ge0FycmF5fSBiIERpdmlzb3IgYXJyYXkuXG4gKiBAcGFyYW0ge051bWJlcn0gYmkgYiBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gYmogYiByaWdodFxuICogQHBhcmFtIHtBcnJheX0gYyBRdW90aWVudCBhcnJheS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBjaSBjIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjaiBjIHJpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZGl2ICggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBjICwgY2kgLCBjaiApIHtcblxuXHRjb25zdCBuID0gYmogLSBiaSA7XG5cblx0aWYgKCBuID09PSAxICkge1xuXHRcdHJldHVybiBfZGl2X2xpbWIoIHIgLCBiW2JpXSAsIGEgLCBhaSAsIGFqICwgYyAsIGNpICkgO1xuXHR9XG5cblx0ZWxzZSBpZiAoIG4gPCBUSFJFU0hPTERfRElWX0RDICkge1xuXHRcdHJldHVybiBzY2hvb2xib29rX2RpdiggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBjICwgY2kgKSA7XG5cdH1cblxuXHRlbHNlIHtcblx0XHRyZXR1cm4gX2RjX2RpdiggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBjICwgY2kgLCBjaiApIDtcblx0fVxuXG59XG4iXX0=