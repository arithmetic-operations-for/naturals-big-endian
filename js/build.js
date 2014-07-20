var pkg = require('aureooms-node-package');
var ns  = require('./src/ns.js').ns;


var opt = {
	ns : ns,
	src : 'js/src/',
	out : 'js/dist/'
};

pkg.build(opt);
