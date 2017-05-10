'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._divmod = _divmod;

var _core = require('../core');

var _idivmod2 = require('./_idivmod');

/**
 * Computes the quotient and remainder of two numbers. Uses the most
 * appropriate algorithms depending on the size of the operands. The remainder
 * is written to the dividend array. There are a few assumptions made on the
 * input.
 *
 * Input
 * -----
 *  - No leading zeros in D or Q.
 *  - |D| = |Q| = |R|
 *
 * @param {Number} r The base to work with.
 * @param {Array} D Dividend array.
 * @param {Number} Di Left of dividend.
 * @param {Number} Dj Right of dividend.
 * @param {Array} d Divisor array.
 * @param {Number} dj Left of divisor.
 * @param {Number} dj Right of divisor.
 * @param {Array} Q Quotient array.
 * @param {Number} Qi Left of quotient.
 * @param {Number} Qj Right of quotient.
 * @param {Array} R Remainder array.
 * @param {Number} Ri Left of remainder.
 * @param {Number} Rj Right of remainder.
 */
function _divmod(r, D, Di, Dj, d, di, dj, Q, Qi, Qj, R, Ri, Rj) {

  (0, _core._copy)(D, Di, Dj, R, Rj - (Dj - Di));

  (0, _idivmod2._idivmod)(r, R, Ri, Rj, d, di, dj, Q, Qi, Qj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvX2Rpdm1vZC5qcyJdLCJuYW1lcyI6WyJfZGl2bW9kIiwiciIsIkQiLCJEaSIsIkRqIiwiZCIsImRpIiwiZGoiLCJRIiwiUWkiLCJRaiIsIlIiLCJSaSIsIlJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQTRCZ0JBLE8sR0FBQUEsTzs7QUE1QmhCOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJPLFNBQVNBLE9BQVQsQ0FBbUJDLENBQW5CLEVBQXVCQyxDQUF2QixFQUEyQkMsRUFBM0IsRUFBZ0NDLEVBQWhDLEVBQXFDQyxDQUFyQyxFQUF5Q0MsRUFBekMsRUFBOENDLEVBQTlDLEVBQW1EQyxDQUFuRCxFQUF1REMsRUFBdkQsRUFBNERDLEVBQTVELEVBQWlFQyxDQUFqRSxFQUFxRUMsRUFBckUsRUFBMEVDLEVBQTFFLEVBQStFOztBQUVyRixtQkFBT1gsQ0FBUCxFQUFXQyxFQUFYLEVBQWdCQyxFQUFoQixFQUFxQk8sQ0FBckIsRUFBeUJFLE1BQU1ULEtBQUtELEVBQVgsQ0FBekI7O0FBRUEsMEJBQVVGLENBQVYsRUFBY1UsQ0FBZCxFQUFrQkMsRUFBbEIsRUFBdUJDLEVBQXZCLEVBQTRCUixDQUE1QixFQUFnQ0MsRUFBaEMsRUFBcUNDLEVBQXJDLEVBQTBDQyxDQUExQyxFQUE4Q0MsRUFBOUMsRUFBbURDLEVBQW5EO0FBRUEiLCJmaWxlIjoiX2Rpdm1vZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9jb3B5IH0gZnJvbSAnLi4vY29yZScgO1xuaW1wb3J0IHsgX2lkaXZtb2QgfSBmcm9tICcuL19pZGl2bW9kJyA7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHF1b3RpZW50IGFuZCByZW1haW5kZXIgb2YgdHdvIG51bWJlcnMuIFVzZXMgdGhlIG1vc3RcbiAqIGFwcHJvcHJpYXRlIGFsZ29yaXRobXMgZGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIHRoZSBvcGVyYW5kcy4gVGhlIHJlbWFpbmRlclxuICogaXMgd3JpdHRlbiB0byB0aGUgZGl2aWRlbmQgYXJyYXkuIFRoZXJlIGFyZSBhIGZldyBhc3N1bXB0aW9ucyBtYWRlIG9uIHRoZVxuICogaW5wdXQuXG4gKlxuICogSW5wdXRcbiAqIC0tLS0tXG4gKiAgLSBObyBsZWFkaW5nIHplcm9zIGluIEQgb3IgUS5cbiAqICAtIHxEfCA9IHxRfCA9IHxSfFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSByIFRoZSBiYXNlIHRvIHdvcmsgd2l0aC5cbiAqIEBwYXJhbSB7QXJyYXl9IEQgRGl2aWRlbmQgYXJyYXkuXG4gKiBAcGFyYW0ge051bWJlcn0gRGkgTGVmdCBvZiBkaXZpZGVuZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBEaiBSaWdodCBvZiBkaXZpZGVuZC5cbiAqIEBwYXJhbSB7QXJyYXl9IGQgRGl2aXNvciBhcnJheS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBkaiBMZWZ0IG9mIGRpdmlzb3IuXG4gKiBAcGFyYW0ge051bWJlcn0gZGogUmlnaHQgb2YgZGl2aXNvci5cbiAqIEBwYXJhbSB7QXJyYXl9IFEgUXVvdGllbnQgYXJyYXkuXG4gKiBAcGFyYW0ge051bWJlcn0gUWkgTGVmdCBvZiBxdW90aWVudC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBRaiBSaWdodCBvZiBxdW90aWVudC5cbiAqIEBwYXJhbSB7QXJyYXl9IFIgUmVtYWluZGVyIGFycmF5LlxuICogQHBhcmFtIHtOdW1iZXJ9IFJpIExlZnQgb2YgcmVtYWluZGVyLlxuICogQHBhcmFtIHtOdW1iZXJ9IFJqIFJpZ2h0IG9mIHJlbWFpbmRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9kaXZtb2QgKCByICwgRCAsIERpICwgRGogLCBkICwgZGkgLCBkaiAsIFEgLCBRaSAsIFFqICwgUiAsIFJpICwgUmogKSB7XG5cblx0X2NvcHkoIEQgLCBEaSAsIERqICwgUiAsIFJqIC0gKERqIC0gRGkpICkgO1xuXG5cdF9pZGl2bW9kKCByICwgUiAsIFJpICwgUmogLCBkICwgZGkgLCBkaiAsIFEgLCBRaSAsIFFqICkgO1xuXG59XG4iXX0=