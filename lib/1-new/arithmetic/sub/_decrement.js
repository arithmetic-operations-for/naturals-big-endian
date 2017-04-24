"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._decrement = _decrement;

/**
 * Subtracts 1 from a big endian array.
 *
 * @param {Number} r radix
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */
function _decrement(r, a, ai, aj) {

  while (--aj >= ai) {

    if (a[aj] > 0) {
      --a[aj];
      return;
    }

    a[aj] = r - 1;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL3N1Yi9fZGVjcmVtZW50LmpzIl0sIm5hbWVzIjpbIl9kZWNyZW1lbnQiLCJyIiwiYSIsImFpIiwiYWoiXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2dCQSxVLEdBQUFBLFU7O0FBUmhCOzs7Ozs7OztBQVFPLFNBQVNBLFVBQVQsQ0FBc0JDLENBQXRCLEVBQTBCQyxDQUExQixFQUE4QkMsRUFBOUIsRUFBbUNDLEVBQW5DLEVBQXdDOztBQUU5QyxTQUFRLEVBQUVBLEVBQUYsSUFBUUQsRUFBaEIsRUFBcUI7O0FBRXBCLFFBQUtELEVBQUVFLEVBQUYsSUFBUSxDQUFiLEVBQWlCO0FBQ2hCLFFBQUVGLEVBQUVFLEVBQUYsQ0FBRjtBQUNBO0FBQ0E7O0FBRURGLE1BQUVFLEVBQUYsSUFBUUgsSUFBSSxDQUFaO0FBRUE7QUFFRCIsImZpbGUiOiJfZGVjcmVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFN1YnRyYWN0cyAxIGZyb20gYSBiaWcgZW5kaWFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSByIHJhZGl4XG4gKiBAcGFyYW0ge0FycmF5fSBhIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBhIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBhIHJpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZGVjcmVtZW50ICggciAsIGEgLCBhaSAsIGFqICkge1xuXG5cdHdoaWxlICggLS1haiA+PSBhaSApIHtcblxuXHRcdGlmICggYVthal0gPiAwICkge1xuXHRcdFx0LS1hW2FqXSA7XG5cdFx0XHRyZXR1cm4gO1xuXHRcdH1cblxuXHRcdGFbYWpdID0gciAtIDEgO1xuXG5cdH1cblxufVxuIl19