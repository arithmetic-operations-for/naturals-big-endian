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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvdHJpbV9uYXR1cmFsLmpzIl0sIm5hbWVzIjpbInRyaW1fbmF0dXJhbCIsImEiLCJhaSIsImFqIiwieCIsImIiXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2dCQSxZLEdBQUFBLFk7O0FBSGhCOztBQUNBOztBQUVPLFNBQVNBLFlBQVQsQ0FBd0JDLENBQXhCLEVBQTRCQyxFQUE1QixFQUFpQ0MsRUFBakMsRUFBc0M7O0FBRTVDLEtBQU1DLElBQUksc0JBQWdCSCxDQUFoQixFQUFvQkMsRUFBcEIsRUFBeUJDLEVBQXpCLENBQVY7O0FBRUEsS0FBS0MsS0FBS0QsRUFBVixFQUFlLE9BQU8sQ0FBRSxDQUFGLENBQVA7O0FBRWYsS0FBTUUsSUFBSSxtQkFBUUYsS0FBS0MsQ0FBYixDQUFWOztBQUVBLG1CQUFPSCxDQUFQLEVBQVdHLENBQVgsRUFBZUQsRUFBZixFQUFvQkUsQ0FBcEIsRUFBd0IsQ0FBeEI7O0FBRUEsUUFBT0EsQ0FBUDtBQUVBIiwiZmlsZSI6InRyaW1fbmF0dXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF90cmltX3Bvc2l0aXZlIH0gZnJvbSAnLicgO1xuaW1wb3J0IHsgX2FsbG9jICwgX2NvcHkgfSBmcm9tICcuLi9hcnJheScgO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbV9uYXR1cmFsICggYSAsIGFpICwgYWogKSB7XG5cblx0Y29uc3QgeCA9IF90cmltX3Bvc2l0aXZlKCBhICwgYWkgLCBhaiApIDtcblxuXHRpZiAoIHggPj0gYWogKSByZXR1cm4gWyAwIF0gO1xuXG5cdGNvbnN0IGIgPSBfYWxsb2MoIGFqIC0geCApIDtcblxuXHRfY29weSggYSAsIHggLCBhaiAsIGIgLCAwICkgO1xuXG5cdHJldHVybiBiIDtcblxufVxuIl19