'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._idivmod = _idivmod;

var _core = require('../core');

/**
 * Computes the quotient and remainder of two numbers. Uses the most
 * appropriate algorithms depending on the size of the operands. The remainder
 * is written to the dividend array. There are a few assumptions made on the
 * input.
 *
 * Input
 * -----
 *  - No leading zeros in D or Q.
 *  - |D| = |Q|
 *
 * @param {Number} r The base to work with.
 * @param {Array} D Dividend / Remainder array (remainder computed in-place).
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} d Divisor array.
 * @param {Number} di Left of divisor.
 * @param {Number} dj Right of divisor.
 * @param {Array} Q Quotient array (zero initialized).
 * @param {Number} Qi Left of quotient.
 * @param {Number} Qj Right of quotient.
 */
function _idivmod(r, D, Di, Dj, d, di, dj, Q, Qi, Qj) {

  var dn = dj - di;

  if (dn === 1) {
    return (0, _core._idivmod_limb)(r, d[di], D, Di, Dj, Q, Qi);
  } else if (dn < _core.THRESHOLD_DIV_DC) {
    return (0, _core._idivmod_schoolbook)(r, D, Di, Dj, d, di, dj, Q, Qi);
  } else {
    return (0, _core._idivmod_dc)(r, D, Di, Dj, d, di, dj, Q, Qi, Qj);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvX2lkaXZtb2QuanMiXSwibmFtZXMiOlsiX2lkaXZtb2QiLCJyIiwiRCIsIkRpIiwiRGoiLCJkIiwiZGkiLCJkaiIsIlEiLCJRaSIsIlFqIiwiZG4iXSwibWFwcGluZ3MiOiI7Ozs7O1FBeUJnQkEsUSxHQUFBQSxROztBQXpCaEI7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQk8sU0FBU0EsUUFBVCxDQUFvQkMsQ0FBcEIsRUFBd0JDLENBQXhCLEVBQTRCQyxFQUE1QixFQUFpQ0MsRUFBakMsRUFBc0NDLENBQXRDLEVBQTBDQyxFQUExQyxFQUErQ0MsRUFBL0MsRUFBb0RDLENBQXBELEVBQXdEQyxFQUF4RCxFQUE2REMsRUFBN0QsRUFBa0U7O0FBRXhFLE1BQU1DLEtBQUtKLEtBQUtELEVBQWhCOztBQUVBLE1BQUtLLE9BQU8sQ0FBWixFQUFnQjtBQUNmLFdBQU8seUJBQWVWLENBQWYsRUFBbUJJLEVBQUVDLEVBQUYsQ0FBbkIsRUFBMkJKLENBQTNCLEVBQStCQyxFQUEvQixFQUFvQ0MsRUFBcEMsRUFBeUNJLENBQXpDLEVBQTZDQyxFQUE3QyxDQUFQO0FBQ0EsR0FGRCxNQUlLLElBQUtFLDJCQUFMLEVBQTZCO0FBQ2pDLFdBQU8sK0JBQXFCVixDQUFyQixFQUF5QkMsQ0FBekIsRUFBNkJDLEVBQTdCLEVBQWtDQyxFQUFsQyxFQUF1Q0MsQ0FBdkMsRUFBMkNDLEVBQTNDLEVBQWdEQyxFQUFoRCxFQUFxREMsQ0FBckQsRUFBeURDLEVBQXpELENBQVA7QUFDQSxHQUZJLE1BSUE7QUFDSixXQUFPLHVCQUFhUixDQUFiLEVBQWlCQyxDQUFqQixFQUFxQkMsRUFBckIsRUFBMEJDLEVBQTFCLEVBQStCQyxDQUEvQixFQUFtQ0MsRUFBbkMsRUFBd0NDLEVBQXhDLEVBQTZDQyxDQUE3QyxFQUFpREMsRUFBakQsRUFBc0RDLEVBQXRELENBQVA7QUFDQTtBQUVEIiwiZmlsZSI6Il9pZGl2bW9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2lkaXZtb2RfbGltYiAsIF9pZGl2bW9kX3NjaG9vbGJvb2sgLCBfaWRpdm1vZF9kYyB9IGZyb20gJy4uL2NvcmUnIDtcbmltcG9ydCB7IFRIUkVTSE9MRF9ESVZfREMgfSBmcm9tICcuLi9jb3JlJyA7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHF1b3RpZW50IGFuZCByZW1haW5kZXIgb2YgdHdvIG51bWJlcnMuIFVzZXMgdGhlIG1vc3RcbiAqIGFwcHJvcHJpYXRlIGFsZ29yaXRobXMgZGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIHRoZSBvcGVyYW5kcy4gVGhlIHJlbWFpbmRlclxuICogaXMgd3JpdHRlbiB0byB0aGUgZGl2aWRlbmQgYXJyYXkuIFRoZXJlIGFyZSBhIGZldyBhc3N1bXB0aW9ucyBtYWRlIG9uIHRoZVxuICogaW5wdXQuXG4gKlxuICogSW5wdXRcbiAqIC0tLS0tXG4gKiAgLSBObyBsZWFkaW5nIHplcm9zIGluIEQgb3IgUS5cbiAqICAtIHxEfCA9IHxRfFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSByIFRoZSBiYXNlIHRvIHdvcmsgd2l0aC5cbiAqIEBwYXJhbSB7QXJyYXl9IEQgRGl2aWRlbmQgLyBSZW1haW5kZXIgYXJyYXkgKHJlbWFpbmRlciBjb21wdXRlZCBpbi1wbGFjZSkuXG4gKiBAcGFyYW0ge051bWJlcn0gRGkgTGVmdCBvZiBkaXZpZGVuZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBEaiBSaWdodCBvZiBkaXZpZGVuZC5cbiAqIEBwYXJhbSB7QXJyYXl9IGQgRGl2aXNvciBhcnJheS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBkaSBMZWZ0IG9mIGRpdmlzb3IuXG4gKiBAcGFyYW0ge051bWJlcn0gZGogUmlnaHQgb2YgZGl2aXNvci5cbiAqIEBwYXJhbSB7QXJyYXl9IFEgUXVvdGllbnQgYXJyYXkgKHplcm8gaW5pdGlhbGl6ZWQpLlxuICogQHBhcmFtIHtOdW1iZXJ9IFFpIExlZnQgb2YgcXVvdGllbnQuXG4gKiBAcGFyYW0ge051bWJlcn0gUWogUmlnaHQgb2YgcXVvdGllbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWRpdm1vZCAoIHIgLCBEICwgRGkgLCBEaiAsIGQgLCBkaSAsIGRqICwgUSAsIFFpICwgUWogKSB7XG5cblx0Y29uc3QgZG4gPSBkaiAtIGRpIDtcblxuXHRpZiAoIGRuID09PSAxICkge1xuXHRcdHJldHVybiBfaWRpdm1vZF9saW1iKCByICwgZFtkaV0gLCBEICwgRGkgLCBEaiAsIFEgLCBRaSApIDtcblx0fVxuXG5cdGVsc2UgaWYgKCBkbiA8IFRIUkVTSE9MRF9ESVZfREMgKSB7XG5cdFx0cmV0dXJuIF9pZGl2bW9kX3NjaG9vbGJvb2soIHIgLCBEICwgRGkgLCBEaiAsIGQgLCBkaSAsIGRqICwgUSAsIFFpICkgO1xuXHR9XG5cblx0ZWxzZSB7XG5cdFx0cmV0dXJuIF9pZGl2bW9kX2RjKCByICwgRCAsIERpICwgRGogLCBkICwgZGkgLCBkaiAsIFEgLCBRaSAsIFFqICkgO1xuXHR9XG5cbn1cbiJdfQ==