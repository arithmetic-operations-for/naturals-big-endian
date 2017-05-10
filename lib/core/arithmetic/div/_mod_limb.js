"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._mod_limb = _mod_limb;

/**
 * Divides a big endian number by a single limb number and returns only the
 * remainder. Can only work with limbs of size at most sqrt( 2^53 ).
 *
 * @param {Number} r The radix of D.
 * @param {Number} d The divisor.
 * @param {Array} D The dividend (NOT modified).
 * @param {Number} Di Left of D.
 * @param {Number} Dj Right of D.
 * @returns {Number} The remainder D % d.
 */
function _mod_limb(r, d, D, Di, Dj) {

  var R = 0;

  while (Di < Dj) {

    R *= r;
    R += D[Di];
    R %= d;
    ++Di;
  }

  return R;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19tb2RfbGltYi5qcyJdLCJuYW1lcyI6WyJfbW9kX2xpbWIiLCJyIiwiZCIsIkQiLCJEaSIsIkRqIiwiUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLFMsR0FBQUEsUzs7QUFYaEI7Ozs7Ozs7Ozs7O0FBV08sU0FBU0EsU0FBVCxDQUFxQkMsQ0FBckIsRUFBeUJDLENBQXpCLEVBQTZCQyxDQUE3QixFQUFpQ0MsRUFBakMsRUFBc0NDLEVBQXRDLEVBQTJDOztBQUVqRCxNQUFJQyxJQUFJLENBQVI7O0FBRUEsU0FBUUYsS0FBS0MsRUFBYixFQUFrQjs7QUFFakJDLFNBQUtMLENBQUw7QUFDQUssU0FBS0gsRUFBRUMsRUFBRixDQUFMO0FBQ0FFLFNBQUtKLENBQUw7QUFDQSxNQUFFRSxFQUFGO0FBRUE7O0FBRUQsU0FBT0UsQ0FBUDtBQUVBIiwiZmlsZSI6Il9tb2RfbGltYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBEaXZpZGVzIGEgYmlnIGVuZGlhbiBudW1iZXIgYnkgYSBzaW5nbGUgbGltYiBudW1iZXIgYW5kIHJldHVybnMgb25seSB0aGVcbiAqIHJlbWFpbmRlci4gQ2FuIG9ubHkgd29yayB3aXRoIGxpbWJzIG9mIHNpemUgYXQgbW9zdCBzcXJ0KCAyXjUzICkuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgVGhlIHJhZGl4IG9mIEQuXG4gKiBAcGFyYW0ge051bWJlcn0gZCBUaGUgZGl2aXNvci5cbiAqIEBwYXJhbSB7QXJyYXl9IEQgVGhlIGRpdmlkZW5kIChOT1QgbW9kaWZpZWQpLlxuICogQHBhcmFtIHtOdW1iZXJ9IERpIExlZnQgb2YgRC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBEaiBSaWdodCBvZiBELlxuICogQHJldHVybnMge051bWJlcn0gVGhlIHJlbWFpbmRlciBEICUgZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9tb2RfbGltYiAoIHIgLCBkICwgRCAsIERpICwgRGogKSB7XG5cblx0bGV0IFIgPSAwIDtcblxuXHR3aGlsZSAoIERpIDwgRGogKSB7XG5cblx0XHRSICo9IHIgO1xuXHRcdFIgKz0gRFtEaV0gO1xuXHRcdFIgJT0gZCA7XG5cdFx0KytEaSA7XG5cblx0fVxuXG5cdHJldHVybiBSIDtcblxufVxuIl19