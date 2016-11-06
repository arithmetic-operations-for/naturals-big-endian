"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._convert_to_smaller = _convert_to_smaller;


/**
 *
 * @param {Number} f the base to convert from
 * @param {Number} t the base to convert to
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

function _convert_to_smaller(f, t, a, ai, aj, b, bi, bj) {
  var _log2 = _log(f, t),
      _log3 = _slicedToArray(_log2, 2),
      z = _log3[0],
      x = _log3[1];

  if (x === 1) return _convert_to_smaller_fast(t, z, a, ai, aj, b, bi, bj);

  return _convert_slow(f, t, a, ai, aj, b, bi, bj);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0X3RvX3NtYWxsZXIuanMiXSwibmFtZXMiOlsiX2NvbnZlcnRfdG9fc21hbGxlciIsImYiLCJ0IiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsIl9sb2ciLCJ6IiwieCIsIl9jb252ZXJ0X3RvX3NtYWxsZXJfZmFzdCIsIl9jb252ZXJ0X3Nsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBY2dCQSxtQixHQUFBQSxtQjs7O0FBWmhCOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSxtQkFBVCxDQUErQkMsQ0FBL0IsRUFBbUNDLENBQW5DLEVBQXVDQyxDQUF2QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLEVBQWhELEVBQXFEQyxDQUFyRCxFQUF5REMsRUFBekQsRUFBOERDLEVBQTlELEVBQW1FO0FBQUEsY0FFdkRDLEtBQU1SLENBQU4sRUFBVUMsQ0FBVixDQUZ1RDtBQUFBO0FBQUEsTUFFakVRLENBRmlFO0FBQUEsTUFFN0RDLENBRjZEOztBQUl6RSxNQUFLQSxNQUFNLENBQVgsRUFBZSxPQUFPQyx5QkFBMEJWLENBQTFCLEVBQThCUSxDQUE5QixFQUFrQ1AsQ0FBbEMsRUFBc0NDLEVBQXRDLEVBQTJDQyxFQUEzQyxFQUFnREMsQ0FBaEQsRUFBb0RDLEVBQXBELEVBQXlEQyxFQUF6RCxDQUFQOztBQUVmLFNBQU9LLGNBQWVaLENBQWYsRUFBbUJDLENBQW5CLEVBQXVCQyxDQUF2QixFQUEyQkMsRUFBM0IsRUFBZ0NDLEVBQWhDLEVBQXFDQyxDQUFyQyxFQUF5Q0MsRUFBekMsRUFBOENDLEVBQTlDLENBQVA7QUFFQSIsImZpbGUiOiJfY29udmVydF90b19zbWFsbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBmIHRoZSBiYXNlIHRvIGNvbnZlcnQgZnJvbVxuICogQHBhcmFtIHtOdW1iZXJ9IHQgdGhlIGJhc2UgdG8gY29udmVydCB0b1xuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWkgc3RhcnQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBlbmQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGIgdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmkgc3RhcnQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJqIGVuZCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252ZXJ0X3RvX3NtYWxsZXIgKCBmICwgdCAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSB7XG5cblx0Y29uc3QgWyB6ICwgeCBdID0gX2xvZyggZiAsIHQgKSA7XG5cblx0aWYgKCB4ID09PSAxICkgcmV0dXJuIF9jb252ZXJ0X3RvX3NtYWxsZXJfZmFzdCggdCAsIHogLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkgO1xuXG5cdHJldHVybiBfY29udmVydF9zbG93KCBmICwgdCAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSA7XG5cbn1cbiJdfQ==