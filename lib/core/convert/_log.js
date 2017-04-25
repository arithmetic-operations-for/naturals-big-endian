"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._log = _log;
function _log(x, y) {

	var z = 0;

	while (x >= y) {
		if (x % y) break;
		x /= y;
		++z;
	}

	return [z, x];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2xvZy5qcyJdLCJuYW1lcyI6WyJfbG9nIiwieCIsInkiLCJ6Il0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsSSxHQUFBQSxJO0FBQVQsU0FBU0EsSUFBVCxDQUFnQkMsQ0FBaEIsRUFBb0JDLENBQXBCLEVBQXdCOztBQUU5QixLQUFJQyxJQUFJLENBQVI7O0FBRUEsUUFBUUYsS0FBS0MsQ0FBYixFQUFpQjtBQUNoQixNQUFLRCxJQUFJQyxDQUFULEVBQWE7QUFDYkQsT0FBS0MsQ0FBTDtBQUNBLElBQUVDLENBQUY7QUFDQTs7QUFFRCxRQUFPLENBQUVBLENBQUYsRUFBTUYsQ0FBTixDQUFQO0FBRUEiLCJmaWxlIjoiX2xvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIF9sb2cgKCB4ICwgeSApIHtcblxuXHRsZXQgeiA9IDAgO1xuXG5cdHdoaWxlICggeCA+PSB5ICkge1xuXHRcdGlmICggeCAlIHkgKSBicmVhayA7XG5cdFx0eCAvPSB5IDtcblx0XHQrK3ogO1xuXHR9XG5cblx0cmV0dXJuIFsgeiAsIHggXSA7XG5cbn1cbiJdfQ==