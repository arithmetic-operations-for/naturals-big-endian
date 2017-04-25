"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._jz = _jz;

/**
 * Returns true if number is 0.
 *
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 */

function _jz(a, ai, aj) {

  for (; ai < aj; ++ai) {
    if (a[ai] !== 0) return false;
  }return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbXBhcmUvX2p6LmpzIl0sIm5hbWVzIjpbIl9qeiIsImEiLCJhaSIsImFqIl0sIm1hcHBpbmdzIjoiOzs7OztRQVNnQkEsRyxHQUFBQSxHOztBQVJoQjs7Ozs7Ozs7QUFRTyxTQUFTQSxHQUFULENBQWVDLENBQWYsRUFBbUJDLEVBQW5CLEVBQXdCQyxFQUF4QixFQUE2Qjs7QUFFbkMsU0FBUUQsS0FBS0MsRUFBYixFQUFrQixFQUFFRCxFQUFwQjtBQUF5QixRQUFLRCxFQUFFQyxFQUFGLE1BQVUsQ0FBZixFQUFtQixPQUFPLEtBQVA7QUFBNUMsR0FFQSxPQUFPLElBQVA7QUFFQSIsImZpbGUiOiJfanouanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG51bWJlciBpcyAwLlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtpbnR9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtpbnR9IGFqIGEgcmlnaHRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2p6ICggYSAsIGFpICwgYWogKSB7XG5cblx0Zm9yICggOyBhaSA8IGFqIDsgKythaSApIGlmICggYVthaV0gIT09IDAgKSByZXR1cm4gZmFsc2UgO1xuXG5cdHJldHVybiB0cnVlIDtcblxufVxuIl19