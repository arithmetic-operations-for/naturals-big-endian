'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.trim_natural = trim_natural;

var _ = require('.');

var _array = require('../array');

function trim_natural(a, ai, aj) {

	var x = (0, _._trim_positive)(a, ai, aj);

	if (x >= aj) return [0];

	var b = (0, _array._alloc)(aj - x);

	(0, _array._copy)(a, x, aj, b, 0);

	return b;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L3RyaW1fbmF0dXJhbC5qcyJdLCJuYW1lcyI6WyJ0cmltX25hdHVyYWwiLCJhIiwiYWkiLCJhaiIsIngiLCJiIl0sIm1hcHBpbmdzIjoiOzs7OztRQUdnQkEsWSxHQUFBQSxZOztBQUhoQjs7QUFDQTs7QUFFTyxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0QkMsRUFBNUIsRUFBaUNDLEVBQWpDLEVBQXNDOztBQUU1QyxLQUFNQyxJQUFJLHNCQUFnQkgsQ0FBaEIsRUFBb0JDLEVBQXBCLEVBQXlCQyxFQUF6QixDQUFWOztBQUVBLEtBQUtDLEtBQUtELEVBQVYsRUFBZSxPQUFPLENBQUUsQ0FBRixDQUFQOztBQUVmLEtBQU1FLElBQUksbUJBQVFGLEtBQUtDLENBQWIsQ0FBVjs7QUFFQSxtQkFBT0gsQ0FBUCxFQUFXRyxDQUFYLEVBQWVELEVBQWYsRUFBb0JFLENBQXBCLEVBQXdCLENBQXhCOztBQUVBLFFBQU9BLENBQVA7QUFFQSIsImZpbGUiOiJ0cmltX25hdHVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfdHJpbV9wb3NpdGl2ZSB9IGZyb20gJy4nIDtcbmltcG9ydCB7IF9hbGxvYyAsIF9jb3B5IH0gZnJvbSAnLi4vYXJyYXknIDtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1fbmF0dXJhbCAoIGEgLCBhaSAsIGFqICkge1xuXG5cdGNvbnN0IHggPSBfdHJpbV9wb3NpdGl2ZSggYSAsIGFpICwgYWogKSA7XG5cblx0aWYgKCB4ID49IGFqICkgcmV0dXJuIFsgMCBdIDtcblxuXHRjb25zdCBiID0gX2FsbG9jKCBhaiAtIHggKSA7XG5cblx0X2NvcHkoIGEgLCB4ICwgYWogLCBiICwgMCApIDtcblxuXHRyZXR1cm4gYiA7XG5cbn1cbiJdfQ==