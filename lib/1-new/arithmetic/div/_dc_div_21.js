'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._dc_div_21 = _dc_div_21;

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
function _dc_div_21(r, a, ai, aj, b, bi, bj, c, ci, cj) {

  if (bj - bi < _thresholds.THRESHOLD_DIV_DC) {
    return (0, _._schoolbook_div)(r, a, ai, aj, b, bi, bj, c, ci);
  }

  // 1. Let A = A_3 β^{3n/2} + A_2 β^n + A_1 β^{n/2} + A_0 and
  //    B = B_1 β^{n/2} + B_0,
  //    with 0 ≤ A_i < β^{n/2} and 0 ≤ B_i < β^{n/2}.

  var m = aj - ai;
  var k = m >>> 2;

  // 2. Compute the high half Q_1 of the quotient as
  //    Q_1 = ( A_3 β^n + A_2 β^{n/2} + A_1 ) / B
  //    with remainder R_1 using algorithm 3.4.

  (0, _._dc_div_32)(r, a, ai, aj - k, b, bi, bj, c, ci, cj - k);

  // 3. Compute the low half Q_0 of the quotient as
  //    Q_0 = ( R_1 β^{n/2} + A_0 ) / B
  //    with remainder R_0 using algorithm 3.4.

  (0, _._dc_div_32)(r, a, ai + k, aj, b, bi, bj, c, ci + k, cj);

  // 4. Return the quotient Q = Q_1 β^{n/2} + Q_0 and the remainder R = R_0 .
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fZGNfZGl2XzIxLmpzIl0sIm5hbWVzIjpbIl9kY19kaXZfMjEiLCJyIiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImMiLCJjaSIsImNqIiwibSIsImsiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0NnQkEsVSxHQUFBQSxVOztBQWhDaEI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJPLFNBQVNBLFVBQVQsQ0FBc0JDLENBQXRCLEVBQTBCQyxDQUExQixFQUE4QkMsRUFBOUIsRUFBbUNDLEVBQW5DLEVBQXdDQyxDQUF4QyxFQUE0Q0MsRUFBNUMsRUFBaURDLEVBQWpELEVBQXNEQyxDQUF0RCxFQUEwREMsRUFBMUQsRUFBK0RDLEVBQS9ELEVBQW9FOztBQUUxRSxNQUFLSCxLQUFLRCxFQUFMLCtCQUFMLEVBQWtDO0FBQ2pDLFdBQU8sdUJBQWlCTCxDQUFqQixFQUFxQkMsQ0FBckIsRUFBeUJDLEVBQXpCLEVBQThCQyxFQUE5QixFQUFtQ0MsQ0FBbkMsRUFBdUNDLEVBQXZDLEVBQTRDQyxFQUE1QyxFQUFpREMsQ0FBakQsRUFBcURDLEVBQXJELENBQVA7QUFDQTs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsSUFBSVAsS0FBS0QsRUFBZjtBQUNBLE1BQU1TLElBQUlELE1BQU0sQ0FBaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFZVixDQUFaLEVBQWdCQyxDQUFoQixFQUFvQkMsRUFBcEIsRUFBeUJDLEtBQUtRLENBQTlCLEVBQWtDUCxDQUFsQyxFQUFzQ0MsRUFBdEMsRUFBMkNDLEVBQTNDLEVBQWdEQyxDQUFoRCxFQUFvREMsRUFBcEQsRUFBeURDLEtBQUtFLENBQTlEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBWVgsQ0FBWixFQUFnQkMsQ0FBaEIsRUFBb0JDLEtBQUtTLENBQXpCLEVBQTZCUixFQUE3QixFQUFrQ0MsQ0FBbEMsRUFBc0NDLEVBQXRDLEVBQTJDQyxFQUEzQyxFQUFnREMsQ0FBaEQsRUFBb0RDLEtBQUtHLENBQXpELEVBQTZERixFQUE3RDs7QUFFQTtBQUVBIiwiZmlsZSI6Il9kY19kaXZfMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUSFJFU0hPTERfRElWX0RDIH0gZnJvbSAnLi4vLi4vdGhyZXNob2xkcycgO1xuaW1wb3J0IHsgX3plcm9zICwgX2ZpbGwgfSBmcm9tICcuLi8uLi9hcnJheScgO1xuaW1wb3J0IHsgX2RlY3JlbWVudCAsIF9pc3ViIH0gZnJvbSAnLi4vc3ViJyA7XG5pbXBvcnQgeyBfbHQgfSBmcm9tICcuLi8uLi9jb21wYXJlJyA7XG5pbXBvcnQgeyBfaWFkZCB9IGZyb20gJy4uL2FkZCcgO1xuaW1wb3J0IHsgX211bCB9IGZyb20gJy4uL211bCcgO1xuaW1wb3J0IHsgX2RjX2Rpdl8zMiAsIF9zY2hvb2xib29rX2RpdiB9IGZyb20gJy4nIDtcblxuXG4vKipcbiAqIEFsZ29yaXRobSAzLjMgRGl2aWRlLWFuZC1jb25xdWVyIGRpdmlzaW9uICgyIGJ5IDEpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIElucHV0XG4gKiAtLS0tLVxuICogIFR3byBub25uZWdhdGl2ZSBpbnRlZ2VycyBBIGFuZCBCLFxuICogIHN1Y2ggdGhhdCBBIDwgzrJebiBCIGFuZCDOsl5uIC8gMiDiiaQgQiA8IM6yXm4uXG4gKiAgbiBtdXN0IGJlIGV2ZW4uXG4gKlxuICogICAgICAgICAgICAgICAgICAgIC0tLS0tLS0tLS0tICAgICAgICAgICAgICAgICAtLS0tLVxuICogICAgICAgICAgICAgICAgICAgfCAgOiAgfCAgOiAgfCAgICAgICAgICAgICAgIHwgIDogIHxcbiAqICAgICAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLSAgICAgICAgICAgICAgICAgLS0tLS1cbiAqXG4gKiBPdXRwdXRcbiAqIC0tLS0tLVxuICogIFRoZSBxdW90aWVudCBmbG9vciggQS9CICkgYW5kIHRoZSByZW1haW5kZXIgQSBtb2QgQi5cbiAqXG4gKiBDb21wbGV4aXR5XG4gKiAtLS0tLS0tLS0tXG4gKiAgVChuKSA9IDJUJyhuLzIpICsgS1xuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9kY19kaXZfMjEgKCByICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiAsIGMgLCBjaSAsIGNqICkge1xuXG5cdGlmICggYmogLSBiaSA8IFRIUkVTSE9MRF9ESVZfREMgKSB7XG5cdFx0cmV0dXJuIF9zY2hvb2xib29rX2RpdiggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBjICwgY2kgKSA7XG5cdH1cblxuXHQvLyAxLiBMZXQgQSA9IEFfMyDOsl57M24vMn0gKyBBXzIgzrJebiArIEFfMSDOsl57bi8yfSArIEFfMCBhbmRcblx0Ly8gICAgQiA9IEJfMSDOsl57bi8yfSArIEJfMCxcblx0Ly8gICAgd2l0aCAwIOKJpCBBX2kgPCDOsl57bi8yfSBhbmQgMCDiiaQgQl9pIDwgzrJee24vMn0uXG5cblx0Y29uc3QgbSA9IGFqIC0gYWkgO1xuXHRjb25zdCBrID0gbSA+Pj4gMiA7XG5cblx0Ly8gMi4gQ29tcHV0ZSB0aGUgaGlnaCBoYWxmIFFfMSBvZiB0aGUgcXVvdGllbnQgYXNcblx0Ly8gICAgUV8xID0gKCBBXzMgzrJebiArIEFfMiDOsl57bi8yfSArIEFfMSApIC8gQlxuXHQvLyAgICB3aXRoIHJlbWFpbmRlciBSXzEgdXNpbmcgYWxnb3JpdGhtIDMuNC5cblxuXHRfZGNfZGl2XzMyKCByICwgYSAsIGFpICwgYWogLSBrICwgYiAsIGJpICwgYmogLCBjICwgY2kgLCBjaiAtIGsgKSA7XG5cblx0Ly8gMy4gQ29tcHV0ZSB0aGUgbG93IGhhbGYgUV8wIG9mIHRoZSBxdW90aWVudCBhc1xuXHQvLyAgICBRXzAgPSAoIFJfMSDOsl57bi8yfSArIEFfMCApIC8gQlxuXHQvLyAgICB3aXRoIHJlbWFpbmRlciBSXzAgdXNpbmcgYWxnb3JpdGhtIDMuNC5cblxuXHRfZGNfZGl2XzMyKCByICwgYSAsIGFpICsgayAsIGFqICwgYiAsIGJpICwgYmogLCBjICwgY2kgKyBrICwgY2ogKSA7XG5cblx0Ly8gNC4gUmV0dXJuIHRoZSBxdW90aWVudCBRID0gUV8xIM6yXntuLzJ9ICsgUV8wIGFuZCB0aGUgcmVtYWluZGVyIFIgPSBSXzAgLlxuXG59XG4iXX0=