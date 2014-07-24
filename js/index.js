var pkg = require('aureooms-node-package');

var fs  = require('fs');
var data = fs.readFileSync(pkg.config, 'utf8');
var ns = JSON.parse(data).ns;

var opt = {
	ns      : ns,
	src     : __dirname + '/src/',
	exports : module.exports,
	base    : 0
};

pkg.include(opt);