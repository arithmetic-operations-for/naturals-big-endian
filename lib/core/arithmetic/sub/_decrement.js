"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._decrement = _decrement;

/**
 * Subtracts 1 from a big endian array.
 *
 * @param {Number} r radix
 * @param {Array} a first operand
 * @param {Number} ai a left
 * @param {Number} aj a right
 */
function _decrement(r, a, ai, aj) {

  while (--aj >= ai) {

    if (a[aj] > 0) {
      --a[aj];
      return;
    }

    a[aj] = r - 1;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2FyaXRobWV0aWMvc3ViL19kZWNyZW1lbnQuanMiXSwibmFtZXMiOlsiX2RlY3JlbWVudCIsInIiLCJhIiwiYWkiLCJhaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLFUsR0FBQUEsVTs7QUFSaEI7Ozs7Ozs7O0FBUU8sU0FBU0EsVUFBVCxDQUFzQkMsQ0FBdEIsRUFBMEJDLENBQTFCLEVBQThCQyxFQUE5QixFQUFtQ0MsRUFBbkMsRUFBd0M7O0FBRTlDLFNBQVEsRUFBRUEsRUFBRixJQUFRRCxFQUFoQixFQUFxQjs7QUFFcEIsUUFBS0QsRUFBRUUsRUFBRixJQUFRLENBQWIsRUFBaUI7QUFDaEIsUUFBRUYsRUFBRUUsRUFBRixDQUFGO0FBQ0E7QUFDQTs7QUFFREYsTUFBRUUsRUFBRixJQUFRSCxJQUFJLENBQVo7QUFFQTtBQUVEIiwiZmlsZSI6Il9kZWNyZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogU3VidHJhY3RzIDEgZnJvbSBhIGJpZyBlbmRpYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgcmFkaXhcbiAqIEBwYXJhbSB7QXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIGEgbGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGEgcmlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9kZWNyZW1lbnQgKCByICwgYSAsIGFpICwgYWogKSB7XG5cblx0d2hpbGUgKCAtLWFqID49IGFpICkge1xuXG5cdFx0aWYgKCBhW2FqXSA+IDAgKSB7XG5cdFx0XHQtLWFbYWpdIDtcblx0XHRcdHJldHVybiA7XG5cdFx0fVxuXG5cdFx0YVthal0gPSByIC0gMSA7XG5cblx0fVxuXG59XG4iXX0=