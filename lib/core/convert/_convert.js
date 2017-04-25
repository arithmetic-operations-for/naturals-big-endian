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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2NvbnZlcnQuanMiXSwibmFtZXMiOlsiX2NvbnZlcnQiLCJmIiwidCIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZWdCQSxRLEdBQUFBLFE7O0FBZmhCOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSxRQUFULENBQW9CQyxDQUFwQixFQUF3QkMsQ0FBeEIsRUFBNEJDLENBQTVCLEVBQWdDQyxFQUFoQyxFQUFxQ0MsRUFBckMsRUFBMENDLENBQTFDLEVBQThDQyxFQUE5QyxFQUFtREMsRUFBbkQsRUFBd0Q7O0FBRTlELE1BQUtQLElBQUlDLENBQVQsRUFBYSxPQUFPLDJCQUFxQkQsQ0FBckIsRUFBeUJDLENBQXpCLEVBQTZCQyxDQUE3QixFQUFpQ0MsRUFBakMsRUFBc0NDLEVBQXRDLEVBQTJDQyxDQUEzQyxFQUErQ0MsRUFBL0MsRUFBb0RDLEVBQXBELENBQVA7QUFDYixNQUFLUCxJQUFJQyxDQUFULEVBQWEsT0FBTywwQkFBb0JELENBQXBCLEVBQXdCQyxDQUF4QixFQUE0QkMsQ0FBNUIsRUFBZ0NDLEVBQWhDLEVBQXFDQyxFQUFyQyxFQUEwQ0MsQ0FBMUMsRUFBOENDLEVBQTlDLEVBQW1EQyxFQUFuRCxDQUFQO0FBQ2IsU0FBTyxrQkFBT0wsQ0FBUCxFQUFXQyxFQUFYLEVBQWdCQyxFQUFoQixFQUFxQkMsQ0FBckIsRUFBeUJDLEVBQXpCLENBQVA7QUFFQSIsImZpbGUiOiJfY29udmVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9jb252ZXJ0X3RvX3NtYWxsZXIgLCBfY29udmVydF90b19sYXJnZXIgfSBmcm9tICcuJyA7XG5pbXBvcnQgeyBfY29weSB9IGZyb20gJy4uL2FycmF5JyA7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBmIHRoZSBiYXNlIHRvIGNvbnZlcnQgZnJvbVxuICogQHBhcmFtIHtOdW1iZXJ9IHQgdGhlIGJhc2UgdG8gY29udmVydCB0b1xuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWkgc3RhcnQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBlbmQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGIgdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmkgc3RhcnQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJqIGVuZCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252ZXJ0ICggZiAsIHQgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkge1xuXG5cdGlmICggZiA+IHQgKSByZXR1cm4gX2NvbnZlcnRfdG9fc21hbGxlciggZiAsIHQgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkgO1xuXHRpZiAoIGYgPCB0ICkgcmV0dXJuIF9jb252ZXJ0X3RvX2xhcmdlciggZiAsIHQgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkgO1xuXHRyZXR1cm4gX2NvcHkoIGEgLCBhaSAsIGFqICwgYiAsIGJpICkgO1xuXG59XG4iXX0=