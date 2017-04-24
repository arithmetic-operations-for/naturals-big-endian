'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.slow_div = slow_div;

var _ = require('..');

var _2 = require('../..');

/**
 * Computes quotient and remainder of two big endian arrays.
 * <p>
 * Computes quotient and remainder of two big endian arrays
 * using long division algorithm (the one teached in
 * european primary schools).
 *
 * /!\ This algorithm modifies its first operand.
 *
 * HYP : q is at least as large as r
 *       b is not zero
 *
 * @param {int} x the radix
 * @param {array} r dividend and remainder
 * @param {int} ri r left
 * @param {int} rj r right
 * @param {array} b divisor
 * @param {int} bi b left
 * @param {int} bj b right
 * @param {array} q quotient, must be 0 initialized
 * @param {int} qi q left
 */

// /!\ There are implicit hypotheses
//     made on the size of the operands.
//     Should clarify.

function slow_div(x, r, ri, rj, b, bi, bj, q, qi) {

	var k,
	    t = ri + 1;

	do {

		// trim leading zeros
		//     - maybe could try to put this procedure inside the _sub loop
		//     - or assume that the number is trimed at the begining
		//       and put this statement at the end of the main loop
		while (ri < rj && r[ri] === 0) {
			++ri;
		} // search for a remainder block interval
		// greater than the divisor
		//     - maybe could try binary search on the _lt function
		//     for another implementation
		k = ri + 1;
		while (k <= rj && (0, _2._lt)(r, ri, k, b, bi, bj)) {
			++k;
		} // remainder smaller than divisor --> end
		if (k > rj) break;

		// divide current block interval by quotient
		do {

			// increment quotient block corresponding
			// to current ls block of remainder interval
			++q[qi + k - t];

			// subtract divisor from current remainder
			// block interval
			(0, _._sub)(x, r, ri, k, b, bi, bj, r, ri, k);
		} while (!(0, _2._lt)(r, ri, k, b, bi, bj));
	} while (true);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9zbG93X2Rpdi5qcyJdLCJuYW1lcyI6WyJzbG93X2RpdiIsIngiLCJyIiwicmkiLCJyaiIsImIiLCJiaSIsImJqIiwicSIsInFpIiwiayIsInQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBOEJnQkEsUSxHQUFBQSxROztBQTlCaEI7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTQSxRQUFULENBQW9CQyxDQUFwQixFQUF3QkMsQ0FBeEIsRUFBNEJDLEVBQTVCLEVBQWlDQyxFQUFqQyxFQUFzQ0MsQ0FBdEMsRUFBMENDLEVBQTFDLEVBQStDQyxFQUEvQyxFQUFvREMsQ0FBcEQsRUFBd0RDLEVBQXhELEVBQTZEOztBQUVuRSxLQUFJQyxDQUFKO0FBQUEsS0FBT0MsSUFBSVIsS0FBSyxDQUFoQjs7QUFFQSxJQUFHOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBT0EsS0FBS0MsRUFBTCxJQUFXRixFQUFFQyxFQUFGLE1BQVUsQ0FBNUI7QUFBK0IsS0FBRUEsRUFBRjtBQUEvQixHQU5FLENBUUY7QUFDQTtBQUNBO0FBQ0E7QUFDQU8sTUFBSVAsS0FBSyxDQUFUO0FBQ0EsU0FBT08sS0FBS04sRUFBTCxJQUFXLFlBQUlGLENBQUosRUFBT0MsRUFBUCxFQUFXTyxDQUFYLEVBQWNMLENBQWQsRUFBaUJDLEVBQWpCLEVBQXFCQyxFQUFyQixDQUFsQjtBQUE0QyxLQUFFRyxDQUFGO0FBQTVDLEdBYkUsQ0FlRjtBQUNBLE1BQUlBLElBQUlOLEVBQVIsRUFBWTs7QUFFWjtBQUNBLEtBQUU7O0FBRUQ7QUFDQTtBQUNBLEtBQUVJLEVBQUVDLEtBQUtDLENBQUwsR0FBU0MsQ0FBWCxDQUFGOztBQUVBO0FBQ0E7QUFDQSxlQUFLVixDQUFMLEVBQVFDLENBQVIsRUFBV0MsRUFBWCxFQUFlTyxDQUFmLEVBQWtCTCxDQUFsQixFQUFxQkMsRUFBckIsRUFBeUJDLEVBQXpCLEVBQTZCTCxDQUE3QixFQUFnQ0MsRUFBaEMsRUFBb0NPLENBQXBDO0FBRUEsR0FWRCxRQVVRLENBQUMsWUFBSVIsQ0FBSixFQUFPQyxFQUFQLEVBQVdPLENBQVgsRUFBY0wsQ0FBZCxFQUFpQkMsRUFBakIsRUFBcUJDLEVBQXJCLENBVlQ7QUFhQSxFQWhDRCxRQWdDUSxJQWhDUjtBQWtDQSIsImZpbGUiOiJzbG93X2Rpdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9zdWIgfSBmcm9tICcuLicgO1xuaW1wb3J0IHsgX2x0IH0gZnJvbSAnLi4vLi4nIDtcblxuLyoqXG4gKiBDb21wdXRlcyBxdW90aWVudCBhbmQgcmVtYWluZGVyIG9mIHR3byBiaWcgZW5kaWFuIGFycmF5cy5cbiAqIDxwPlxuICogQ29tcHV0ZXMgcXVvdGllbnQgYW5kIHJlbWFpbmRlciBvZiB0d28gYmlnIGVuZGlhbiBhcnJheXNcbiAqIHVzaW5nIGxvbmcgZGl2aXNpb24gYWxnb3JpdGhtICh0aGUgb25lIHRlYWNoZWQgaW5cbiAqIGV1cm9wZWFuIHByaW1hcnkgc2Nob29scykuXG4gKlxuICogLyFcXCBUaGlzIGFsZ29yaXRobSBtb2RpZmllcyBpdHMgZmlyc3Qgb3BlcmFuZC5cbiAqXG4gKiBIWVAgOiBxIGlzIGF0IGxlYXN0IGFzIGxhcmdlIGFzIHJcbiAqICAgICAgIGIgaXMgbm90IHplcm9cbiAqXG4gKiBAcGFyYW0ge2ludH0geCB0aGUgcmFkaXhcbiAqIEBwYXJhbSB7YXJyYXl9IHIgZGl2aWRlbmQgYW5kIHJlbWFpbmRlclxuICogQHBhcmFtIHtpbnR9IHJpIHIgbGVmdFxuICogQHBhcmFtIHtpbnR9IHJqIHIgcmlnaHRcbiAqIEBwYXJhbSB7YXJyYXl9IGIgZGl2aXNvclxuICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtpbnR9IGJqIGIgcmlnaHRcbiAqIEBwYXJhbSB7YXJyYXl9IHEgcXVvdGllbnQsIG11c3QgYmUgMCBpbml0aWFsaXplZFxuICogQHBhcmFtIHtpbnR9IHFpIHEgbGVmdFxuICovXG5cbi8vIC8hXFwgVGhlcmUgYXJlIGltcGxpY2l0IGh5cG90aGVzZXNcbi8vICAgICBtYWRlIG9uIHRoZSBzaXplIG9mIHRoZSBvcGVyYW5kcy5cbi8vICAgICBTaG91bGQgY2xhcmlmeS5cblxuZXhwb3J0IGZ1bmN0aW9uIHNsb3dfZGl2ICggeCAsIHIgLCByaSAsIHJqICwgYiAsIGJpICwgYmogLCBxICwgcWkgKSB7XG5cblx0dmFyIGssIHQgPSByaSArIDE7XG5cblx0ZG8ge1xuXG5cdFx0Ly8gdHJpbSBsZWFkaW5nIHplcm9zXG5cdFx0Ly8gICAgIC0gbWF5YmUgY291bGQgdHJ5IHRvIHB1dCB0aGlzIHByb2NlZHVyZSBpbnNpZGUgdGhlIF9zdWIgbG9vcFxuXHRcdC8vICAgICAtIG9yIGFzc3VtZSB0aGF0IHRoZSBudW1iZXIgaXMgdHJpbWVkIGF0IHRoZSBiZWdpbmluZ1xuXHRcdC8vICAgICAgIGFuZCBwdXQgdGhpcyBzdGF0ZW1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgbWFpbiBsb29wXG5cdFx0d2hpbGUgKHJpIDwgcmogJiYgcltyaV0gPT09IDApICsrcmk7XG5cblx0XHQvLyBzZWFyY2ggZm9yIGEgcmVtYWluZGVyIGJsb2NrIGludGVydmFsXG5cdFx0Ly8gZ3JlYXRlciB0aGFuIHRoZSBkaXZpc29yXG5cdFx0Ly8gICAgIC0gbWF5YmUgY291bGQgdHJ5IGJpbmFyeSBzZWFyY2ggb24gdGhlIF9sdCBmdW5jdGlvblxuXHRcdC8vICAgICBmb3IgYW5vdGhlciBpbXBsZW1lbnRhdGlvblxuXHRcdGsgPSByaSArIDE7XG5cdFx0d2hpbGUgKGsgPD0gcmogJiYgX2x0KHIsIHJpLCBrLCBiLCBiaSwgYmopKSArK2s7XG5cblx0XHQvLyByZW1haW5kZXIgc21hbGxlciB0aGFuIGRpdmlzb3IgLS0+IGVuZFxuXHRcdGlmIChrID4gcmopIGJyZWFrO1xuXG5cdFx0Ly8gZGl2aWRlIGN1cnJlbnQgYmxvY2sgaW50ZXJ2YWwgYnkgcXVvdGllbnRcblx0XHRkb3tcblxuXHRcdFx0Ly8gaW5jcmVtZW50IHF1b3RpZW50IGJsb2NrIGNvcnJlc3BvbmRpbmdcblx0XHRcdC8vIHRvIGN1cnJlbnQgbHMgYmxvY2sgb2YgcmVtYWluZGVyIGludGVydmFsXG5cdFx0XHQrK3FbcWkgKyBrIC0gdF07XG5cblx0XHRcdC8vIHN1YnRyYWN0IGRpdmlzb3IgZnJvbSBjdXJyZW50IHJlbWFpbmRlclxuXHRcdFx0Ly8gYmxvY2sgaW50ZXJ2YWxcblx0XHRcdF9zdWIoeCwgciwgcmksIGssIGIsIGJpLCBiaiwgciwgcmksIGspO1xuXG5cdFx0fSB3aGlsZSghX2x0KHIsIHJpLCBrLCBiLCBiaSwgYmopKTtcblxuXG5cdH0gd2hpbGUodHJ1ZSk7XG5cbn1cbiJdfQ==