"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._mod_limb = _mod_limb;

/**
 * Divides a big endian number by a single limb number and returns only the
 * remainder. Can only work with limbs of size at most sqrt( 2^53 ).
 */

function _mod_limb(r, z, a, ai, aj) {

	var x = 0;

	while (ai < aj) {

		x *= r;
		x += a[ai];
		x %= z;
		++ai;
	}

	return x;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19tb2RfbGltYi5qcyJdLCJuYW1lcyI6WyJfbW9kX2xpbWIiLCJyIiwieiIsImEiLCJhaSIsImFqIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNZ0JBLFMsR0FBQUEsUzs7QUFMaEI7Ozs7O0FBS08sU0FBU0EsU0FBVCxDQUFxQkMsQ0FBckIsRUFBeUJDLENBQXpCLEVBQTZCQyxDQUE3QixFQUFpQ0MsRUFBakMsRUFBc0NDLEVBQXRDLEVBQTJDOztBQUVqRCxLQUFJQyxJQUFJLENBQVI7O0FBRUEsUUFBUUYsS0FBS0MsRUFBYixFQUFrQjs7QUFFakJDLE9BQUtMLENBQUw7QUFDQUssT0FBS0gsRUFBRUMsRUFBRixDQUFMO0FBQ0FFLE9BQUtKLENBQUw7QUFDQSxJQUFFRSxFQUFGO0FBRUE7O0FBRUQsUUFBT0UsQ0FBUDtBQUVBIiwiZmlsZSI6Il9tb2RfbGltYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBEaXZpZGVzIGEgYmlnIGVuZGlhbiBudW1iZXIgYnkgYSBzaW5nbGUgbGltYiBudW1iZXIgYW5kIHJldHVybnMgb25seSB0aGVcbiAqIHJlbWFpbmRlci4gQ2FuIG9ubHkgd29yayB3aXRoIGxpbWJzIG9mIHNpemUgYXQgbW9zdCBzcXJ0KCAyXjUzICkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9tb2RfbGltYiAoIHIgLCB6ICwgYSAsIGFpICwgYWogKSB7XG5cblx0bGV0IHggPSAwIDtcblxuXHR3aGlsZSAoIGFpIDwgYWogKSB7XG5cblx0XHR4ICo9IHIgO1xuXHRcdHggKz0gYVthaV0gO1xuXHRcdHggJT0geiA7XG5cdFx0KythaSA7XG5cblx0fVxuXG5cdHJldHVybiB4IDtcblxufVxuIl19