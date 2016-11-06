'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._karatsuba = _karatsuba;

var _api = require('../../../2-api');

var _ = require('..');

var _2 = require('../..');

/**
 *
 * Multiply two big endian arrays using karatsuba algorithm,
 * |A| >= |B| > 0, |C| >= 2 * |A|, |A| > 1.
 *
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE
 *     (DOUBLE i.e. 53 bits)
 *
 * EXPLANATION
 * ###########
 *
 * We consider the numbers a and b, both of size N = 2n.
 *
 * We divide a and b into their lower and upper parts.
 *
 * a = a1 r^{n} + a0 (1)
 * b = b1 r^{n} + b0 (2)
 *
 * We express the product of a and b using their lower and upper parts.
 *
 * a b = (a1 r^{n} + a0) (b1 r^{n} + b0) (3)
 *     = a1 b1 r^{2n} + (a1 b0 + a0 b1) r^{n} + a0 b0 (4)
 *
 * This gives us 4 multiplications with operands of size n.
 * Using a simple trick, we can reduce this computation to 3 multiplications.
 *
 * We give the 3 terms of (4) the names z0, z1 and z2.
 *
 * z2 = a1 b1
 * z1 = a1 b0 + a0 b1
 * z0 = a0 b0
 *
 * a b  = z2 r^{2n} + z1 r^{n} + z0
 *
 * We then express z1 using z0, z2 and one additional multiplication.
 *
 * (a1 + a0)(b1 + b0) = a1 b1 + a0 b0 + (a1 b0 + a0 b1)
 *                    = z2 + z0 + z1
 *
 * z1 = (a1 + a0)(b1 + b0) - z2 - z0
 *
 * AN ANOTHER WAY AROUND (not used here)
 *
 * (a1 - a0)(b1 - b0) = (a1 b1 + a0 b0) - (a1 b0 + a0 b1)
 * (a0 - a1)(b1 - b0) = (a1 b0 + a0 b1) - (a1 b1 + a0 b0)
 * a b = (r^{2n} + r^{n})a1 b1 + r^{n}(a0 - a1)(b1 - b0) + (r^{n} + 1)a0 b0
 *
 * This algorithm is a specific case of the Toom-Cook algorithm, when m = n =
 * 2.
 *
 * For further reference, see
 *  - http://en.wikipedia.org/wiki/Karatsuba_algorithm
 *  - http://en.wikipedia.org/wiki/Toom–Cook_multiplication
 *
 * @param {Number} r base (radix)
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 * @param {Array} b second operand
 * @param {Number} bi b left
 * @param {Number} bj b right
 * @param {Array} c result, must be 0 initialized
 * @param {Number} ci c left
 * @param {Number} cj c right
 */

