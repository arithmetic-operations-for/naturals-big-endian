'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._convert = _convert;

var _ = require('.');

var _array = require('../array');

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

function _convert(f, t, a, ai, aj, b, bi, bj) {

  if (f > t) return (0, _._convert_to_smaller)(f, t, a, ai, aj, b, bi, bj);
  if (f < t) return (0, _._convert_to_larger)(f, t, a, ai, aj, b, bi, bj);
  return (0, _array._copy)(a, ai, aj, b, bi);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0LmpzIl0sIm5hbWVzIjpbIl9jb252ZXJ0IiwiZiIsInQiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQWVnQkEsUSxHQUFBQSxROztBQWZoQjs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0EsUUFBVCxDQUFvQkMsQ0FBcEIsRUFBd0JDLENBQXhCLEVBQTRCQyxDQUE1QixFQUFnQ0MsRUFBaEMsRUFBcUNDLEVBQXJDLEVBQTBDQyxDQUExQyxFQUE4Q0MsRUFBOUMsRUFBbURDLEVBQW5ELEVBQXdEOztBQUU5RCxNQUFLUCxJQUFJQyxDQUFULEVBQWEsT0FBTywyQkFBcUJELENBQXJCLEVBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsRUFBaUNDLEVBQWpDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsQ0FBM0MsRUFBK0NDLEVBQS9DLEVBQW9EQyxFQUFwRCxDQUFQO0FBQ2IsTUFBS1AsSUFBSUMsQ0FBVCxFQUFhLE9BQU8sMEJBQW9CRCxDQUFwQixFQUF3QkMsQ0FBeEIsRUFBNEJDLENBQTVCLEVBQWdDQyxFQUFoQyxFQUFxQ0MsRUFBckMsRUFBMENDLENBQTFDLEVBQThDQyxFQUE5QyxFQUFtREMsRUFBbkQsQ0FBUDtBQUNiLFNBQU8sa0JBQU9MLENBQVAsRUFBV0MsRUFBWCxFQUFnQkMsRUFBaEIsRUFBcUJDLENBQXJCLEVBQXlCQyxFQUF6QixDQUFQO0FBRUEiLCJmaWxlIjoiX2NvbnZlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfY29udmVydF90b19zbWFsbGVyICwgX2NvbnZlcnRfdG9fbGFyZ2VyIH0gZnJvbSAnLicgO1xuaW1wb3J0IHsgX2NvcHkgfSBmcm9tICcuLi9hcnJheScgO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gZiB0aGUgYmFzZSB0byBjb252ZXJ0IGZyb21cbiAqIEBwYXJhbSB7TnVtYmVyfSB0IHRoZSBiYXNlIHRvIGNvbnZlcnQgdG9cbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIHN0YXJ0IG9mZnNldCBpbiB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWogZW5kIG9mZnNldCBpbiB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBiIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIHN0YXJ0IG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBlbmQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udmVydCAoIGYgLCB0ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIHtcblxuXHRpZiAoIGYgPiB0ICkgcmV0dXJuIF9jb252ZXJ0X3RvX3NtYWxsZXIoIGYgLCB0ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIDtcblx0aWYgKCBmIDwgdCApIHJldHVybiBfY29udmVydF90b19sYXJnZXIoIGYgLCB0ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIDtcblx0cmV0dXJuIF9jb3B5KCBhICwgYWkgLCBhaiAsIGIgLCBiaSApIDtcblxufVxuIl19