'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mul = mul;

var _arithmetic = require('../core/arithmetic');

var _thresholds = require('../core/thresholds');

/**
 * |A| >= |B| >= 1, |C| >= |A| + |B|.
 * TODO check whether this condition is actually needed
 *      if it is then fix @aureooms/js-integer
 *      otherwise document properly and fix conditions
 * TODO use schoolbook mul if n = O(log m)
 */

function mul(r, a, ai, aj, b, bi, bj, c, ci, cj) {

	var m = aj - ai;
	var n = bj - bi;

	// TODO then |B| = 1 and could be faster
	if (m === 1) return (0, _arithmetic._mul_limb)(r, a[0], b, bi, bj, c, ci, cj);

	if (n === 1) return (0, _arithmetic._mul_limb)(r, b[0], a, ai, aj, c, ci, cj);

	//if ( m === n ) {

	//if ( a === b && ai === bi ) return _sqr( r , a , ai , aj , c , ci , cj ) ;

	//return _mul_n( r , a , ai , aj , b , bi , bj , c , ci , cj ) ;

	//}

	if (n < _thresholds.THRESHOLD_MUL_TOOM22) {
		return (0, _arithmetic._schoolbook_mul)(r, a, ai, aj, b, bi, bj, c, ci, cj);
	}

	return (0, _arithmetic._karatsuba)(r, a, ai, aj, b, bi, bj, c, ci, cj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvbXVsLmpzIl0sIm5hbWVzIjpbIm11bCIsInIiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwiYyIsImNpIiwiY2oiLCJtIiwibiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXZ0JBLEcsR0FBQUEsRzs7QUFYaEI7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUU8sU0FBU0EsR0FBVCxDQUFlQyxDQUFmLEVBQW1CQyxDQUFuQixFQUF1QkMsRUFBdkIsRUFBNEJDLEVBQTVCLEVBQWlDQyxDQUFqQyxFQUFxQ0MsRUFBckMsRUFBMENDLEVBQTFDLEVBQStDQyxDQUEvQyxFQUFtREMsRUFBbkQsRUFBd0RDLEVBQXhELEVBQTZEOztBQUVuRSxLQUFNQyxJQUFJUCxLQUFLRCxFQUFmO0FBQ0EsS0FBTVMsSUFBSUwsS0FBS0QsRUFBZjs7QUFFQTtBQUNBLEtBQUtLLE1BQU0sQ0FBWCxFQUFlLE9BQU8sMkJBQVdWLENBQVgsRUFBZUMsRUFBRSxDQUFGLENBQWYsRUFBc0JHLENBQXRCLEVBQTBCQyxFQUExQixFQUErQkMsRUFBL0IsRUFBb0NDLENBQXBDLEVBQXdDQyxFQUF4QyxFQUE2Q0MsRUFBN0MsQ0FBUDs7QUFFZixLQUFLRSxNQUFNLENBQVgsRUFBZSxPQUFPLDJCQUFXWCxDQUFYLEVBQWVJLEVBQUUsQ0FBRixDQUFmLEVBQXNCSCxDQUF0QixFQUEwQkMsRUFBMUIsRUFBK0JDLEVBQS9CLEVBQW9DSSxDQUFwQyxFQUF3Q0MsRUFBeEMsRUFBNkNDLEVBQTdDLENBQVA7O0FBRWY7O0FBRUM7O0FBRUE7O0FBRUQ7O0FBRUEsS0FBS0Usb0NBQUwsRUFBZ0M7QUFDL0IsU0FBTyxpQ0FBaUJYLENBQWpCLEVBQXFCQyxDQUFyQixFQUF5QkMsRUFBekIsRUFBOEJDLEVBQTlCLEVBQW1DQyxDQUFuQyxFQUF1Q0MsRUFBdkMsRUFBNENDLEVBQTVDLEVBQWlEQyxDQUFqRCxFQUFxREMsRUFBckQsRUFBMERDLEVBQTFELENBQVA7QUFDQTs7QUFFRCxRQUFPLDRCQUFZVCxDQUFaLEVBQWdCQyxDQUFoQixFQUFvQkMsRUFBcEIsRUFBeUJDLEVBQXpCLEVBQThCQyxDQUE5QixFQUFrQ0MsRUFBbEMsRUFBdUNDLEVBQXZDLEVBQTRDQyxDQUE1QyxFQUFnREMsRUFBaEQsRUFBcURDLEVBQXJELENBQVA7QUFHQSIsImZpbGUiOiJtdWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfbXVsX2xpbWIgLCBfc2Nob29sYm9va19tdWwgLCBfa2FyYXRzdWJhIH0gZnJvbSAnLi4vY29yZS9hcml0aG1ldGljJyA7XG5pbXBvcnQgeyBUSFJFU0hPTERfTVVMX1RPT00yMiB9IGZyb20gJy4uL2NvcmUvdGhyZXNob2xkcycgO1xuXG4vKipcbiAqIHxBfCA+PSB8QnwgPj0gMSwgfEN8ID49IHxBfCArIHxCfC5cbiAqIFRPRE8gY2hlY2sgd2hldGhlciB0aGlzIGNvbmRpdGlvbiBpcyBhY3R1YWxseSBuZWVkZWRcbiAqICAgICAgaWYgaXQgaXMgdGhlbiBmaXggQGF1cmVvb21zL2pzLWludGVnZXJcbiAqICAgICAgb3RoZXJ3aXNlIGRvY3VtZW50IHByb3Blcmx5IGFuZCBmaXggY29uZGl0aW9uc1xuICogVE9ETyB1c2Ugc2Nob29sYm9vayBtdWwgaWYgbiA9IE8obG9nIG0pXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bCAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICwgY2ogKSB7XG5cblx0Y29uc3QgbSA9IGFqIC0gYWkgO1xuXHRjb25zdCBuID0gYmogLSBiaSA7XG5cblx0Ly8gVE9ETyB0aGVuIHxCfCA9IDEgYW5kIGNvdWxkIGJlIGZhc3RlclxuXHRpZiAoIG0gPT09IDEgKSByZXR1cm4gX211bF9saW1iKCByICwgYVswXSAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICwgY2ogKSA7XG5cblx0aWYgKCBuID09PSAxICkgcmV0dXJuIF9tdWxfbGltYiggciAsIGJbMF0gLCBhICwgYWkgLCBhaiAsIGMgLCBjaSAsIGNqICkgO1xuXG5cdC8vaWYgKCBtID09PSBuICkge1xuXG5cdFx0Ly9pZiAoIGEgPT09IGIgJiYgYWkgPT09IGJpICkgcmV0dXJuIF9zcXIoIHIgLCBhICwgYWkgLCBhaiAsIGMgLCBjaSAsIGNqICkgO1xuXG5cdFx0Ly9yZXR1cm4gX211bF9uKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSAsIGNqICkgO1xuXG5cdC8vfVxuXG5cdGlmICggbiA8IFRIUkVTSE9MRF9NVUxfVE9PTTIyICkge1xuXHRcdHJldHVybiBfc2Nob29sYm9va19tdWwoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICwgY2ogKSA7XG5cdH1cblxuXHRyZXR1cm4gX2thcmF0c3ViYSggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBjICwgY2kgLCBjaiApIDtcblxuXG59XG4iXX0=