"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._idivmod_limb_with_prefix = _idivmod_limb_with_prefix;
/**
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 * Allows to prefix the dividend with an intermediate remainder.
 *
 * Input
 * -----
 *  - |Q| = |D|
 *
 * @param {Number} r The radix.
 * @param {Number} tmp Intermediate remainder (MUST be <code>< d</code>).
 * @param {Number} d The divisor.
 * @param {Array} D The dividend.
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} Q The quotient.
 * @param {Number} Qi Left of quotient.
 */
function _idivmod_limb_with_prefix(r, tmp, d, D, Di, Dj, Q, Qi) {

  while (Di < Dj) {

    tmp *= r;tmp += D[Di];

    Q[Qi] = tmp / d | 0;
    tmp %= d;
    D[Di] = 0;

    ++Qi;++Di;
  }

  D[Dj - 1] = tmp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19pZGl2bW9kX2xpbWJfd2l0aF9wcmVmaXguanMiXSwibmFtZXMiOlsiX2lkaXZtb2RfbGltYl93aXRoX3ByZWZpeCIsInIiLCJ0bXAiLCJkIiwiRCIsIkRpIiwiRGoiLCJRIiwiUWkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBa0JnQkEseUIsR0FBQUEseUI7QUFsQmhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQk8sU0FBU0EseUJBQVQsQ0FBcUNDLENBQXJDLEVBQXlDQyxHQUF6QyxFQUErQ0MsQ0FBL0MsRUFBbURDLENBQW5ELEVBQXVEQyxFQUF2RCxFQUE0REMsRUFBNUQsRUFBaUVDLENBQWpFLEVBQXFFQyxFQUFyRSxFQUEwRTs7QUFFaEYsU0FBUUgsS0FBS0MsRUFBYixFQUFrQjs7QUFFakJKLFdBQU9ELENBQVAsQ0FBV0MsT0FBT0UsRUFBRUMsRUFBRixDQUFQOztBQUVYRSxNQUFFQyxFQUFGLElBQVFOLE1BQU1DLENBQU4sR0FBVSxDQUFsQjtBQUNBRCxXQUFPQyxDQUFQO0FBQ0FDLE1BQUVDLEVBQUYsSUFBUSxDQUFSOztBQUVBLE1BQUVHLEVBQUYsQ0FBTyxFQUFFSCxFQUFGO0FBRVA7O0FBRURELElBQUVFLEtBQUcsQ0FBTCxJQUFVSixHQUFWO0FBRUEiLCJmaWxlIjoiX2lkaXZtb2RfbGltYl93aXRoX3ByZWZpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGl2aWRlcyBhIGJpZyBlbmRpYW4gbnVtYmVyIGJ5IGEgc2luZ2xlIGxpbWIgbnVtYmVyLlxuICogQ2FuIG9ubHkgd29yayB3aXRoIGxpbWJzIG9mIHNpemUgYXQgbW9zdCBzcXJ0KCAyXjUzICkuXG4gKiBBbGxvd3MgdG8gcHJlZml4IHRoZSBkaXZpZGVuZCB3aXRoIGFuIGludGVybWVkaWF0ZSByZW1haW5kZXIuXG4gKlxuICogSW5wdXRcbiAqIC0tLS0tXG4gKiAgLSB8UXwgPSB8RHxcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gciBUaGUgcmFkaXguXG4gKiBAcGFyYW0ge051bWJlcn0gdG1wIEludGVybWVkaWF0ZSByZW1haW5kZXIgKE1VU1QgYmUgPGNvZGU+PCBkPC9jb2RlPikuXG4gKiBAcGFyYW0ge051bWJlcn0gZCBUaGUgZGl2aXNvci5cbiAqIEBwYXJhbSB7QXJyYXl9IEQgVGhlIGRpdmlkZW5kLlxuICogQHBhcmFtIHtOdW1iZXJ9IERpIExlZnQgb2YgZGl2aWRlbmQuXG4gKiBAcGFyYW0ge051bWJlcn0gRGogUmlnaHQgb2YgZGl2aWRlbmQuXG4gKiBAcGFyYW0ge0FycmF5fSBRIFRoZSBxdW90aWVudC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBRaSBMZWZ0IG9mIHF1b3RpZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gX2lkaXZtb2RfbGltYl93aXRoX3ByZWZpeCAoIHIgLCB0bXAgLCBkICwgRCAsIERpICwgRGogLCBRICwgUWkgKSB7XG5cblx0d2hpbGUgKCBEaSA8IERqICkge1xuXG5cdFx0dG1wICo9IHIgOyB0bXAgKz0gRFtEaV0gO1xuXG5cdFx0UVtRaV0gPSB0bXAgLyBkIHwgMCA7XG5cdFx0dG1wICU9IGQgO1xuXHRcdERbRGldID0gMCA7XG5cblx0XHQrK1FpIDsgKytEaSA7XG5cblx0fVxuXG5cdERbRGotMV0gPSB0bXAgO1xuXG59XG4iXX0=