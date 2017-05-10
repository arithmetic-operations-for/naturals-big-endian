'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._idivmod_limb = _idivmod_limb;

var _ = require('.');

/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 *
 * @param {Number} r The radix.
 * @param {Number} d The divisor.
 * @param {Array} D The dividend.
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} Q The quotient.
 * @param {Number} Qi Left of quotient.
 */
function _idivmod_limb(r, d, D, Di, Dj, Q, Qi) {

  // simply prefix the dividend with 0
  (0, _._idivmod_limb_with_prefix)(r, 0, d, D, Di, Dj, Q, Qi);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19pZGl2bW9kX2xpbWIuanMiXSwibmFtZXMiOlsiX2lkaXZtb2RfbGltYiIsInIiLCJkIiwiRCIsIkRpIiwiRGoiLCJRIiwiUWkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2dCQSxhLEdBQUFBLGE7O0FBZGhCOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSxhQUFULENBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsRUFBaUNDLENBQWpDLEVBQXFDQyxFQUFyQyxFQUEwQ0MsRUFBMUMsRUFBK0NDLENBQS9DLEVBQW1EQyxFQUFuRCxFQUF3RDs7QUFFOUQ7QUFDQSxtQ0FBMkJOLENBQTNCLEVBQStCLENBQS9CLEVBQW1DQyxDQUFuQyxFQUF1Q0MsQ0FBdkMsRUFBMkNDLEVBQTNDLEVBQWdEQyxFQUFoRCxFQUFxREMsQ0FBckQsRUFBeURDLEVBQXpEO0FBRUEiLCJmaWxlIjoiX2lkaXZtb2RfbGltYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9pZGl2bW9kX2xpbWJfd2l0aF9wcmVmaXggfSBmcm9tICcuJyA7XG5cbi8qKlxuICogRGl2aWRlcyBhIGJpZyBlbmRpYW4gbnVtYmVyIGJ5IGEgc2luZ2xlIGxpbWIgbnVtYmVyLlxuICogQ2FuIG9ubHkgd29yayB3aXRoIGxpbWJzIG9mIHNpemUgYXQgbW9zdCBzcXJ0KCAyXjUzICkuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgVGhlIHJhZGl4LlxuICogQHBhcmFtIHtOdW1iZXJ9IGQgVGhlIGRpdmlzb3IuXG4gKiBAcGFyYW0ge0FycmF5fSBEIFRoZSBkaXZpZGVuZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBEaSBMZWZ0IG9mIGRpdmlkZW5kLlxuICogQHBhcmFtIHtOdW1iZXJ9IERqIFJpZ2h0IG9mIGRpdmlkZW5kLlxuICogQHBhcmFtIHtBcnJheX0gUSBUaGUgcXVvdGllbnQuXG4gKiBAcGFyYW0ge051bWJlcn0gUWkgTGVmdCBvZiBxdW90aWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9pZGl2bW9kX2xpbWIgKCByICwgZCAsIEQgLCBEaSAsIERqICwgUSAsIFFpICkge1xuXG5cdC8vIHNpbXBseSBwcmVmaXggdGhlIGRpdmlkZW5kIHdpdGggMFxuXHRfaWRpdm1vZF9saW1iX3dpdGhfcHJlZml4KCByICwgMCAsIGQgLCBEICwgRGkgLCBEaiAsIFEgLCBRaSApIDtcblxufVxuIl19