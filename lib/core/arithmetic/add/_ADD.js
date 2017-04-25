"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ADD = _ADD;
/**
 * Adds two big endian arrays and puts result in a destination array.
 * Wraps on overflow. |C| >= |A| >= |B|.
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {Array} c result, must be 0 initialized
 * @param {Number} ci c left
 * @param {Number} cj c right
 */

function _ADD(r, a, ai, aj, b, bi, bj, c, ci, cj) {

  var C = 0;

  while (--bj >= bi) {
    var t = a[--aj] + b[bj] + C;
    c[--cj] = t % r;
    C = t >= r;
  }

  while (--aj >= ai) {
    var _t = a[aj] + C;
    c[--cj] = _t % r;
    C = _t >= r;
  }

  if (--cj >= ci) c[cj] = +C;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvYWRkL19BREQuanMiXSwibmFtZXMiOlsiX0FERCIsInIiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwiYyIsImNpIiwiY2oiLCJDIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxJLEdBQUFBLEk7QUFoQmhCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVNBLElBQVQsQ0FBZ0JDLENBQWhCLEVBQW9CQyxDQUFwQixFQUF3QkMsRUFBeEIsRUFBNkJDLEVBQTdCLEVBQWtDQyxDQUFsQyxFQUFzQ0MsRUFBdEMsRUFBMkNDLEVBQTNDLEVBQWdEQyxDQUFoRCxFQUFvREMsRUFBcEQsRUFBeURDLEVBQXpELEVBQThEOztBQUVwRSxNQUFJQyxJQUFJLENBQVI7O0FBRUEsU0FBUSxFQUFFSixFQUFGLElBQVFELEVBQWhCLEVBQXFCO0FBQ3BCLFFBQU1NLElBQUlWLEVBQUUsRUFBRUUsRUFBSixJQUFVQyxFQUFFRSxFQUFGLENBQVYsR0FBa0JJLENBQTVCO0FBQ0FILE1BQUUsRUFBRUUsRUFBSixJQUFVRSxJQUFJWCxDQUFkO0FBQ0FVLFFBQUlDLEtBQUtYLENBQVQ7QUFDQTs7QUFFRCxTQUFRLEVBQUVHLEVBQUYsSUFBUUQsRUFBaEIsRUFBcUI7QUFDcEIsUUFBTVMsS0FBSVYsRUFBRUUsRUFBRixJQUFRTyxDQUFsQjtBQUNBSCxNQUFFLEVBQUVFLEVBQUosSUFBVUUsS0FBSVgsQ0FBZDtBQUNBVSxRQUFJQyxNQUFLWCxDQUFUO0FBQ0E7O0FBRUQsTUFBSyxFQUFFUyxFQUFGLElBQVFELEVBQWIsRUFBa0JELEVBQUVFLEVBQUYsSUFBUSxDQUFDQyxDQUFUO0FBRWxCIiwiZmlsZSI6Il9BREQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFkZHMgdHdvIGJpZyBlbmRpYW4gYXJyYXlzIGFuZCBwdXRzIHJlc3VsdCBpbiBhIGRlc3RpbmF0aW9uIGFycmF5LlxuICogV3JhcHMgb24gb3ZlcmZsb3cuIHxDfCA+PSB8QXwgPj0gfEJ8LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSByIGJhc2UgKHJhZGl4KVxuICogQHBhcmFtIHtBcnJheX0gYSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gYWkgYSBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gYWogYSByaWdodFxuICogQHBhcmFtIHtBcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGJqIGIgcmlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGMgcmVzdWx0LCBtdXN0IGJlIDAgaW5pdGlhbGl6ZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjaSBjIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjaiBjIHJpZ2h0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9BREQgKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSAsIGNqICkge1xuXG5cdGxldCBDID0gMCA7XG5cblx0d2hpbGUgKCAtLWJqID49IGJpICkge1xuXHRcdGNvbnN0IHQgPSBhWy0tYWpdICsgYltial0gKyBDIDtcblx0XHRjWy0tY2pdID0gdCAlIHIgO1xuXHRcdEMgPSB0ID49IHIgO1xuXHR9XG5cblx0d2hpbGUgKCAtLWFqID49IGFpICkge1xuXHRcdGNvbnN0IHQgPSBhW2FqXSArIEMgO1xuXHRcdGNbLS1jal0gPSB0ICUgciA7XG5cdFx0QyA9IHQgPj0gciA7XG5cdH1cblxuXHRpZiAoIC0tY2ogPj0gY2kgKSBjW2NqXSA9ICtDIDtcblxufVxuIl19