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

    ++qi;++Di;
  }

  D[Dj - 1] = tmp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvZGl2L19pZGl2bW9kX2xpbWJfd2l0aF9wcmVmaXguanMiXSwibmFtZXMiOlsiX2lkaXZtb2RfbGltYl93aXRoX3ByZWZpeCIsInIiLCJ0bXAiLCJkIiwiRCIsIkRpIiwiRGoiLCJRIiwiUWkiLCJxaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFrQmdCQSx5QixHQUFBQSx5QjtBQWxCaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCTyxTQUFTQSx5QkFBVCxDQUFxQ0MsQ0FBckMsRUFBeUNDLEdBQXpDLEVBQStDQyxDQUEvQyxFQUFtREMsQ0FBbkQsRUFBdURDLEVBQXZELEVBQTREQyxFQUE1RCxFQUFpRUMsQ0FBakUsRUFBcUVDLEVBQXJFLEVBQTBFOztBQUVoRixTQUFRSCxLQUFLQyxFQUFiLEVBQWtCOztBQUVqQkosV0FBT0QsQ0FBUCxDQUFXQyxPQUFPRSxFQUFFQyxFQUFGLENBQVA7O0FBRVhFLE1BQUVDLEVBQUYsSUFBUU4sTUFBTUMsQ0FBTixHQUFVLENBQWxCO0FBQ0FELFdBQU9DLENBQVA7QUFDQUMsTUFBRUMsRUFBRixJQUFRLENBQVI7O0FBRUEsTUFBRUksRUFBRixDQUFPLEVBQUVKLEVBQUY7QUFFUDs7QUFFREQsSUFBRUUsS0FBRyxDQUFMLElBQVVKLEdBQVY7QUFFQSIsImZpbGUiOiJfaWRpdm1vZF9saW1iX3dpdGhfcHJlZml4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEaXZpZGVzIGEgYmlnIGVuZGlhbiBudW1iZXIgYnkgYSBzaW5nbGUgbGltYiBudW1iZXIuXG4gKiBDYW4gb25seSB3b3JrIHdpdGggbGltYnMgb2Ygc2l6ZSBhdCBtb3N0IHNxcnQoIDJeNTMgKS5cbiAqIEFsbG93cyB0byBwcmVmaXggdGhlIGRpdmlkZW5kIHdpdGggYW4gaW50ZXJtZWRpYXRlIHJlbWFpbmRlci5cbiAqXG4gKiBJbnB1dFxuICogLS0tLS1cbiAqICAtIHxRfCA9IHxEfFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSByIFRoZSByYWRpeC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0bXAgSW50ZXJtZWRpYXRlIHJlbWFpbmRlciAoTVVTVCBiZSA8Y29kZT48IGQ8L2NvZGU+KS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBkIFRoZSBkaXZpc29yLlxuICogQHBhcmFtIHtBcnJheX0gRCBUaGUgZGl2aWRlbmQuXG4gKiBAcGFyYW0ge051bWJlcn0gRGkgTGVmdCBvZiBkaXZpZGVuZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBEaiBSaWdodCBvZiBkaXZpZGVuZC5cbiAqIEBwYXJhbSB7QXJyYXl9IFEgVGhlIHF1b3RpZW50LlxuICogQHBhcmFtIHtOdW1iZXJ9IFFpIExlZnQgb2YgcXVvdGllbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWRpdm1vZF9saW1iX3dpdGhfcHJlZml4ICggciAsIHRtcCAsIGQgLCBEICwgRGkgLCBEaiAsIFEgLCBRaSApIHtcblxuXHR3aGlsZSAoIERpIDwgRGogKSB7XG5cblx0XHR0bXAgKj0gciA7IHRtcCArPSBEW0RpXSA7XG5cblx0XHRRW1FpXSA9IHRtcCAvIGQgfCAwIDtcblx0XHR0bXAgJT0gZCA7XG5cdFx0RFtEaV0gPSAwIDtcblxuXHRcdCsrcWkgOyArK0RpIDtcblxuXHR9XG5cblx0RFtEai0xXSA9IHRtcCA7XG5cbn1cbiJdfQ==