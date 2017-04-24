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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19sb2cuanMiXSwibmFtZXMiOlsiX2xvZyIsIngiLCJ5IiwieiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFDZ0JBLEksR0FBQUEsSTtBQUFULFNBQVNBLElBQVQsQ0FBZ0JDLENBQWhCLEVBQW9CQyxDQUFwQixFQUF3Qjs7QUFFOUIsS0FBSUMsSUFBSSxDQUFSOztBQUVBLFFBQVFGLEtBQUtDLENBQWIsRUFBaUI7QUFDaEIsTUFBS0QsSUFBSUMsQ0FBVCxFQUFhO0FBQ2JELE9BQUtDLENBQUw7QUFDQSxJQUFFQyxDQUFGO0FBQ0E7O0FBRUQsUUFBTyxDQUFFQSxDQUFGLEVBQU1GLENBQU4sQ0FBUDtBQUVBIiwiZmlsZSI6Il9sb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBfbG9nICggeCAsIHkgKSB7XG5cblx0bGV0IHogPSAwIDtcblxuXHR3aGlsZSAoIHggPj0geSApIHtcblx0XHRpZiAoIHggJSB5ICkgYnJlYWsgO1xuXHRcdHggLz0geSA7XG5cdFx0Kyt6IDtcblx0fVxuXG5cdHJldHVybiBbIHogLCB4IF0gO1xuXG59XG4iXX0=