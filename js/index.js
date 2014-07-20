var pkg = require('aureooms-node-package');
var ns  = require('./src/ns.js').ns;


var opt = {
	ns      : ns,
	src     : __dirname + '/src/',
	exports : module.exports,
	base    : 0
};

pkg.include(opt);