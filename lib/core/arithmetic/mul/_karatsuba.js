'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._karatsuba = _karatsuba;

var _api = require('../../../api');

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
  (0, _api.mul)(r, a, ai, i_, b, bi, j_, z2, 0, N_); // z2 = a1.b1
  (0, _api.mul)(r, a, i_, aj, b, j_, bj, z0, 0, N); // z0 = a0.b0
  (0, _api.add)(r, a, ai, i_, a, i_, aj, t1, 0, n + 1); // (a0 + a1)
  (0, _api.add)(r, b, bi, j_, b, j_, bj, t2, 0, n + 1); // (b1 + b0)
  (0, _api.mul)(r, t1, 1, n + 1, t2, 1, n + 1, t3, 1, N + 1); // (a0 + a1)(b1 + b0)

  // BUILD OUTPUT
  (0, _2._copy)(z2, 0, N_, c, cj - I); // + z2 . r^{2n}
  (0, _2._copy)(z0, 0, N, c, cj - N); // + z0

  // overflow on t1, add t2 . r^{n}
  if (t1[0]) (0, _api.iadd)(r, t3, 0, n + 1, t2, 0, n + 1);

  // overflow on t2, add t1 . r^{n} (except t1[0])
  if (t2[0]) (0, _api.iadd)(r, t3, 0, n + 1, t1, 1, n + 1);

  (0, _api.iadd)(r, c, ci, cj - n, t3, 0, N + 1); // + (a0 + a1)(b1 + b0) . r^{n}
  (0, _._isub)(r, c, ci, cj - n, z2, 0, N_); // - z2 . r^{n}
  (0, _._isub)(r, c, ci, cj - n, z0, 0, N); // - z1 . r^{n}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvbXVsL19rYXJhdHN1YmEuanMiXSwibmFtZXMiOlsiX2thcmF0c3ViYSIsInIiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwiYyIsImNpIiwiY2oiLCJpIiwiaiIsImsiLCJuIiwiTWF0aCIsImNlaWwiLCJJIiwiTiIsIk5fIiwiaV8iLCJqXyIsIm1heCIsInQxIiwidDIiLCJ0MyIsInoyIiwiejAiXSwibWFwcGluZ3MiOiI7Ozs7O1FBc0VnQkEsVSxHQUFBQSxVOztBQXRFaEI7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtFTyxTQUFTQSxVQUFULENBQXNCQyxDQUF0QixFQUEwQkMsQ0FBMUIsRUFBOEJDLEVBQTlCLEVBQW1DQyxFQUFuQyxFQUF3Q0MsQ0FBeEMsRUFBNENDLEVBQTVDLEVBQWlEQyxFQUFqRCxFQUFzREMsQ0FBdEQsRUFBMERDLEVBQTFELEVBQStEQyxFQUEvRCxFQUFvRTs7QUFFMUUsTUFBTUMsSUFBSVAsS0FBS0QsRUFBZjtBQUNBLE1BQU1TLElBQUlMLEtBQUtELEVBQWY7QUFDQSxNQUFNTyxJQUFJSCxLQUFLRCxFQUFmOztBQUVBLE1BQU1LLElBQUtDLEtBQUtDLElBQUwsQ0FBV0wsSUFBSSxDQUFmLENBQVg7QUFDQSxNQUFNTSxJQUFLTixJQUFJQyxDQUFmO0FBQ0EsTUFBTU0sSUFBSyxJQUFJSixDQUFmO0FBQ0EsTUFBTUssS0FBS0YsSUFBSUMsQ0FBZjtBQUNBLE1BQU1FLEtBQUtoQixLQUFLVSxDQUFoQjtBQUNBLE1BQU1PLEtBQUtOLEtBQUtPLEdBQUwsQ0FBVWhCLEVBQVYsRUFBZUMsS0FBS08sQ0FBcEIsQ0FBWDs7QUFFQSxNQUFNUyxLQUFLLGVBQVFULElBQUksQ0FBWixDQUFYLENBYjBFLENBYTdDO0FBQzdCLE1BQU1VLEtBQUssZUFBUVYsSUFBSSxDQUFaLENBQVgsQ0FkMEUsQ0FjN0M7QUFDN0IsTUFBTVcsS0FBSyxlQUFRUCxJQUFJLENBQVosQ0FBWCxDQWYwRSxDQWU3QztBQUM3QixNQUFNUSxLQUFLLGVBQVFQLEVBQVIsQ0FBWDtBQUNBLE1BQU1RLEtBQUssZUFBUVQsQ0FBUixDQUFYOztBQUVBO0FBQ0EsZ0JBQUtqQixDQUFMLEVBQVNDLENBQVQsRUFBYUMsRUFBYixFQUFrQmlCLEVBQWxCLEVBQXVCZixDQUF2QixFQUEyQkMsRUFBM0IsRUFBZ0NlLEVBQWhDLEVBQXFDSyxFQUFyQyxFQUEwQyxDQUExQyxFQUE4Q1AsRUFBOUMsRUFwQjBFLENBb0JWO0FBQ2hFLGdCQUFLbEIsQ0FBTCxFQUFTQyxDQUFULEVBQWFrQixFQUFiLEVBQWtCaEIsRUFBbEIsRUFBdUJDLENBQXZCLEVBQTJCZ0IsRUFBM0IsRUFBZ0NkLEVBQWhDLEVBQXFDb0IsRUFBckMsRUFBMEMsQ0FBMUMsRUFBOENULENBQTlDLEVBckIwRSxDQXFCVjtBQUNoRSxnQkFBS2pCLENBQUwsRUFBU0MsQ0FBVCxFQUFhQyxFQUFiLEVBQWtCaUIsRUFBbEIsRUFBdUJsQixDQUF2QixFQUEyQmtCLEVBQTNCLEVBQWdDaEIsRUFBaEMsRUFBcUNtQixFQUFyQyxFQUEwQyxDQUExQyxFQUE4Q1QsSUFBSSxDQUFsRCxFQXRCMEUsQ0FzQlY7QUFDaEUsZ0JBQUtiLENBQUwsRUFBU0ksQ0FBVCxFQUFhQyxFQUFiLEVBQWtCZSxFQUFsQixFQUF1QmhCLENBQXZCLEVBQTJCZ0IsRUFBM0IsRUFBZ0NkLEVBQWhDLEVBQXFDaUIsRUFBckMsRUFBMEMsQ0FBMUMsRUFBOENWLElBQUksQ0FBbEQsRUF2QjBFLENBdUJWO0FBQ2hFLGdCQUFLYixDQUFMLEVBQVNzQixFQUFULEVBQWMsQ0FBZCxFQUFrQlQsSUFBSSxDQUF0QixFQUEwQlUsRUFBMUIsRUFBK0IsQ0FBL0IsRUFBbUNWLElBQUksQ0FBdkMsRUFBMkNXLEVBQTNDLEVBQWdELENBQWhELEVBQW9EUCxJQUFJLENBQXhELEVBeEIwRSxDQXdCVjs7QUFFaEU7QUFDQSxnQkFBT1EsRUFBUCxFQUFZLENBQVosRUFBZ0JQLEVBQWhCLEVBQXFCWCxDQUFyQixFQUF5QkUsS0FBS08sQ0FBOUIsRUEzQjBFLENBMkJ0QztBQUNwQyxnQkFBT1UsRUFBUCxFQUFZLENBQVosRUFBZ0JULENBQWhCLEVBQXFCVixDQUFyQixFQUF5QkUsS0FBS1EsQ0FBOUIsRUE1QjBFLENBNEJ0Qzs7QUFFcEM7QUFDQSxNQUFLSyxHQUFHLENBQUgsQ0FBTCxFQUFhLGVBQU10QixDQUFOLEVBQVV3QixFQUFWLEVBQWUsQ0FBZixFQUFtQlgsSUFBSSxDQUF2QixFQUEyQlUsRUFBM0IsRUFBZ0MsQ0FBaEMsRUFBb0NWLElBQUksQ0FBeEM7O0FBRWI7QUFDQSxNQUFLVSxHQUFHLENBQUgsQ0FBTCxFQUFhLGVBQU12QixDQUFOLEVBQVV3QixFQUFWLEVBQWUsQ0FBZixFQUFtQlgsSUFBSSxDQUF2QixFQUEyQlMsRUFBM0IsRUFBZ0MsQ0FBaEMsRUFBb0NULElBQUksQ0FBeEM7O0FBRWIsaUJBQU1iLENBQU4sRUFBVU8sQ0FBVixFQUFjQyxFQUFkLEVBQW1CQyxLQUFLSSxDQUF4QixFQUE0QlcsRUFBNUIsRUFBaUMsQ0FBakMsRUFBcUNQLElBQUksQ0FBekMsRUFwQzBFLENBb0MzQjtBQUMvQyxlQUFPakIsQ0FBUCxFQUFXTyxDQUFYLEVBQWVDLEVBQWYsRUFBb0JDLEtBQUtJLENBQXpCLEVBQTZCWSxFQUE3QixFQUFrQyxDQUFsQyxFQUFzQ1AsRUFBdEMsRUFyQzBFLENBcUMxQjtBQUNoRCxlQUFPbEIsQ0FBUCxFQUFXTyxDQUFYLEVBQWVDLEVBQWYsRUFBb0JDLEtBQUtJLENBQXpCLEVBQTZCYSxFQUE3QixFQUFrQyxDQUFsQyxFQUFzQ1QsQ0FBdEMsRUF0QzBFLENBc0MxQjtBQUVoRCIsImZpbGUiOiJfa2FyYXRzdWJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbXVsICwgYWRkICwgaWFkZCB9IGZyb20gJy4uLy4uLy4uL2FwaScgO1xuaW1wb3J0IHsgX2lzdWIgfSBmcm9tICcuLicgO1xuaW1wb3J0IHsgX3plcm9zICwgX2NvcHkgfSBmcm9tICcuLi8uLicgO1xuXG4vKipcbiAqXG4gKiBNdWx0aXBseSB0d28gYmlnIGVuZGlhbiBhcnJheXMgdXNpbmcga2FyYXRzdWJhIGFsZ29yaXRobSxcbiAqIHxBfCA+PSB8QnwgPiAwLCB8Q3wgPj0gMiAqIHxBfCwgfEF8ID4gMS5cbiAqXG4gKiAvIVxcIEJMT0NLIE1VTFRJUExJQ0FUSU9OIFJFU1VMVCBNVVNUIEhPTEQgSU4gVEhFIEpBVkFTQ1JJUFQgTlVNQkVSIFRZUEVcbiAqICAgICAoRE9VQkxFIGkuZS4gNTMgYml0cylcbiAqXG4gKiBFWFBMQU5BVElPTlxuICogIyMjIyMjIyMjIyNcbiAqXG4gKiBXZSBjb25zaWRlciB0aGUgbnVtYmVycyBhIGFuZCBiLCBib3RoIG9mIHNpemUgTiA9IDJuLlxuICpcbiAqIFdlIGRpdmlkZSBhIGFuZCBiIGludG8gdGhlaXIgbG93ZXIgYW5kIHVwcGVyIHBhcnRzLlxuICpcbiAqIGEgPSBhMSByXntufSArIGEwICgxKVxuICogYiA9IGIxIHJee259ICsgYjAgKDIpXG4gKlxuICogV2UgZXhwcmVzcyB0aGUgcHJvZHVjdCBvZiBhIGFuZCBiIHVzaW5nIHRoZWlyIGxvd2VyIGFuZCB1cHBlciBwYXJ0cy5cbiAqXG4gKiBhIGIgPSAoYTEgcl57bn0gKyBhMCkgKGIxIHJee259ICsgYjApICgzKVxuICogICAgID0gYTEgYjEgcl57Mm59ICsgKGExIGIwICsgYTAgYjEpIHJee259ICsgYTAgYjAgKDQpXG4gKlxuICogVGhpcyBnaXZlcyB1cyA0IG11bHRpcGxpY2F0aW9ucyB3aXRoIG9wZXJhbmRzIG9mIHNpemUgbi5cbiAqIFVzaW5nIGEgc2ltcGxlIHRyaWNrLCB3ZSBjYW4gcmVkdWNlIHRoaXMgY29tcHV0YXRpb24gdG8gMyBtdWx0aXBsaWNhdGlvbnMuXG4gKlxuICogV2UgZ2l2ZSB0aGUgMyB0ZXJtcyBvZiAoNCkgdGhlIG5hbWVzIHowLCB6MSBhbmQgejIuXG4gKlxuICogejIgPSBhMSBiMVxuICogejEgPSBhMSBiMCArIGEwIGIxXG4gKiB6MCA9IGEwIGIwXG4gKlxuICogYSBiICA9IHoyIHJeezJufSArIHoxIHJee259ICsgejBcbiAqXG4gKiBXZSB0aGVuIGV4cHJlc3MgejEgdXNpbmcgejAsIHoyIGFuZCBvbmUgYWRkaXRpb25hbCBtdWx0aXBsaWNhdGlvbi5cbiAqXG4gKiAoYTEgKyBhMCkoYjEgKyBiMCkgPSBhMSBiMSArIGEwIGIwICsgKGExIGIwICsgYTAgYjEpXG4gKiAgICAgICAgICAgICAgICAgICAgPSB6MiArIHowICsgejFcbiAqXG4gKiB6MSA9IChhMSArIGEwKShiMSArIGIwKSAtIHoyIC0gejBcbiAqXG4gKiBBTiBBTk9USEVSIFdBWSBBUk9VTkQgKG5vdCB1c2VkIGhlcmUpXG4gKlxuICogKGExIC0gYTApKGIxIC0gYjApID0gKGExIGIxICsgYTAgYjApIC0gKGExIGIwICsgYTAgYjEpXG4gKiAoYTAgLSBhMSkoYjEgLSBiMCkgPSAoYTEgYjAgKyBhMCBiMSkgLSAoYTEgYjEgKyBhMCBiMClcbiAqIGEgYiA9IChyXnsybn0gKyByXntufSlhMSBiMSArIHJee259KGEwIC0gYTEpKGIxIC0gYjApICsgKHJee259ICsgMSlhMCBiMFxuICpcbiAqIFRoaXMgYWxnb3JpdGhtIGlzIGEgc3BlY2lmaWMgY2FzZSBvZiB0aGUgVG9vbS1Db29rIGFsZ29yaXRobSwgd2hlbiBtID0gbiA9XG4gKiAyLlxuICpcbiAqIEZvciBmdXJ0aGVyIHJlZmVyZW5jZSwgc2VlXG4gKiAgLSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0thcmF0c3ViYV9hbGdvcml0aG1cbiAqICAtIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVG9vbeKAk0Nvb2tfbXVsdGlwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gciBiYXNlIChyYWRpeClcbiAqIEBwYXJhbSB7QXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGEgcmlnaHRcbiAqIEBwYXJhbSB7QXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBiIGxlZnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBiIHJpZ2h0XG4gKiBAcGFyYW0ge0FycmF5fSBjIHJlc3VsdCwgbXVzdCBiZSAwIGluaXRpYWxpemVkXG4gKiBAcGFyYW0ge051bWJlcn0gY2kgYyBsZWZ0XG4gKiBAcGFyYW0ge051bWJlcn0gY2ogYyByaWdodFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfa2FyYXRzdWJhICggciAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogLCBjICwgY2kgLCBjaiApIHtcblxuXHRjb25zdCBpID0gYWogLSBhaSA7XG5cdGNvbnN0IGogPSBiaiAtIGJpIDtcblx0Y29uc3QgayA9IGNqIC0gY2kgO1xuXG5cdGNvbnN0IG4gID0gTWF0aC5jZWlsKCBpIC8gMiApIDtcblx0Y29uc3QgSSAgPSBpICsgaiA7XG5cdGNvbnN0IE4gID0gMiAqIG4gO1xuXHRjb25zdCBOXyA9IEkgLSBOIDtcblx0Y29uc3QgaV8gPSBhaiAtIG4gO1xuXHRjb25zdCBqXyA9IE1hdGgubWF4KCBiaSAsIGJqIC0gbiApIDtcblxuXHRjb25zdCB0MSA9IF96ZXJvcyggbiArIDEgKSA7IC8vICsgMSB0byBoYW5kbGUgYWRkaXRpb24gb3ZlcmZsb3dzXG5cdGNvbnN0IHQyID0gX3plcm9zKCBuICsgMSApIDsgLy8gYW5kIGd1YXJhbnRlZSByZWR1Y2luZyBrIGZvciB0aGVcblx0Y29uc3QgdDMgPSBfemVyb3MoIE4gKyAxICkgOyAvLyByZWN1cnNpdmUgY2FsbHNcblx0Y29uc3QgejIgPSBfemVyb3MoIE5fICkgO1xuXHRjb25zdCB6MCA9IF96ZXJvcyggTiApIDtcblxuXHQvLyBSRUNVUlNJVkUgQ0FMTFNcblx0bXVsKCByICwgYSAsIGFpICwgaV8gLCBiICwgYmkgLCBqXyAsIHoyICwgMCAsIE5fICkgOyAgICAgICAgICAgIC8vIHoyID0gYTEuYjFcblx0bXVsKCByICwgYSAsIGlfICwgYWogLCBiICwgal8gLCBiaiAsIHowICwgMCAsIE4gKSA7ICAgICAgICAgICAgIC8vIHowID0gYTAuYjBcblx0YWRkKCByICwgYSAsIGFpICwgaV8gLCBhICwgaV8gLCBhaiAsIHQxICwgMCAsIG4gKyAxICkgOyAgICAgICAgIC8vIChhMCArIGExKVxuXHRhZGQoIHIgLCBiICwgYmkgLCBqXyAsIGIgLCBqXyAsIGJqICwgdDIgLCAwICwgbiArIDEgKSA7ICAgICAgICAgLy8gKGIxICsgYjApXG5cdG11bCggciAsIHQxICwgMSAsIG4gKyAxICwgdDIgLCAxICwgbiArIDEgLCB0MyAsIDEgLCBOICsgMSApIDsgICAvLyAoYTAgKyBhMSkoYjEgKyBiMClcblxuXHQvLyBCVUlMRCBPVVRQVVRcblx0X2NvcHkoIHoyICwgMCAsIE5fICwgYyAsIGNqIC0gSSApIDsgLy8gKyB6MiAuIHJeezJufVxuXHRfY29weSggejAgLCAwICwgTiAgLCBjICwgY2ogLSBOICkgOyAvLyArIHowXG5cblx0Ly8gb3ZlcmZsb3cgb24gdDEsIGFkZCB0MiAuIHJee259XG5cdGlmICggdDFbMF0gKSBpYWRkKCByICwgdDMgLCAwICwgbiArIDEgLCB0MiAsIDAgLCBuICsgMSApIDtcblxuXHQvLyBvdmVyZmxvdyBvbiB0MiwgYWRkIHQxIC4gcl57bn0gKGV4Y2VwdCB0MVswXSlcblx0aWYgKCB0MlswXSApIGlhZGQoIHIgLCB0MyAsIDAgLCBuICsgMSAsIHQxICwgMSAsIG4gKyAxICkgO1xuXG5cdGlhZGQoIHIgLCBjICwgY2kgLCBjaiAtIG4gLCB0MyAsIDAgLCBOICsgMSApIDsgLy8gKyAoYTAgKyBhMSkoYjEgKyBiMCkgLiByXntufVxuXHRfaXN1YiggciAsIGMgLCBjaSAsIGNqIC0gbiAsIHoyICwgMCAsIE5fICkgOyAgICAvLyAtIHoyIC4gcl57bn1cblx0X2lzdWIoIHIgLCBjICwgY2kgLCBjaiAtIG4gLCB6MCAsIDAgLCBOICkgOyAgICAgLy8gLSB6MSAuIHJee259XG5cbn1cbiJdfQ==