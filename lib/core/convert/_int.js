'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._int = _int;
function _int(x) {

	if (x >= '0' && x <= '9') return x.charCodeAt(0) - 48;
	if (x >= 'A' && x <= 'Z') return x.charCodeAt(0) - 55;
	if (x >= 'a' && x <= 'z') return x.charCodeAt(0) - 87;

	throw 'invalid literal for _int: ' + x;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX2ludC5qcyJdLCJuYW1lcyI6WyJfaW50IiwieCIsImNoYXJDb2RlQXQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxJLEdBQUFBLEk7QUFBVCxTQUFTQSxJQUFULENBQWdCQyxDQUFoQixFQUFvQjs7QUFFMUIsS0FBS0EsS0FBSyxHQUFMLElBQVlBLEtBQUssR0FBdEIsRUFBNEIsT0FBT0EsRUFBRUMsVUFBRixDQUFjLENBQWQsSUFBb0IsRUFBM0I7QUFDNUIsS0FBS0QsS0FBSyxHQUFMLElBQVlBLEtBQUssR0FBdEIsRUFBNEIsT0FBT0EsRUFBRUMsVUFBRixDQUFjLENBQWQsSUFBb0IsRUFBM0I7QUFDNUIsS0FBS0QsS0FBSyxHQUFMLElBQVlBLEtBQUssR0FBdEIsRUFBNEIsT0FBT0EsRUFBRUMsVUFBRixDQUFjLENBQWQsSUFBb0IsRUFBM0I7O0FBRTVCLE9BQU0sK0JBQStCRCxDQUFyQztBQUVBIiwiZmlsZSI6Il9pbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBfaW50ICggeCApIHtcblxuXHRpZiAoIHggPj0gJzAnICYmIHggPD0gJzknICkgcmV0dXJuIHguY2hhckNvZGVBdCggMCApIC0gNDggO1xuXHRpZiAoIHggPj0gJ0EnICYmIHggPD0gJ1onICkgcmV0dXJuIHguY2hhckNvZGVBdCggMCApIC0gNTUgO1xuXHRpZiAoIHggPj0gJ2EnICYmIHggPD0gJ3onICkgcmV0dXJuIHguY2hhckNvZGVBdCggMCApIC0gODcgO1xuXG5cdHRocm93ICdpbnZhbGlkIGxpdGVyYWwgZm9yIF9pbnQ6ICcgKyB4IDtcblxufVxuIl19