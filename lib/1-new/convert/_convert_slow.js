"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._convert_slow = _convert_slow;


/**
 *
 * @param {Number} f the base to convert from
 * @param {Number} t the base to convert to
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

function _convert_slow(f, t, a, ai, aj, b, bi, bj) {

	var d = _build(f, t);
	var di = 0;
	var dj = d.length;
	var qi = 0;
	var qj = aj - ai;
	var q = _alloc(qj - qi);

	while (true) {

		_reset(q, qi, qj);

		_div(f, a, ai, aj, d, di, dj, q, qi, qj);

		--bj;
		var x = 0;

		for (var k = ai; k < aj; ++k) {
			x *= f;
			x += a[k];
		}

		b[bj] = x;

		if (_jz(q, qi, qj)) return;

		_copy(q, qi, qj, a, ai);
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0X3Nsb3cuanMiXSwibmFtZXMiOlsiX2NvbnZlcnRfc2xvdyIsImYiLCJ0IiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImQiLCJfYnVpbGQiLCJkaSIsImRqIiwibGVuZ3RoIiwicWkiLCJxaiIsInEiLCJfYWxsb2MiLCJfcmVzZXQiLCJfZGl2IiwieCIsImsiLCJfanoiLCJfY29weSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFjZ0JBLGEsR0FBQUEsYTs7O0FBWmhCOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSxhQUFULENBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsRUFBaUNDLENBQWpDLEVBQXFDQyxFQUFyQyxFQUEwQ0MsRUFBMUMsRUFBK0NDLENBQS9DLEVBQW1EQyxFQUFuRCxFQUF3REMsRUFBeEQsRUFBNkQ7O0FBRW5FLEtBQU1DLElBQUlDLE9BQVFULENBQVIsRUFBWUMsQ0FBWixDQUFWO0FBQ0EsS0FBTVMsS0FBSyxDQUFYO0FBQ0EsS0FBTUMsS0FBS0gsRUFBRUksTUFBYjtBQUNBLEtBQU1DLEtBQUssQ0FBWDtBQUNBLEtBQU1DLEtBQUtWLEtBQUtELEVBQWhCO0FBQ0EsS0FBTVksSUFBSUMsT0FBUUYsS0FBS0QsRUFBYixDQUFWOztBQUVBLFFBQVEsSUFBUixFQUFlOztBQUVkSSxTQUFRRixDQUFSLEVBQVlGLEVBQVosRUFBaUJDLEVBQWpCOztBQUVBSSxPQUFNbEIsQ0FBTixFQUFVRSxDQUFWLEVBQWNDLEVBQWQsRUFBbUJDLEVBQW5CLEVBQXdCSSxDQUF4QixFQUE0QkUsRUFBNUIsRUFBaUNDLEVBQWpDLEVBQXNDSSxDQUF0QyxFQUEwQ0YsRUFBMUMsRUFBK0NDLEVBQS9DOztBQUVBLElBQUVQLEVBQUY7QUFDQSxNQUFJWSxJQUFJLENBQVI7O0FBRUEsT0FBTSxJQUFJQyxJQUFJakIsRUFBZCxFQUFtQmlCLElBQUloQixFQUF2QixFQUE0QixFQUFFZ0IsQ0FBOUIsRUFBa0M7QUFDakNELFFBQUtuQixDQUFMO0FBQ0FtQixRQUFLakIsRUFBRWtCLENBQUYsQ0FBTDtBQUNBOztBQUVEZixJQUFFRSxFQUFGLElBQVFZLENBQVI7O0FBRUEsTUFBS0UsSUFBS04sQ0FBTCxFQUFTRixFQUFULEVBQWNDLEVBQWQsQ0FBTCxFQUEwQjs7QUFFMUJRLFFBQU9QLENBQVAsRUFBV0YsRUFBWCxFQUFnQkMsRUFBaEIsRUFBcUJaLENBQXJCLEVBQXlCQyxFQUF6QjtBQUVBO0FBRUQiLCJmaWxlIjoiX2NvbnZlcnRfc2xvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gZiB0aGUgYmFzZSB0byBjb252ZXJ0IGZyb21cbiAqIEBwYXJhbSB7TnVtYmVyfSB0IHRoZSBiYXNlIHRvIGNvbnZlcnQgdG9cbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIHN0YXJ0IG9mZnNldCBpbiB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWogZW5kIG9mZnNldCBpbiB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBiIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIHN0YXJ0IG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBlbmQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udmVydF9zbG93ICggZiAsIHQgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkge1xuXG5cdGNvbnN0IGQgPSBfYnVpbGQoIGYgLCB0ICkgO1xuXHRjb25zdCBkaSA9IDAgO1xuXHRjb25zdCBkaiA9IGQubGVuZ3RoIDtcblx0Y29uc3QgcWkgPSAwIDtcblx0Y29uc3QgcWogPSBhaiAtIGFpIDtcblx0Y29uc3QgcSA9IF9hbGxvYyggcWogLSBxaSApIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRfcmVzZXQoIHEgLCBxaSAsIHFqICkgO1xuXG5cdFx0X2RpdiggZiAsIGEgLCBhaSAsIGFqICwgZCAsIGRpICwgZGogLCBxICwgcWkgLCBxaiApIDtcblxuXHRcdC0tYmogO1xuXHRcdGxldCB4ID0gMCA7XG5cblx0XHRmb3IgKCBsZXQgayA9IGFpIDsgayA8IGFqIDsgKytrICkge1xuXHRcdFx0eCAqPSBmIDtcblx0XHRcdHggKz0gYVtrXSA7XG5cdFx0fVxuXG5cdFx0Yltial0gPSB4IDtcblxuXHRcdGlmICggX2p6KCBxICwgcWkgLCBxaiApICkgcmV0dXJuIDtcblxuXHRcdF9jb3B5KCBxICwgcWkgLCBxaiAsIGEgLCBhaSApIDtcblxuXHR9XG5cbn1cbiJdfQ==