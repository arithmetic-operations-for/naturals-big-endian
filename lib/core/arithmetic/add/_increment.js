"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._increment = _increment;

/**
 * Adds 1 to a big endian array.
 *
 * @param {Number} r radix
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */
function _increment(r, a, ai, aj) {

	var _r = r - 1;

	while (--aj >= ai) {

		if (a[aj] < _r) {
			++a[aj];
			return;
		}

		a[aj] = 0;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvYWRkL19pbmNyZW1lbnQuanMiXSwibmFtZXMiOlsiX2luY3JlbWVudCIsInIiLCJhIiwiYWkiLCJhaiIsIl9yIl0sIm1hcHBpbmdzIjoiOzs7OztRQVNnQkEsVSxHQUFBQSxVOztBQVJoQjs7Ozs7Ozs7QUFRTyxTQUFTQSxVQUFULENBQXNCQyxDQUF0QixFQUEwQkMsQ0FBMUIsRUFBOEJDLEVBQTlCLEVBQW1DQyxFQUFuQyxFQUF3Qzs7QUFFOUMsS0FBTUMsS0FBS0osSUFBSSxDQUFmOztBQUVBLFFBQVEsRUFBRUcsRUFBRixJQUFRRCxFQUFoQixFQUFxQjs7QUFFcEIsTUFBS0QsRUFBRUUsRUFBRixJQUFRQyxFQUFiLEVBQWtCO0FBQ2pCLEtBQUVILEVBQUVFLEVBQUYsQ0FBRjtBQUNBO0FBQ0E7O0FBRURGLElBQUVFLEVBQUYsSUFBUSxDQUFSO0FBRUE7QUFFRCIsImZpbGUiOiJfaW5jcmVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEFkZHMgMSB0byBhIGJpZyBlbmRpYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgcmFkaXhcbiAqIEBwYXJhbSB7QXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGEgcmlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9pbmNyZW1lbnQgKCByICwgYSAsIGFpICwgYWogKSB7XG5cblx0Y29uc3QgX3IgPSByIC0gMSA7XG5cblx0d2hpbGUgKCAtLWFqID49IGFpICkge1xuXG5cdFx0aWYgKCBhW2FqXSA8IF9yICkge1xuXHRcdFx0KythW2FqXSA7XG5cdFx0XHRyZXR1cm4gO1xuXHRcdH1cblxuXHRcdGFbYWpdID0gMCA7XG5cblx0fVxuXG59XG4iXX0=