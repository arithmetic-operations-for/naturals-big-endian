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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2FkZC9fQURELmpzIl0sIm5hbWVzIjpbIl9BREQiLCJyIiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImMiLCJjaSIsImNqIiwiQyIsInQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JnQkEsSSxHQUFBQSxJO0FBaEJoQjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTyxTQUFTQSxJQUFULENBQWdCQyxDQUFoQixFQUFvQkMsQ0FBcEIsRUFBd0JDLEVBQXhCLEVBQTZCQyxFQUE3QixFQUFrQ0MsQ0FBbEMsRUFBc0NDLEVBQXRDLEVBQTJDQyxFQUEzQyxFQUFnREMsQ0FBaEQsRUFBb0RDLEVBQXBELEVBQXlEQyxFQUF6RCxFQUE4RDs7QUFFcEUsTUFBSUMsSUFBSSxDQUFSOztBQUVBLFNBQVEsRUFBRUosRUFBRixJQUFRRCxFQUFoQixFQUFxQjtBQUNwQixRQUFNTSxJQUFJVixFQUFFLEVBQUVFLEVBQUosSUFBVUMsRUFBRUUsRUFBRixDQUFWLEdBQWtCSSxDQUE1QjtBQUNBSCxNQUFFLEVBQUVFLEVBQUosSUFBVUUsSUFBSVgsQ0FBZDtBQUNBVSxRQUFJQyxLQUFLWCxDQUFUO0FBQ0E7O0FBRUQsU0FBUSxFQUFFRyxFQUFGLElBQVFELEVBQWhCLEVBQXFCO0FBQ3BCLFFBQU1TLEtBQUlWLEVBQUVFLEVBQUYsSUFBUU8sQ0FBbEI7QUFDQUgsTUFBRSxFQUFFRSxFQUFKLElBQVVFLEtBQUlYLENBQWQ7QUFDQVUsUUFBSUMsTUFBS1gsQ0FBVDtBQUNBOztBQUVELE1BQUssRUFBRVMsRUFBRixJQUFRRCxFQUFiLEVBQWtCRCxFQUFFRSxFQUFGLElBQVEsQ0FBQ0MsQ0FBVDtBQUVsQiIsImZpbGUiOiJfQURELmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBZGRzIHR3byBiaWcgZW5kaWFuIGFycmF5cyBhbmQgcHV0cyByZXN1bHQgaW4gYSBkZXN0aW5hdGlvbiBhcnJheS5cbiAqIFdyYXBzIG9uIG92ZXJmbG93LiB8Q3wgPj0gfEF8ID49IHxCfC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gciBiYXNlIChyYWRpeClcbiAqIEBwYXJhbSB7QXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGEgcmlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBiIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBiIHJpZ2h0XG4gKiBAcGFyYW0ge0FycmF5fSBjIHJlc3VsdCwgbXVzdCBiZSAwIGluaXRpYWxpemVkXG4gKiBAcGFyYW0ge051bWJlcn0gY2kgYyBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gY2ogYyByaWdodFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfQUREICggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBjICwgY2kgLCBjaiApIHtcblxuXHRsZXQgQyA9IDAgO1xuXG5cdHdoaWxlICggLS1iaiA+PSBiaSApIHtcblx0XHRjb25zdCB0ID0gYVstLWFqXSArIGJbYmpdICsgQyA7XG5cdFx0Y1stLWNqXSA9IHQgJSByIDtcblx0XHRDID0gdCA+PSByIDtcblx0fVxuXG5cdHdoaWxlICggLS1haiA+PSBhaSApIHtcblx0XHRjb25zdCB0ID0gYVthal0gKyBDIDtcblx0XHRjWy0tY2pdID0gdCAlIHIgO1xuXHRcdEMgPSB0ID49IHIgO1xuXHR9XG5cblx0aWYgKCAtLWNqID49IGNpICkgY1tjal0gPSArQyA7XG5cbn1cbiJdfQ==