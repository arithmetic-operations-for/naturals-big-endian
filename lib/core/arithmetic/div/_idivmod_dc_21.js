'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._idivmod_dc_21 = _idivmod_dc_21;

var _thresholds = require('../../thresholds');

var _array = require('../../array');

var _sub = require('../sub');

var _compare = require('../../compare');

var _add = require('../add');

var _mul2 = require('../mul');

var _ = require('.');

/**
 * Algorithm 3.3 Divide-and-conquer division (2 by 1)
 * ==================================================
 *
 * Input
 * -----
 *  Two nonnegative integers A and B,
 *  such that A < β^n B and β^n / 2 ≤ B < β^n.
 *  n must be even.
 *
 *                    -----------                 -----
 *                   |  :  |  :  |               |  :  |
 *                    -----------                 -----
 *
 * Output
 * ------
 *  The quotient floor( A/B ) and the remainder A mod B.
 *
 * Complexity
 * ----------
 *  T(n) = 2T'(n/2) + K
 *
 */
function _idivmod_dc_21(r, a, ai, aj, b, bi, bj, c, ci, cj) {

  if (bj - bi < _thresholds.THRESHOLD_DIV_DC) {
    return (0, _._idivmod_schoolbook_large_divisor)(r, a, ai, aj, b, bi, bj, c, ci);
  }

  // 1. Let A = A_3 β^{3n/2} + A_2 β^n + A_1 β^{n/2} + A_0 and
  //    B = B_1 β^{n/2} + B_0,
  //    with 0 ≤ A_i < β^{n/2} and 0 ≤ B_i < β^{n/2}.

  var m = aj - ai;
  var k = m >>> 2;

  // 2. Compute the high half Q_1 of the quotient as
  //    Q_1 = ( A_3 β^n + A_2 β^{n/2} + A_1 ) / B
  //    with remainder R_1 using algorithm 3.4.

  (0, _._idivmod_dc_32)(r, a, ai, aj - k, b, bi, bj, c, ci, cj - k);

  // 3. Compute the low half Q_0 of the quotient as
  //    Q_0 = ( R_1 β^{n/2} + A_0 ) / B
  //    with remainder R_0 using algorithm 3.4.

  (0, _._idivmod_dc_32)(r, a, ai + k, aj, b, bi, bj, c, ci + k, cj);

  // 4. Return the quotient Q = Q_1 β^{n/2} + Q_0 and the remainder R = R_0 .
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19pZGl2bW9kX2RjXzIxLmpzIl0sIm5hbWVzIjpbIl9pZGl2bW9kX2RjXzIxIiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJjIiwiY2kiLCJjaiIsIm0iLCJrIl0sIm1hcHBpbmdzIjoiOzs7OztRQWdDZ0JBLGMsR0FBQUEsYzs7QUFoQ2hCOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCTyxTQUFTQSxjQUFULENBQTBCQyxDQUExQixFQUE4QkMsQ0FBOUIsRUFBa0NDLEVBQWxDLEVBQXVDQyxFQUF2QyxFQUE0Q0MsQ0FBNUMsRUFBZ0RDLEVBQWhELEVBQXFEQyxFQUFyRCxFQUEwREMsQ0FBMUQsRUFBOERDLEVBQTlELEVBQW1FQyxFQUFuRSxFQUF3RTs7QUFFOUUsTUFBS0gsS0FBS0QsRUFBTCwrQkFBTCxFQUFrQztBQUNqQyxXQUFPLHlDQUFtQ0wsQ0FBbkMsRUFBdUNDLENBQXZDLEVBQTJDQyxFQUEzQyxFQUFnREMsRUFBaEQsRUFBcURDLENBQXJELEVBQXlEQyxFQUF6RCxFQUE4REMsRUFBOUQsRUFBbUVDLENBQW5FLEVBQXVFQyxFQUF2RSxDQUFQO0FBQ0E7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLE1BQU1FLElBQUlQLEtBQUtELEVBQWY7QUFDQSxNQUFNUyxJQUFJRCxNQUFNLENBQWhCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBZ0JWLENBQWhCLEVBQW9CQyxDQUFwQixFQUF3QkMsRUFBeEIsRUFBNkJDLEtBQUtRLENBQWxDLEVBQXNDUCxDQUF0QyxFQUEwQ0MsRUFBMUMsRUFBK0NDLEVBQS9DLEVBQW9EQyxDQUFwRCxFQUF3REMsRUFBeEQsRUFBNkRDLEtBQUtFLENBQWxFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBZ0JYLENBQWhCLEVBQW9CQyxDQUFwQixFQUF3QkMsS0FBS1MsQ0FBN0IsRUFBaUNSLEVBQWpDLEVBQXNDQyxDQUF0QyxFQUEwQ0MsRUFBMUMsRUFBK0NDLEVBQS9DLEVBQW9EQyxDQUFwRCxFQUF3REMsS0FBS0csQ0FBN0QsRUFBaUVGLEVBQWpFOztBQUVBO0FBRUEiLCJmaWxlIjoiX2lkaXZtb2RfZGNfMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUSFJFU0hPTERfRElWX0RDIH0gZnJvbSAnLi4vLi4vdGhyZXNob2xkcycgO1xuaW1wb3J0IHsgX3plcm9zICwgX2ZpbGwgfSBmcm9tICcuLi8uLi9hcnJheScgO1xuaW1wb3J0IHsgX2RlY3JlbWVudCAsIF9pc3ViIH0gZnJvbSAnLi4vc3ViJyA7XG5pbXBvcnQgeyBfbHQgfSBmcm9tICcuLi8uLi9jb21wYXJlJyA7XG5pbXBvcnQgeyBfaWFkZCB9IGZyb20gJy4uL2FkZCcgO1xuaW1wb3J0IHsgX211bCB9IGZyb20gJy4uL211bCcgO1xuaW1wb3J0IHsgX2lkaXZtb2RfZGNfMzIgLCBfaWRpdm1vZF9zY2hvb2xib29rX2xhcmdlX2Rpdmlzb3IgfSBmcm9tICcuJyA7XG5cblxuLyoqXG4gKiBBbGdvcml0aG0gMy4zIERpdmlkZS1hbmQtY29ucXVlciBkaXZpc2lvbiAoMiBieSAxKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBJbnB1dFxuICogLS0tLS1cbiAqICBUd28gbm9ubmVnYXRpdmUgaW50ZWdlcnMgQSBhbmQgQixcbiAqICBzdWNoIHRoYXQgQSA8IM6yXm4gQiBhbmQgzrJebiAvIDIg4omkIEIgPCDOsl5uLlxuICogIG4gbXVzdCBiZSBldmVuLlxuICpcbiAqICAgICAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLSAgICAgICAgICAgICAgICAgLS0tLS1cbiAqICAgICAgICAgICAgICAgICAgIHwgIDogIHwgIDogIHwgICAgICAgICAgICAgICB8ICA6ICB8XG4gKiAgICAgICAgICAgICAgICAgICAgLS0tLS0tLS0tLS0gICAgICAgICAgICAgICAgIC0tLS0tXG4gKlxuICogT3V0cHV0XG4gKiAtLS0tLS1cbiAqICBUaGUgcXVvdGllbnQgZmxvb3IoIEEvQiApIGFuZCB0aGUgcmVtYWluZGVyIEEgbW9kIEIuXG4gKlxuICogQ29tcGxleGl0eVxuICogLS0tLS0tLS0tLVxuICogIFQobikgPSAyVCcobi8yKSArIEtcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWRpdm1vZF9kY18yMSAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICwgY2ogKSB7XG5cblx0aWYgKCBiaiAtIGJpIDwgVEhSRVNIT0xEX0RJVl9EQyApIHtcblx0XHRyZXR1cm4gX2lkaXZtb2Rfc2Nob29sYm9va19sYXJnZV9kaXZpc29yKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSApIDtcblx0fVxuXG5cdC8vIDEuIExldCBBID0gQV8zIM6yXnszbi8yfSArIEFfMiDOsl5uICsgQV8xIM6yXntuLzJ9ICsgQV8wIGFuZFxuXHQvLyAgICBCID0gQl8xIM6yXntuLzJ9ICsgQl8wLFxuXHQvLyAgICB3aXRoIDAg4omkIEFfaSA8IM6yXntuLzJ9IGFuZCAwIOKJpCBCX2kgPCDOsl57bi8yfS5cblxuXHRjb25zdCBtID0gYWogLSBhaSA7XG5cdGNvbnN0IGsgPSBtID4+PiAyIDtcblxuXHQvLyAyLiBDb21wdXRlIHRoZSBoaWdoIGhhbGYgUV8xIG9mIHRoZSBxdW90aWVudCBhc1xuXHQvLyAgICBRXzEgPSAoIEFfMyDOsl5uICsgQV8yIM6yXntuLzJ9ICsgQV8xICkgLyBCXG5cdC8vICAgIHdpdGggcmVtYWluZGVyIFJfMSB1c2luZyBhbGdvcml0aG0gMy40LlxuXG5cdF9pZGl2bW9kX2RjXzMyKCByICwgYSAsIGFpICwgYWogLSBrICwgYiAsIGJpICwgYmogLCBjICwgY2kgLCBjaiAtIGsgKSA7XG5cblx0Ly8gMy4gQ29tcHV0ZSB0aGUgbG93IGhhbGYgUV8wIG9mIHRoZSBxdW90aWVudCBhc1xuXHQvLyAgICBRXzAgPSAoIFJfMSDOsl57bi8yfSArIEFfMCApIC8gQlxuXHQvLyAgICB3aXRoIHJlbWFpbmRlciBSXzAgdXNpbmcgYWxnb3JpdGhtIDMuNC5cblxuXHRfaWRpdm1vZF9kY18zMiggciAsIGEgLCBhaSArIGsgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICsgayAsIGNqICkgO1xuXG5cdC8vIDQuIFJldHVybiB0aGUgcXVvdGllbnQgUSA9IFFfMSDOsl57bi8yfSArIFFfMCBhbmQgdGhlIHJlbWFpbmRlciBSID0gUl8wIC5cblxufVxuIl19