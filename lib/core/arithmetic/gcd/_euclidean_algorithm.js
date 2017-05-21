'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._euclidean_algorithm = _euclidean_algorithm;

var _api = require('../../../api');

var _array = require('../../../core/array');

var _convert = require('../../../core/convert');

/**
 * Euclidean algorithm. Computes the gcd of the two input numbers A and B,
 * A >= B. Input arrays are modified ___in-place___.
 *
 * Input
 * -----
 *
 *   - A >= B
 *   - No leading zeros
 *
 * @param {Number} r The radix.
 * @param {Array} a The first input number A.
 * @param {Number} ai Left of A.
 * @param {Number} aj Right of A.
 * @param {Array} b The second input number B.
 * @param {Number} bi Left of B.
 * @param {Number} bj Right of B.
 * @returns {Array} The array containing the gcd of A and B (one of A and B).
 * Return as [ d , di , dj ], where d is the array and di and dj are its left
 * and right bounds.
 */
function _euclidean_algorithm(r, a, ai, aj, b, bi, bj) {

  // TODO use _imod when implemented

  var _j = aj - ai;
  var _ = (0, _array._zeros)(0, _j);

  while (true) {

    if (bi === bj) return [a, ai, aj];

    (0, _api._idivmod)(r, a, ai, aj, b, bi, bj, _, _j - (aj - ai), _j);

    ai = (0, _convert._trim_positive)(a, aj - (bj - bi), aj);

    if (ai === aj) return [b, bi, bj];

    (0, _api._idivmod)(r, b, bi, bj, a, ai, aj, _, _j - (bj - bi), _j);

    bi = (0, _convert._trim_positive)(b, bj - (aj - ai), bj);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZ2NkL19ldWNsaWRlYW5fYWxnb3JpdGhtLmpzIl0sIm5hbWVzIjpbIl9ldWNsaWRlYW5fYWxnb3JpdGhtIiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJfaiIsIl8iXSwibWFwcGluZ3MiOiI7Ozs7O1FBeUJnQkEsb0IsR0FBQUEsb0I7O0FBekJoQjs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJPLFNBQVNBLG9CQUFULENBQWdDQyxDQUFoQyxFQUFvQ0MsQ0FBcEMsRUFBd0NDLEVBQXhDLEVBQTZDQyxFQUE3QyxFQUFrREMsQ0FBbEQsRUFBc0RDLEVBQXRELEVBQTJEQyxFQUEzRCxFQUFnRTs7QUFFdEU7O0FBRUEsTUFBTUMsS0FBS0osS0FBS0QsRUFBaEI7QUFDQSxNQUFNTSxJQUFJLG1CQUFRLENBQVIsRUFBWUQsRUFBWixDQUFWOztBQUVBLFNBQVEsSUFBUixFQUFlOztBQUVkLFFBQUtGLE9BQU9DLEVBQVosRUFBaUIsT0FBTyxDQUFFTCxDQUFGLEVBQU1DLEVBQU4sRUFBV0MsRUFBWCxDQUFQOztBQUVqQix1QkFBVUgsQ0FBVixFQUFjQyxDQUFkLEVBQWtCQyxFQUFsQixFQUF1QkMsRUFBdkIsRUFBNEJDLENBQTVCLEVBQWdDQyxFQUFoQyxFQUFxQ0MsRUFBckMsRUFBMENFLENBQTFDLEVBQThDRCxNQUFNSixLQUFLRCxFQUFYLENBQTlDLEVBQStESyxFQUEvRDs7QUFFQUwsU0FBSyw2QkFBZ0JELENBQWhCLEVBQW9CRSxNQUFNRyxLQUFLRCxFQUFYLENBQXBCLEVBQXFDRixFQUFyQyxDQUFMOztBQUVBLFFBQUtELE9BQU9DLEVBQVosRUFBaUIsT0FBTyxDQUFFQyxDQUFGLEVBQU1DLEVBQU4sRUFBV0MsRUFBWCxDQUFQOztBQUVqQix1QkFBVU4sQ0FBVixFQUFjSSxDQUFkLEVBQWtCQyxFQUFsQixFQUF1QkMsRUFBdkIsRUFBNEJMLENBQTVCLEVBQWdDQyxFQUFoQyxFQUFxQ0MsRUFBckMsRUFBMENLLENBQTFDLEVBQThDRCxNQUFNRCxLQUFLRCxFQUFYLENBQTlDLEVBQStERSxFQUEvRDs7QUFFQUYsU0FBSyw2QkFBZ0JELENBQWhCLEVBQW9CRSxNQUFNSCxLQUFLRCxFQUFYLENBQXBCLEVBQXFDSSxFQUFyQyxDQUFMO0FBRUE7QUFFRCIsImZpbGUiOiJfZXVjbGlkZWFuX2FsZ29yaXRobS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9pZGl2bW9kIH0gZnJvbSAnLi4vLi4vLi4vYXBpJ1xuaW1wb3J0IHsgX3plcm9zIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcnJheSdcbmltcG9ydCB7IF90cmltX3Bvc2l0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb252ZXJ0J1xuXG4vKipcbiAqIEV1Y2xpZGVhbiBhbGdvcml0aG0uIENvbXB1dGVzIHRoZSBnY2Qgb2YgdGhlIHR3byBpbnB1dCBudW1iZXJzIEEgYW5kIEIsXG4gKiBBID49IEIuIElucHV0IGFycmF5cyBhcmUgbW9kaWZpZWQgX19faW4tcGxhY2VfX18uXG4gKlxuICogSW5wdXRcbiAqIC0tLS0tXG4gKlxuICogICAtIEEgPj0gQlxuICogICAtIE5vIGxlYWRpbmcgemVyb3NcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gciBUaGUgcmFkaXguXG4gKiBAcGFyYW0ge0FycmF5fSBhIFRoZSBmaXJzdCBpbnB1dCBudW1iZXIgQS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBMZWZ0IG9mIEEuXG4gKiBAcGFyYW0ge051bWJlcn0gYWogUmlnaHQgb2YgQS5cbiAqIEBwYXJhbSB7QXJyYXl9IGIgVGhlIHNlY29uZCBpbnB1dCBudW1iZXIgQi5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBMZWZ0IG9mIEIuXG4gKiBAcGFyYW0ge051bWJlcn0gYmogUmlnaHQgb2YgQi5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGFycmF5IGNvbnRhaW5pbmcgdGhlIGdjZCBvZiBBIGFuZCBCIChvbmUgb2YgQSBhbmQgQikuXG4gKiBSZXR1cm4gYXMgWyBkICwgZGkgLCBkaiBdLCB3aGVyZSBkIGlzIHRoZSBhcnJheSBhbmQgZGkgYW5kIGRqIGFyZSBpdHMgbGVmdFxuICogYW5kIHJpZ2h0IGJvdW5kcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9ldWNsaWRlYW5fYWxnb3JpdGhtICggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSB7XG5cblx0Ly8gVE9ETyB1c2UgX2ltb2Qgd2hlbiBpbXBsZW1lbnRlZFxuXG5cdGNvbnN0IF9qID0gYWogLSBhaSA7XG5cdGNvbnN0IF8gPSBfemVyb3MoIDAgLCBfaiApIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRpZiAoIGJpID09PSBiaiApIHJldHVybiBbIGEgLCBhaSAsIGFqIF0gO1xuXG5cdFx0X2lkaXZtb2QoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgXyAsIF9qIC0gKGFqIC0gYWkpICwgX2ogKSA7XG5cblx0XHRhaSA9IF90cmltX3Bvc2l0aXZlKCBhICwgYWogLSAoYmogLSBiaSkgLCBhaiApIDtcblxuXHRcdGlmICggYWkgPT09IGFqICkgcmV0dXJuIFsgYiAsIGJpICwgYmogXSA7XG5cblx0XHRfaWRpdm1vZCggciAsIGIgLCBiaSAsIGJqICwgYSAsIGFpICwgYWogLCBfICwgX2ogLSAoYmogLSBiaSkgLCBfaiApIDtcblxuXHRcdGJpID0gX3RyaW1fcG9zaXRpdmUoIGIgLCBiaiAtIChhaiAtIGFpKSAsIGJqICkgO1xuXG5cdH1cblxufVxuIl19