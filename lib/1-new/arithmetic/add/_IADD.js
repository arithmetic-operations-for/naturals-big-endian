"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._IADD = _IADD;
/**
 * Adds a big endian array to another.
 * Wraps on overflow. |A| >= |B|.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 */

function _IADD(r, a, ai, aj, b, bi, bj) {

  var C = 0;

  while (--bj >= bi) {
    var t = a[--aj] + b[bj] + C;
    a[aj] = t % r;
    C = t >= r;
  }

  while (--aj >= ai) {
    var _t = a[aj] + C;
    a[aj] = _t % r;
    C = _t >= r;
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2FkZC9fSUFERC5qcyJdLCJuYW1lcyI6WyJfSUFERCIsInIiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwiQyIsInQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWdCQSxLLEdBQUFBLEs7QUFiaEI7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTQSxLQUFULENBQWlCQyxDQUFqQixFQUFxQkMsQ0FBckIsRUFBeUJDLEVBQXpCLEVBQThCQyxFQUE5QixFQUFtQ0MsQ0FBbkMsRUFBdUNDLEVBQXZDLEVBQTRDQyxFQUE1QyxFQUFpRDs7QUFFdkQsTUFBSUMsSUFBSSxDQUFSOztBQUVBLFNBQVEsRUFBRUQsRUFBRixJQUFRRCxFQUFoQixFQUFxQjtBQUNwQixRQUFNRyxJQUFJUCxFQUFFLEVBQUVFLEVBQUosSUFBVUMsRUFBRUUsRUFBRixDQUFWLEdBQWtCQyxDQUE1QjtBQUNBTixNQUFFRSxFQUFGLElBQVFLLElBQUlSLENBQVo7QUFDQU8sUUFBSUMsS0FBS1IsQ0FBVDtBQUNBOztBQUVELFNBQVEsRUFBRUcsRUFBRixJQUFRRCxFQUFoQixFQUFxQjtBQUNwQixRQUFNTSxLQUFJUCxFQUFFRSxFQUFGLElBQVFJLENBQWxCO0FBQ0FOLE1BQUVFLEVBQUYsSUFBUUssS0FBSVIsQ0FBWjtBQUNBTyxRQUFJQyxNQUFLUixDQUFUO0FBQ0E7QUFFRCIsImZpbGUiOiJfSUFERC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQWRkcyBhIGJpZyBlbmRpYW4gYXJyYXkgdG8gYW5vdGhlci5cbiAqIFdyYXBzIG9uIG92ZXJmbG93LiB8QXwgPj0gfEJ8LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSByIGJhc2UgKHJhZGl4KVxuICogQHBhcmFtIHtBcnJheX0gYSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gYWkgYSBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gYWogYSByaWdodFxuICogQHBhcmFtIHtBcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGJqIGIgcmlnaHRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX0lBREQgKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIHtcblxuXHRsZXQgQyA9IDAgO1xuXG5cdHdoaWxlICggLS1iaiA+PSBiaSApIHtcblx0XHRjb25zdCB0ID0gYVstLWFqXSArIGJbYmpdICsgQyA7XG5cdFx0YVthal0gPSB0ICUgciA7XG5cdFx0QyA9IHQgPj0gciA7XG5cdH1cblxuXHR3aGlsZSAoIC0tYWogPj0gYWkgKSB7XG5cdFx0Y29uc3QgdCA9IGFbYWpdICsgQyA7XG5cdFx0YVthal0gPSB0ICUgciA7XG5cdFx0QyA9IHQgPj0gciA7XG5cdH1cblxufVxuIl19