'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._convert_to_larger = _convert_to_larger;

var _ = require('.');

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

function _convert_to_larger(f, t, a, ai, aj, b, bi, bj) {
  var _log2 = (0, _._log)(t, f),
      _log3 = _slicedToArray(_log2, 2),
      z = _log3[0],
      x = _log3[1];

  if (x === 1) return (0, _._convert_to_larger_fast)(f, z, a, ai, aj, b, bi, bj);

  return (0, _._convert_slow)(f, t, a, ai, aj, b, bi, bj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2NvbnZlcnRfdG9fbGFyZ2VyLmpzIl0sIm5hbWVzIjpbIl9jb252ZXJ0X3RvX2xhcmdlciIsImYiLCJ0IiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsInoiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQWNnQkEsa0IsR0FBQUEsa0I7O0FBZGhCOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSxrQkFBVCxDQUE4QkMsQ0FBOUIsRUFBa0NDLENBQWxDLEVBQXNDQyxDQUF0QyxFQUEwQ0MsRUFBMUMsRUFBK0NDLEVBQS9DLEVBQW9EQyxDQUFwRCxFQUF3REMsRUFBeEQsRUFBNkRDLEVBQTdELEVBQWtFO0FBQUEsY0FFdEQsWUFBTU4sQ0FBTixFQUFVRCxDQUFWLENBRnNEO0FBQUE7QUFBQSxNQUVoRVEsQ0FGZ0U7QUFBQSxNQUU1REMsQ0FGNEQ7O0FBSXhFLE1BQUtBLE1BQU0sQ0FBWCxFQUFlLE9BQU8sK0JBQXlCVCxDQUF6QixFQUE2QlEsQ0FBN0IsRUFBaUNOLENBQWpDLEVBQXFDQyxFQUFyQyxFQUEwQ0MsRUFBMUMsRUFBK0NDLENBQS9DLEVBQW1EQyxFQUFuRCxFQUF3REMsRUFBeEQsQ0FBUDs7QUFFZixTQUFPLHFCQUFlUCxDQUFmLEVBQW1CQyxDQUFuQixFQUF1QkMsQ0FBdkIsRUFBMkJDLEVBQTNCLEVBQWdDQyxFQUFoQyxFQUFxQ0MsQ0FBckMsRUFBeUNDLEVBQXpDLEVBQThDQyxFQUE5QyxDQUFQO0FBRUEiLCJmaWxlIjoiX2NvbnZlcnRfdG9fbGFyZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2xvZyAsIF9jb252ZXJ0X3RvX2xhcmdlcl9mYXN0ICwgX2NvbnZlcnRfc2xvdyB9IGZyb20gJy4nIDtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGYgdGhlIGJhc2UgdG8gY29udmVydCBmcm9tXG4gKiBAcGFyYW0ge051bWJlcn0gdCB0aGUgYmFzZSB0byBjb252ZXJ0IHRvXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBzdGFydCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGVuZCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gYiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBzdGFydCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmogZW5kIG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZlcnRfdG9fbGFyZ2VyICggZiAsIHQgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkge1xuXG5cdGNvbnN0IFsgeiAsIHggXSA9IF9sb2coIHQgLCBmICkgO1xuXG5cdGlmICggeCA9PT0gMSApIHJldHVybiBfY29udmVydF90b19sYXJnZXJfZmFzdCggZiAsIHogLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkgO1xuXG5cdHJldHVybiBfY29udmVydF9zbG93KCBmICwgdCAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSA7XG5cbn1cbiJdfQ==