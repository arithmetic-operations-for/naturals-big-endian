'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._div_limb = _div_limb;

var _ = require('.');

/**
 *
 * Divides a big endian number by a single limb number.
 * Can only work with limbs of size at most sqrt( 2^53 ).
 *
 * r <= x
 */

function _div_limb(r, z, a, ai, aj, q, qi) {

  (0, _._div_limb_partial)(r, 0, z, a, ai, aj, q, qi);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fZGl2X2xpbWIuanMiXSwibmFtZXMiOlsiX2Rpdl9saW1iIiwiciIsInoiLCJhIiwiYWkiLCJhaiIsInEiLCJxaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFVZ0JBLFMsR0FBQUEsUzs7QUFWaEI7O0FBRUE7Ozs7Ozs7O0FBUU8sU0FBU0EsU0FBVCxDQUFxQkMsQ0FBckIsRUFBeUJDLENBQXpCLEVBQTZCQyxDQUE3QixFQUFpQ0MsRUFBakMsRUFBc0NDLEVBQXRDLEVBQTJDQyxDQUEzQyxFQUErQ0MsRUFBL0MsRUFBb0Q7O0FBRTFELDJCQUFtQk4sQ0FBbkIsRUFBdUIsQ0FBdkIsRUFBMkJDLENBQTNCLEVBQStCQyxDQUEvQixFQUFtQ0MsRUFBbkMsRUFBd0NDLEVBQXhDLEVBQTZDQyxDQUE3QyxFQUFpREMsRUFBakQ7QUFFQSIsImZpbGUiOiJfZGl2X2xpbWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGl2X2xpbWJfcGFydGlhbCB9IGZyb20gJy4nIDtcblxuLyoqXG4gKlxuICogRGl2aWRlcyBhIGJpZyBlbmRpYW4gbnVtYmVyIGJ5IGEgc2luZ2xlIGxpbWIgbnVtYmVyLlxuICogQ2FuIG9ubHkgd29yayB3aXRoIGxpbWJzIG9mIHNpemUgYXQgbW9zdCBzcXJ0KCAyXjUzICkuXG4gKlxuICogciA8PSB4XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9kaXZfbGltYiAoIHIgLCB6ICwgYSAsIGFpICwgYWogLCBxICwgcWkgKSB7XG5cblx0X2Rpdl9saW1iX3BhcnRpYWwoIHIgLCAwICwgeiAsIGEgLCBhaSAsIGFqICwgcSAsIHFpICkgO1xuXG59XG4iXX0=