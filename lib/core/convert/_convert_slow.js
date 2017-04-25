'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._convert_slow = _convert_slow;

var _array = require('../array');

var _api = require('../../api');

var _compare = require('../compare');

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

	var d = (0, _array._build)(f, t);
	var di = 0;
	var dj = d.length;
	var qi = 0;
	var qj = aj - ai;
	var q = (0, _array._alloc)(qj - qi);

	while (true) {

		(0, _array._reset)(q, qi, qj);

		(0, _api._div)(f, a, ai, aj, d, di, dj, q, qi, qj);

		--bj;
		var x = 0;

		for (var k = ai; k < aj; ++k) {
			x *= f;
			x += a[k];
		}

		b[bj] = x;

		if ((0, _compare._jz)(q, qi, qj)) return;

		(0, _array._copy)(q, qi, qj, a, ai);
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2NvbnZlcnRfc2xvdy5qcyJdLCJuYW1lcyI6WyJfY29udmVydF9zbG93IiwiZiIsInQiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwiZCIsImRpIiwiZGoiLCJsZW5ndGgiLCJxaSIsInFqIiwicSIsIngiLCJrIl0sIm1hcHBpbmdzIjoiOzs7OztRQWdCZ0JBLGEsR0FBQUEsYTs7QUFoQmhCOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSxhQUFULENBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsRUFBaUNDLENBQWpDLEVBQXFDQyxFQUFyQyxFQUEwQ0MsRUFBMUMsRUFBK0NDLENBQS9DLEVBQW1EQyxFQUFuRCxFQUF3REMsRUFBeEQsRUFBNkQ7O0FBRW5FLEtBQU1DLElBQUksbUJBQVFSLENBQVIsRUFBWUMsQ0FBWixDQUFWO0FBQ0EsS0FBTVEsS0FBSyxDQUFYO0FBQ0EsS0FBTUMsS0FBS0YsRUFBRUcsTUFBYjtBQUNBLEtBQU1DLEtBQUssQ0FBWDtBQUNBLEtBQU1DLEtBQUtULEtBQUtELEVBQWhCO0FBQ0EsS0FBTVcsSUFBSSxtQkFBUUQsS0FBS0QsRUFBYixDQUFWOztBQUVBLFFBQVEsSUFBUixFQUFlOztBQUVkLHFCQUFRRSxDQUFSLEVBQVlGLEVBQVosRUFBaUJDLEVBQWpCOztBQUVBLGlCQUFNYixDQUFOLEVBQVVFLENBQVYsRUFBY0MsRUFBZCxFQUFtQkMsRUFBbkIsRUFBd0JJLENBQXhCLEVBQTRCQyxFQUE1QixFQUFpQ0MsRUFBakMsRUFBc0NJLENBQXRDLEVBQTBDRixFQUExQyxFQUErQ0MsRUFBL0M7O0FBRUEsSUFBRU4sRUFBRjtBQUNBLE1BQUlRLElBQUksQ0FBUjs7QUFFQSxPQUFNLElBQUlDLElBQUliLEVBQWQsRUFBbUJhLElBQUlaLEVBQXZCLEVBQTRCLEVBQUVZLENBQTlCLEVBQWtDO0FBQ2pDRCxRQUFLZixDQUFMO0FBQ0FlLFFBQUtiLEVBQUVjLENBQUYsQ0FBTDtBQUNBOztBQUVEWCxJQUFFRSxFQUFGLElBQVFRLENBQVI7O0FBRUEsTUFBSyxrQkFBS0QsQ0FBTCxFQUFTRixFQUFULEVBQWNDLEVBQWQsQ0FBTCxFQUEwQjs7QUFFMUIsb0JBQU9DLENBQVAsRUFBV0YsRUFBWCxFQUFnQkMsRUFBaEIsRUFBcUJYLENBQXJCLEVBQXlCQyxFQUF6QjtBQUVBO0FBRUQiLCJmaWxlIjoiX2NvbnZlcnRfc2xvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9idWlsZCAsIF9hbGxvYyAsIF9yZXNldCAsIF9jb3B5IH0gZnJvbSAnLi4vYXJyYXknIDtcbmltcG9ydCB7IF9kaXYgfSBmcm9tICcuLi8uLi9hcGknIDtcbmltcG9ydCB7IF9qeiB9IGZyb20gJy4uL2NvbXBhcmUnIDtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGYgdGhlIGJhc2UgdG8gY29udmVydCBmcm9tXG4gKiBAcGFyYW0ge051bWJlcn0gdCB0aGUgYmFzZSB0byBjb252ZXJ0IHRvXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBzdGFydCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGVuZCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gYiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBzdGFydCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmogZW5kIG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZlcnRfc2xvdyAoIGYgLCB0ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIHtcblxuXHRjb25zdCBkID0gX2J1aWxkKCBmICwgdCApIDtcblx0Y29uc3QgZGkgPSAwIDtcblx0Y29uc3QgZGogPSBkLmxlbmd0aCA7XG5cdGNvbnN0IHFpID0gMCA7XG5cdGNvbnN0IHFqID0gYWogLSBhaSA7XG5cdGNvbnN0IHEgPSBfYWxsb2MoIHFqIC0gcWkgKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0X3Jlc2V0KCBxICwgcWkgLCBxaiApIDtcblxuXHRcdF9kaXYoIGYgLCBhICwgYWkgLCBhaiAsIGQgLCBkaSAsIGRqICwgcSAsIHFpICwgcWogKSA7XG5cblx0XHQtLWJqIDtcblx0XHRsZXQgeCA9IDAgO1xuXG5cdFx0Zm9yICggbGV0IGsgPSBhaSA7IGsgPCBhaiA7ICsrayApIHtcblx0XHRcdHggKj0gZiA7XG5cdFx0XHR4ICs9IGFba10gO1xuXHRcdH1cblxuXHRcdGJbYmpdID0geCA7XG5cblx0XHRpZiAoIF9qeiggcSAsIHFpICwgcWogKSApIHJldHVybiA7XG5cblx0XHRfY29weSggcSAsIHFpICwgcWogLCBhICwgYWkgKSA7XG5cblx0fVxuXG59XG4iXX0=