function _karatsuba(r, a, ai, aj, b, bi, bj, c, ci, cj) {

  var i = aj - ai;
  var j = bj - bi;
  var k = cj - ci;

  var n = Math.ceil(i / 2);
  var I = i + j;
  var N = 2 * n;
  var N_ = I - N;
  var i_ = aj - n;
  var j_ = Math.max(bi, bj - n);

  var t1 = (0, _2._zeros)(n + 1); // + 1 to handle addition overflows
  var t2 = (0, _2._zeros)(n + 1); // and guarantee reducing k for the
  var t3 = (0, _2._zeros)(N + 1); // recursive calls
  var z2 = (0, _2._zeros)(N_);
  var z0 = (0, _2._zeros)(N);

  // RECURSIVE CALLS
  (0, _api._mul)(r, a, ai, i_, b, bi, j_, z2, 0, N_); // z2 = a1.b1
  (0, _api._mul)(r, a, i_, aj, b, j_, bj, z0, 0, N); // z0 = a0.b0
  (0, _._add)(r, a, ai, i_, a, i_, aj, t1, 0, n + 1); // (a0 + a1)
  (0, _._add)(r, b, bi, j_, b, j_, bj, t2, 0, n + 1); // (b1 + b0)
  (0, _api._mul)(r, t1, 1, n + 1, t2, 1, n + 1, t3, 1, N + 1); // (a0 + a1)(b1 + b0)

  // BUILD OUTPUT
  (0, _2._copy)(z2, 0, N_, c, cj - I); // + z2 . r^{2n}
  (0, _2._copy)(z0, 0, N, c, cj - N); // + z0

  // overflow on t1, add t2 . r^{n}
  if (t1[0]) (0, _._iadd)(r, t3, 0, n + 1, t2, 0, n + 1);

  // overflow on t2, add t1 . r^{n} (except t1[0])
  if (t2[0]) (0, _._iadd)(r, t3, 0, n + 1, t1, 1, n + 1);

  (0, _._iadd)(r, c, ci, cj - n, t3, 0, N + 1); // + (a0 + a1)(b1 + b0) . r^{n}
  (0, _._isub)(r, c, ci, cj - n, z2, 0, N_); // - z2 . r^{n}
  (0, _._isub)(r, c, ci, cj - n, z0, 0, N); // - z1 . r^{n}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL211bC9fa2FyYXRzdWJhLmpzIl0sIm5hbWVzIjpbIl9rYXJhdHN1YmEiLCJyIiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImMiLCJjaSIsImNqIiwiaSIsImoiLCJrIiwibiIsIk1hdGgiLCJjZWlsIiwiSSIsIk4iLCJOXyIsImlfIiwial8iLCJtYXgiLCJ0MSIsInQyIiwidDMiLCJ6MiIsInowIl0sIm1hcHBpbmdzIjoiOzs7OztRQXNFZ0JBLFUsR0FBQUEsVTs7QUF0RWhCOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRU8sU0FBU0EsVUFBVCxDQUFzQkMsQ0FBdEIsRUFBMEJDLENBQTFCLEVBQThCQyxFQUE5QixFQUFtQ0MsRUFBbkMsRUFBd0NDLENBQXhDLEVBQTRDQyxFQUE1QyxFQUFpREMsRUFBakQsRUFBc0RDLENBQXRELEVBQTBEQyxFQUExRCxFQUErREMsRUFBL0QsRUFBb0U7O0FBRTFFLE1BQU1DLElBQUlQLEtBQUtELEVBQWY7QUFDQSxNQUFNUyxJQUFJTCxLQUFLRCxFQUFmO0FBQ0EsTUFBTU8sSUFBSUgsS0FBS0QsRUFBZjs7QUFFQSxNQUFNSyxJQUFLQyxLQUFLQyxJQUFMLENBQVdMLElBQUksQ0FBZixDQUFYO0FBQ0EsTUFBTU0sSUFBS04sSUFBSUMsQ0FBZjtBQUNBLE1BQU1NLElBQUssSUFBSUosQ0FBZjtBQUNBLE1BQU1LLEtBQUtGLElBQUlDLENBQWY7QUFDQSxNQUFNRSxLQUFLaEIsS0FBS1UsQ0FBaEI7QUFDQSxNQUFNTyxLQUFLTixLQUFLTyxHQUFMLENBQVVoQixFQUFWLEVBQWVDLEtBQUtPLENBQXBCLENBQVg7O0FBRUEsTUFBTVMsS0FBSyxlQUFRVCxJQUFJLENBQVosQ0FBWCxDQWIwRSxDQWE3QztBQUM3QixNQUFNVSxLQUFLLGVBQVFWLElBQUksQ0FBWixDQUFYLENBZDBFLENBYzdDO0FBQzdCLE1BQU1XLEtBQUssZUFBUVAsSUFBSSxDQUFaLENBQVgsQ0FmMEUsQ0FlN0M7QUFDN0IsTUFBTVEsS0FBSyxlQUFRUCxFQUFSLENBQVg7QUFDQSxNQUFNUSxLQUFLLGVBQVFULENBQVIsQ0FBWDs7QUFFQTtBQUNBLGlCQUFNakIsQ0FBTixFQUFVQyxDQUFWLEVBQWNDLEVBQWQsRUFBbUJpQixFQUFuQixFQUF3QmYsQ0FBeEIsRUFBNEJDLEVBQTVCLEVBQWlDZSxFQUFqQyxFQUFzQ0ssRUFBdEMsRUFBMkMsQ0FBM0MsRUFBK0NQLEVBQS9DLEVBcEIwRSxDQW9CVDtBQUNqRSxpQkFBTWxCLENBQU4sRUFBVUMsQ0FBVixFQUFja0IsRUFBZCxFQUFtQmhCLEVBQW5CLEVBQXdCQyxDQUF4QixFQUE0QmdCLEVBQTVCLEVBQWlDZCxFQUFqQyxFQUFzQ29CLEVBQXRDLEVBQTJDLENBQTNDLEVBQStDVCxDQUEvQyxFQXJCMEUsQ0FxQlQ7QUFDakUsY0FBTWpCLENBQU4sRUFBVUMsQ0FBVixFQUFjQyxFQUFkLEVBQW1CaUIsRUFBbkIsRUFBd0JsQixDQUF4QixFQUE0QmtCLEVBQTVCLEVBQWlDaEIsRUFBakMsRUFBc0NtQixFQUF0QyxFQUEyQyxDQUEzQyxFQUErQ1QsSUFBSSxDQUFuRCxFQXRCMEUsQ0FzQlQ7QUFDakUsY0FBTWIsQ0FBTixFQUFVSSxDQUFWLEVBQWNDLEVBQWQsRUFBbUJlLEVBQW5CLEVBQXdCaEIsQ0FBeEIsRUFBNEJnQixFQUE1QixFQUFpQ2QsRUFBakMsRUFBc0NpQixFQUF0QyxFQUEyQyxDQUEzQyxFQUErQ1YsSUFBSSxDQUFuRCxFQXZCMEUsQ0F1QlQ7QUFDakUsaUJBQU1iLENBQU4sRUFBVXNCLEVBQVYsRUFBZSxDQUFmLEVBQW1CVCxJQUFJLENBQXZCLEVBQTJCVSxFQUEzQixFQUFnQyxDQUFoQyxFQUFvQ1YsSUFBSSxDQUF4QyxFQUE0Q1csRUFBNUMsRUFBaUQsQ0FBakQsRUFBcURQLElBQUksQ0FBekQsRUF4QjBFLENBd0JUOztBQUVqRTtBQUNBLGdCQUFPUSxFQUFQLEVBQVksQ0FBWixFQUFnQlAsRUFBaEIsRUFBcUJYLENBQXJCLEVBQXlCRSxLQUFLTyxDQUE5QixFQTNCMEUsQ0EyQnRDO0FBQ3BDLGdCQUFPVSxFQUFQLEVBQVksQ0FBWixFQUFnQlQsQ0FBaEIsRUFBcUJWLENBQXJCLEVBQXlCRSxLQUFLUSxDQUE5QixFQTVCMEUsQ0E0QnRDOztBQUVwQztBQUNBLE1BQUtLLEdBQUcsQ0FBSCxDQUFMLEVBQWEsYUFBT3RCLENBQVAsRUFBV3dCLEVBQVgsRUFBZ0IsQ0FBaEIsRUFBb0JYLElBQUksQ0FBeEIsRUFBNEJVLEVBQTVCLEVBQWlDLENBQWpDLEVBQXFDVixJQUFJLENBQXpDOztBQUViO0FBQ0EsTUFBS1UsR0FBRyxDQUFILENBQUwsRUFBYSxhQUFPdkIsQ0FBUCxFQUFXd0IsRUFBWCxFQUFnQixDQUFoQixFQUFvQlgsSUFBSSxDQUF4QixFQUE0QlMsRUFBNUIsRUFBaUMsQ0FBakMsRUFBcUNULElBQUksQ0FBekM7O0FBRWIsZUFBT2IsQ0FBUCxFQUFXTyxDQUFYLEVBQWVDLEVBQWYsRUFBb0JDLEtBQUtJLENBQXpCLEVBQTZCVyxFQUE3QixFQUFrQyxDQUFsQyxFQUFzQ1AsSUFBSSxDQUExQyxFQXBDMEUsQ0FvQzFCO0FBQ2hELGVBQU9qQixDQUFQLEVBQVdPLENBQVgsRUFBZUMsRUFBZixFQUFvQkMsS0FBS0ksQ0FBekIsRUFBNkJZLEVBQTdCLEVBQWtDLENBQWxDLEVBQXNDUCxFQUF0QyxFQXJDMEUsQ0FxQzFCO0FBQ2hELGVBQU9sQixDQUFQLEVBQVdPLENBQVgsRUFBZUMsRUFBZixFQUFvQkMsS0FBS0ksQ0FBekIsRUFBNkJhLEVBQTdCLEVBQWtDLENBQWxDLEVBQXNDVCxDQUF0QyxFQXRDMEUsQ0FzQzFCO0FBRWhEIiwiZmlsZSI6Il9rYXJhdHN1YmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfbXVsIH0gZnJvbSAnLi4vLi4vLi4vMi1hcGknIDtcbmltcG9ydCB7IF9hZGQgLCBfaWFkZCAsIF9pc3ViIH0gZnJvbSAnLi4nIDtcbmltcG9ydCB7IF96ZXJvcyAsIF9jb3B5IH0gZnJvbSAnLi4vLi4nIDtcblxuLyoqXG4gKlxuICogTXVsdGlwbHkgdHdvIGJpZyBlbmRpYW4gYXJyYXlzIHVzaW5nIGthcmF0c3ViYSBhbGdvcml0aG0sXG4gKiB8QXwgPj0gfEJ8ID4gMCwgfEN8ID49IDIgKiB8QXwsIHxBfCA+IDEuXG4gKlxuICogLyFcXCBCTE9DSyBNVUxUSVBMSUNBVElPTiBSRVNVTFQgTVVTVCBIT0xEIElOIFRIRSBKQVZBU0NSSVBUIE5VTUJFUiBUWVBFXG4gKiAgICAgKERPVUJMRSBpLmUuIDUzIGJpdHMpXG4gKlxuICogRVhQTEFOQVRJT05cbiAqICMjIyMjIyMjIyMjXG4gKlxuICogV2UgY29uc2lkZXIgdGhlIG51bWJlcnMgYSBhbmQgYiwgYm90aCBvZiBzaXplIE4gPSAybi5cbiAqXG4gKiBXZSBkaXZpZGUgYSBhbmQgYiBpbnRvIHRoZWlyIGxvd2VyIGFuZCB1cHBlciBwYXJ0cy5cbiAqXG4gKiBhID0gYTEgcl57bn0gKyBhMCAoMSlcbiAqIGIgPSBiMSByXntufSArIGIwICgyKVxuICpcbiAqIFdlIGV4cHJlc3MgdGhlIHByb2R1Y3Qgb2YgYSBhbmQgYiB1c2luZyB0aGVpciBsb3dlciBhbmQgdXBwZXIgcGFydHMuXG4gKlxuICogYSBiID0gKGExIHJee259ICsgYTApIChiMSByXntufSArIGIwKSAoMylcbiAqICAgICA9IGExIGIxIHJeezJufSArIChhMSBiMCArIGEwIGIxKSByXntufSArIGEwIGIwICg0KVxuICpcbiAqIFRoaXMgZ2l2ZXMgdXMgNCBtdWx0aXBsaWNhdGlvbnMgd2l0aCBvcGVyYW5kcyBvZiBzaXplIG4uXG4gKiBVc2luZyBhIHNpbXBsZSB0cmljaywgd2UgY2FuIHJlZHVjZSB0aGlzIGNvbXB1dGF0aW9uIHRvIDMgbXVsdGlwbGljYXRpb25zLlxuICpcbiAqIFdlIGdpdmUgdGhlIDMgdGVybXMgb2YgKDQpIHRoZSBuYW1lcyB6MCwgejEgYW5kIHoyLlxuICpcbiAqIHoyID0gYTEgYjFcbiAqIHoxID0gYTEgYjAgKyBhMCBiMVxuICogejAgPSBhMCBiMFxuICpcbiAqIGEgYiAgPSB6MiByXnsybn0gKyB6MSByXntufSArIHowXG4gKlxuICogV2UgdGhlbiBleHByZXNzIHoxIHVzaW5nIHowLCB6MiBhbmQgb25lIGFkZGl0aW9uYWwgbXVsdGlwbGljYXRpb24uXG4gKlxuICogKGExICsgYTApKGIxICsgYjApID0gYTEgYjEgKyBhMCBiMCArIChhMSBiMCArIGEwIGIxKVxuICogICAgICAgICAgICAgICAgICAgID0gejIgKyB6MCArIHoxXG4gKlxuICogejEgPSAoYTEgKyBhMCkoYjEgKyBiMCkgLSB6MiAtIHowXG4gKlxuICogQU4gQU5PVEhFUiBXQVkgQVJPVU5EIChub3QgdXNlZCBoZXJlKVxuICpcbiAqIChhMSAtIGEwKShiMSAtIGIwKSA9IChhMSBiMSArIGEwIGIwKSAtIChhMSBiMCArIGEwIGIxKVxuICogKGEwIC0gYTEpKGIxIC0gYjApID0gKGExIGIwICsgYTAgYjEpIC0gKGExIGIxICsgYTAgYjApXG4gKiBhIGIgPSAocl57Mm59ICsgcl57bn0pYTEgYjEgKyByXntufShhMCAtIGExKShiMSAtIGIwKSArIChyXntufSArIDEpYTAgYjBcbiAqXG4gKiBUaGlzIGFsZ29yaXRobSBpcyBhIHNwZWNpZmljIGNhc2Ugb2YgdGhlIFRvb20tQ29vayBhbGdvcml0aG0sIHdoZW4gbSA9IG4gPVxuICogMi5cbiAqXG4gKiBGb3IgZnVydGhlciByZWZlcmVuY2UsIHNlZVxuICogIC0gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LYXJhdHN1YmFfYWxnb3JpdGhtXG4gKiAgLSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Rvb23igJNDb29rX211bHRpcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgYmFzZSAocmFkaXgpXG4gKiBAcGFyYW0ge0FycmF5fSBhIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBhIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBhIHJpZ2h0XG4gKiBAcGFyYW0ge0FycmF5fSBiIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gYmkgYiBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gYmogYiByaWdodFxuICogQHBhcmFtIHtBcnJheX0gYyByZXN1bHQsIG11c3QgYmUgMCBpbml0aWFsaXplZFxuICogQHBhcmFtIHtOdW1iZXJ9IGNpIGMgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGNqIGMgcmlnaHRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2thcmF0c3ViYSAoIHIgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICwgYyAsIGNpICwgY2ogKSB7XG5cblx0Y29uc3QgaSA9IGFqIC0gYWkgO1xuXHRjb25zdCBqID0gYmogLSBiaSA7XG5cdGNvbnN0IGsgPSBjaiAtIGNpIDtcblxuXHRjb25zdCBuICA9IE1hdGguY2VpbCggaSAvIDIgKSA7XG5cdGNvbnN0IEkgID0gaSArIGogO1xuXHRjb25zdCBOICA9IDIgKiBuIDtcblx0Y29uc3QgTl8gPSBJIC0gTiA7XG5cdGNvbnN0IGlfID0gYWogLSBuIDtcblx0Y29uc3Qgal8gPSBNYXRoLm1heCggYmkgLCBiaiAtIG4gKSA7XG5cblx0Y29uc3QgdDEgPSBfemVyb3MoIG4gKyAxICkgOyAvLyArIDEgdG8gaGFuZGxlIGFkZGl0aW9uIG92ZXJmbG93c1xuXHRjb25zdCB0MiA9IF96ZXJvcyggbiArIDEgKSA7IC8vIGFuZCBndWFyYW50ZWUgcmVkdWNpbmcgayBmb3IgdGhlXG5cdGNvbnN0IHQzID0gX3plcm9zKCBOICsgMSApIDsgLy8gcmVjdXJzaXZlIGNhbGxzXG5cdGNvbnN0IHoyID0gX3plcm9zKCBOXyApIDtcblx0Y29uc3QgejAgPSBfemVyb3MoIE4gKSA7XG5cblx0Ly8gUkVDVVJTSVZFIENBTExTXG5cdF9tdWwoIHIgLCBhICwgYWkgLCBpXyAsIGIgLCBiaSAsIGpfICwgejIgLCAwICwgTl8gKSA7ICAgICAgICAgICAgLy8gejIgPSBhMS5iMVxuXHRfbXVsKCByICwgYSAsIGlfICwgYWogLCBiICwgal8gLCBiaiAsIHowICwgMCAsIE4gKSA7ICAgICAgICAgICAgIC8vIHowID0gYTAuYjBcblx0X2FkZCggciAsIGEgLCBhaSAsIGlfICwgYSAsIGlfICwgYWogLCB0MSAsIDAgLCBuICsgMSApIDsgICAgICAgICAvLyAoYTAgKyBhMSlcblx0X2FkZCggciAsIGIgLCBiaSAsIGpfICwgYiAsIGpfICwgYmogLCB0MiAsIDAgLCBuICsgMSApIDsgICAgICAgICAvLyAoYjEgKyBiMClcblx0X211bCggciAsIHQxICwgMSAsIG4gKyAxICwgdDIgLCAxICwgbiArIDEgLCB0MyAsIDEgLCBOICsgMSApIDsgICAvLyAoYTAgKyBhMSkoYjEgKyBiMClcblxuXHQvLyBCVUlMRCBPVVRQVVRcblx0X2NvcHkoIHoyICwgMCAsIE5fICwgYyAsIGNqIC0gSSApIDsgLy8gKyB6MiAuIHJeezJufVxuXHRfY29weSggejAgLCAwICwgTiAgLCBjICwgY2ogLSBOICkgOyAvLyArIHowXG5cblx0Ly8gb3ZlcmZsb3cgb24gdDEsIGFkZCB0MiAuIHJee259XG5cdGlmICggdDFbMF0gKSBfaWFkZCggciAsIHQzICwgMCAsIG4gKyAxICwgdDIgLCAwICwgbiArIDEgKSA7XG5cblx0Ly8gb3ZlcmZsb3cgb24gdDIsIGFkZCB0MSAuIHJee259IChleGNlcHQgdDFbMF0pXG5cdGlmICggdDJbMF0gKSBfaWFkZCggciAsIHQzICwgMCAsIG4gKyAxICwgdDEgLCAxICwgbiArIDEgKSA7XG5cblx0X2lhZGQoIHIgLCBjICwgY2kgLCBjaiAtIG4gLCB0MyAsIDAgLCBOICsgMSApIDsgLy8gKyAoYTAgKyBhMSkoYjEgKyBiMCkgLiByXntufVxuXHRfaXN1YiggciAsIGMgLCBjaSAsIGNqIC0gbiAsIHoyICwgMCAsIE5fICkgOyAgICAvLyAtIHoyIC4gcl57bn1cblx0X2lzdWIoIHIgLCBjICwgY2kgLCBjaiAtIG4gLCB6MCAsIDAgLCBOICkgOyAgICAgLy8gLSB6MSAuIHJee259XG5cbn1cbiJdfQ==