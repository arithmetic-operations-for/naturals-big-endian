
var pkg = require('aureooms-node-package');
var ns = require('../../js/index.js').ns;

pkg.test(ns, [__dirname, '..', '..', 'js', 'dist', 'alu.js'], [__dirname]);