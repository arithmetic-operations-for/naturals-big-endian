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
  var _ = zeros(0, _j);

  while (true) {

    if (bi === bj) return [a, ai, aj];

    (0, _api._idivmod)(r, a, ai, aj, b, bi, bj, _, _j - (aj - ai), _j);

    ai = (0, _convert._trim_positive)(a, aj - (bj - bi), aj);

    if (ai === aj) return [b, bi, bj];

    (0, _api._idivmod)(r, b, bi, bj, a, ai, aj, _, _j - (bj - bi), _j);

    bi = (0, _convert._trim_positive)(b, bj - (aj - ai), bj);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZ2NkL19ldWNsaWRlYW5fYWxnb3JpdGhtLmpzIl0sIm5hbWVzIjpbIl9ldWNsaWRlYW5fYWxnb3JpdGhtIiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJfaiIsIl8iLCJ6ZXJvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUF5QmdCQSxvQixHQUFBQSxvQjs7QUF6QmhCOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQk8sU0FBU0Esb0JBQVQsQ0FBZ0NDLENBQWhDLEVBQW9DQyxDQUFwQyxFQUF3Q0MsRUFBeEMsRUFBNkNDLEVBQTdDLEVBQWtEQyxDQUFsRCxFQUFzREMsRUFBdEQsRUFBMkRDLEVBQTNELEVBQWdFOztBQUV0RTs7QUFFQSxNQUFNQyxLQUFLSixLQUFLRCxFQUFoQjtBQUNBLE1BQU1NLElBQUlDLE1BQU8sQ0FBUCxFQUFXRixFQUFYLENBQVY7O0FBRUEsU0FBUSxJQUFSLEVBQWU7O0FBRWQsUUFBS0YsT0FBT0MsRUFBWixFQUFpQixPQUFPLENBQUVMLENBQUYsRUFBTUMsRUFBTixFQUFXQyxFQUFYLENBQVA7O0FBRWpCLHVCQUFVSCxDQUFWLEVBQWNDLENBQWQsRUFBa0JDLEVBQWxCLEVBQXVCQyxFQUF2QixFQUE0QkMsQ0FBNUIsRUFBZ0NDLEVBQWhDLEVBQXFDQyxFQUFyQyxFQUEwQ0UsQ0FBMUMsRUFBOENELE1BQU1KLEtBQUtELEVBQVgsQ0FBOUMsRUFBK0RLLEVBQS9EOztBQUVBTCxTQUFLLDZCQUFnQkQsQ0FBaEIsRUFBb0JFLE1BQU1HLEtBQUtELEVBQVgsQ0FBcEIsRUFBcUNGLEVBQXJDLENBQUw7O0FBRUEsUUFBS0QsT0FBT0MsRUFBWixFQUFpQixPQUFPLENBQUVDLENBQUYsRUFBTUMsRUFBTixFQUFXQyxFQUFYLENBQVA7O0FBRWpCLHVCQUFVTixDQUFWLEVBQWNJLENBQWQsRUFBa0JDLEVBQWxCLEVBQXVCQyxFQUF2QixFQUE0QkwsQ0FBNUIsRUFBZ0NDLEVBQWhDLEVBQXFDQyxFQUFyQyxFQUEwQ0ssQ0FBMUMsRUFBOENELE1BQU1ELEtBQUtELEVBQVgsQ0FBOUMsRUFBK0RFLEVBQS9EOztBQUVBRixTQUFLLDZCQUFnQkQsQ0FBaEIsRUFBb0JFLE1BQU1ILEtBQUtELEVBQVgsQ0FBcEIsRUFBcUNJLEVBQXJDLENBQUw7QUFFQTtBQUVEIiwiZmlsZSI6Il9ldWNsaWRlYW5fYWxnb3JpdGhtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2lkaXZtb2QgfSBmcm9tICcuLi8uLi8uLi9hcGknXG5pbXBvcnQgeyBfemVyb3MgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FycmF5J1xuaW1wb3J0IHsgX3RyaW1fcG9zaXRpdmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbnZlcnQnXG5cbi8qKlxuICogRXVjbGlkZWFuIGFsZ29yaXRobS4gQ29tcHV0ZXMgdGhlIGdjZCBvZiB0aGUgdHdvIGlucHV0IG51bWJlcnMgQSBhbmQgQixcbiAqIEEgPj0gQi4gSW5wdXQgYXJyYXlzIGFyZSBtb2RpZmllZCBfX19pbi1wbGFjZV9fXy5cbiAqXG4gKiBJbnB1dFxuICogLS0tLS1cbiAqXG4gKiAgIC0gQSA+PSBCXG4gKiAgIC0gTm8gbGVhZGluZyB6ZXJvc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSByIFRoZSByYWRpeC5cbiAqIEBwYXJhbSB7QXJyYXl9IGEgVGhlIGZpcnN0IGlucHV0IG51bWJlciBBLlxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIExlZnQgb2YgQS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBSaWdodCBvZiBBLlxuICogQHBhcmFtIHtBcnJheX0gYiBUaGUgc2Vjb25kIGlucHV0IG51bWJlciBCLlxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIExlZnQgb2YgQi5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBSaWdodCBvZiBCLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgYXJyYXkgY29udGFpbmluZyB0aGUgZ2NkIG9mIEEgYW5kIEIgKG9uZSBvZiBBIGFuZCBCKS5cbiAqIFJldHVybiBhcyBbIGQgLCBkaSAsIGRqIF0sIHdoZXJlIGQgaXMgdGhlIGFycmF5IGFuZCBkaSBhbmQgZGogYXJlIGl0cyBsZWZ0XG4gKiBhbmQgcmlnaHQgYm91bmRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gX2V1Y2xpZGVhbl9hbGdvcml0aG0gKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIHtcblxuXHQvLyBUT0RPIHVzZSBfaW1vZCB3aGVuIGltcGxlbWVudGVkXG5cblx0Y29uc3QgX2ogPSBhaiAtIGFpIDtcblx0Y29uc3QgXyA9IHplcm9zKCAwICwgX2ogKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0aWYgKCBiaSA9PT0gYmogKSByZXR1cm4gWyBhICwgYWkgLCBhaiBdIDtcblxuXHRcdF9pZGl2bW9kKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIF8gLCBfaiAtIChhaiAtIGFpKSAsIF9qICkgO1xuXG5cdFx0YWkgPSBfdHJpbV9wb3NpdGl2ZSggYSAsIGFqIC0gKGJqIC0gYmkpICwgYWogKSA7XG5cblx0XHRpZiAoIGFpID09PSBhaiApIHJldHVybiBbIGIgLCBiaSAsIGJqIF0gO1xuXG5cdFx0X2lkaXZtb2QoIHIgLCBiICwgYmkgLCBiaiAsIGEgLCBhaSAsIGFqICwgXyAsIF9qIC0gKGJqIC0gYmkpICwgX2ogKSA7XG5cblx0XHRiaSA9IF90cmltX3Bvc2l0aXZlKCBiICwgYmogLSAoYWogLSBhaSkgLCBiaiApIDtcblxuXHR9XG5cbn1cbiJdfQ==