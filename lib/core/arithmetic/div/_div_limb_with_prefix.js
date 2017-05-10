"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._div_limb_with_prefix = _div_limb_with_prefix;
/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 * Allows to prefix the dividend with an intermediate remainder.
 *
 * Does not update the remainder.
 *
 * Input
 * -----
 *  - |Q| = |D|
 *
 * @param {Number} r The radix.
 * @param {Number} tmp Intermediate remainder (MUST be <code>< d</code>).
 * @param {Number} d The divisor.
 * @param {Array} D The dividend (NOT modified).
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} Q The quotient.
 * @param {Number} Qi Left of quotient.
 */
function _div_limb_with_prefix(r, tmp, d, D, Di, Dj, Q, Qi) {

  while (Di < Dj) {

    tmp *= r;tmp += D[Di];

    Q[Qi] = tmp / d | 0;
    tmp %= d;

    ++Qi;++Di;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19kaXZfbGltYl93aXRoX3ByZWZpeC5qcyJdLCJuYW1lcyI6WyJfZGl2X2xpbWJfd2l0aF9wcmVmaXgiLCJyIiwidG1wIiwiZCIsIkQiLCJEaSIsIkRqIiwiUSIsIlFpIl0sIm1hcHBpbmdzIjoiOzs7OztRQW9CZ0JBLHFCLEdBQUFBLHFCO0FBcEJoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQk8sU0FBU0EscUJBQVQsQ0FBaUNDLENBQWpDLEVBQXFDQyxHQUFyQyxFQUEyQ0MsQ0FBM0MsRUFBK0NDLENBQS9DLEVBQW1EQyxFQUFuRCxFQUF3REMsRUFBeEQsRUFBNkRDLENBQTdELEVBQWlFQyxFQUFqRSxFQUFzRTs7QUFFNUUsU0FBUUgsS0FBS0MsRUFBYixFQUFrQjs7QUFFakJKLFdBQU9ELENBQVAsQ0FBV0MsT0FBT0UsRUFBRUMsRUFBRixDQUFQOztBQUVYRSxNQUFFQyxFQUFGLElBQVFOLE1BQU1DLENBQU4sR0FBVSxDQUFsQjtBQUNBRCxXQUFPQyxDQUFQOztBQUVBLE1BQUVLLEVBQUYsQ0FBTyxFQUFFSCxFQUFGO0FBRVA7QUFFRCIsImZpbGUiOiJfZGl2X2xpbWJfd2l0aF9wcmVmaXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERpdmlkZXMgYSBiaWcgZW5kaWFuIG51bWJlciBieSBhIHNpbmdsZSBsaW1iIG51bWJlci5cbiAqIENhbiBvbmx5IHdvcmsgd2l0aCBsaW1icyBvZiBzaXplIGF0IG1vc3Qgc3FydCggMl41MyApLlxuICogQWxsb3dzIHRvIHByZWZpeCB0aGUgZGl2aWRlbmQgd2l0aCBhbiBpbnRlcm1lZGlhdGUgcmVtYWluZGVyLlxuICpcbiAqIERvZXMgbm90IHVwZGF0ZSB0aGUgcmVtYWluZGVyLlxuICpcbiAqIElucHV0XG4gKiAtLS0tLVxuICogIC0gfFF8ID0gfER8XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgVGhlIHJhZGl4LlxuICogQHBhcmFtIHtOdW1iZXJ9IHRtcCBJbnRlcm1lZGlhdGUgcmVtYWluZGVyIChNVVNUIGJlIDxjb2RlPjwgZDwvY29kZT4pLlxuICogQHBhcmFtIHtOdW1iZXJ9IGQgVGhlIGRpdmlzb3IuXG4gKiBAcGFyYW0ge0FycmF5fSBEIFRoZSBkaXZpZGVuZCAoTk9UIG1vZGlmaWVkKS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBEaSBMZWZ0IG9mIGRpdmlkZW5kLlxuICogQHBhcmFtIHtOdW1iZXJ9IERqIFJpZ2h0IG9mIGRpdmlkZW5kLlxuICogQHBhcmFtIHtBcnJheX0gUSBUaGUgcXVvdGllbnQuXG4gKiBAcGFyYW0ge051bWJlcn0gUWkgTGVmdCBvZiBxdW90aWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9kaXZfbGltYl93aXRoX3ByZWZpeCAoIHIgLCB0bXAgLCBkICwgRCAsIERpICwgRGogLCBRICwgUWkgKSB7XG5cblx0d2hpbGUgKCBEaSA8IERqICkge1xuXG5cdFx0dG1wICo9IHIgOyB0bXAgKz0gRFtEaV0gO1xuXG5cdFx0UVtRaV0gPSB0bXAgLyBkIHwgMCA7XG5cdFx0dG1wICU9IGQgO1xuXG5cdFx0KytRaSA7ICsrRGkgO1xuXG5cdH1cblxufVxuIl19