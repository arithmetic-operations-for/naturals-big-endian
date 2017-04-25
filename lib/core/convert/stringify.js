'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.stringify = stringify;

var _ = require('.');

function stringify(f, t, a, ai, aj) {

	if (t > 36) throw 't > 36 not implemented';

	var b = (0, _.convert)(f, t, a, ai, aj);

	return (0, _._to_string)(b);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvc3RyaW5naWZ5LmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeSIsImYiLCJ0IiwiYSIsImFpIiwiYWoiLCJiIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsUyxHQUFBQSxTOztBQUZoQjs7QUFFTyxTQUFTQSxTQUFULENBQXFCQyxDQUFyQixFQUF5QkMsQ0FBekIsRUFBNkJDLENBQTdCLEVBQWlDQyxFQUFqQyxFQUFzQ0MsRUFBdEMsRUFBMkM7O0FBRWpELEtBQUtILElBQUksRUFBVCxFQUFjLE1BQU0sd0JBQU47O0FBRWQsS0FBTUksSUFBSSxlQUFTTCxDQUFULEVBQWFDLENBQWIsRUFBaUJDLENBQWpCLEVBQXFCQyxFQUFyQixFQUEwQkMsRUFBMUIsQ0FBVjs7QUFFQSxRQUFPLGtCQUFZQyxDQUFaLENBQVA7QUFFQSIsImZpbGUiOiJzdHJpbmdpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb252ZXJ0ICwgX3RvX3N0cmluZyB9IGZyb20gJy4nIDtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSAoIGYgLCB0ICwgYSAsIGFpICwgYWogKSB7XG5cblx0aWYgKCB0ID4gMzYgKSB0aHJvdyAndCA+IDM2IG5vdCBpbXBsZW1lbnRlZCcgO1xuXG5cdGNvbnN0IGIgPSBjb252ZXJ0KCBmICwgdCAsIGEgLCBhaSAsIGFqICkgO1xuXG5cdHJldHVybiBfdG9fc3RyaW5nKCBiICkgO1xuXG59XG4iXX0=