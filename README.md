[js-integer-big-endian](http://aureooms.github.io/js-integer-big-endian)
==

Arbitrary precision arithmetic for integers in big endian order.

```js
integer.parse( 16 , 100 , 'ff' ) ; // [ 2 , 55 ]
integer.stringify( 100 , 16 , [ 2 , 55 ] ) ; // 'ff'
integer.translate( 10 , 16 , '255' ) ; // 'ff'
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-integer-big-endian.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-integer-big-endian/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-integer-big-endian.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-integer-big-endian)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-integer-big-endian.svg?style=flat)](http://bower.io/search/?q=aureooms-js-integer-big-endian)
[![Build Status](http://img.shields.io/travis/aureooms/js-integer-big-endian.svg?style=flat)](https://travis-ci.org/aureooms/js-integer-big-endian)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-integer-big-endian.svg?style=flat)](https://coveralls.io/r/aureooms/js-integer-big-endian)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-integer-big-endian.svg?style=flat)](https://david-dm.org/aureooms/js-integer-big-endian#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-integer-big-endian.svg?style=flat)](https://david-dm.org/aureooms/js-integer-big-endian#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-integer-big-endian.svg?style=flat)](https://codeclimate.com/github/aureooms/js-integer-big-endian)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-integer-big-endian.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-integer-big-endian)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-integer-big-endian.svg?style=flat)](https://github.com/aureooms/js-integer-big-endian/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-integer-big-endian.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-integer-big-endian)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-integer-big-endian
# or
jspm install npm:aureooms-js-integer-big-endian
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-integer-big-endian
```

### bower
```terminal
bower install aureooms-js-integer-big-endian
```

### ender
```terminal
ender add aureooms-js-integer-big-endian
```

### jam
```terminal
jam install aureooms-js-integer-big-endian
```

### spm
```terminal
spm install aureooms-js-integer-big-endian --save
```

### npm
```terminal
npm install aureooms-js-integer-big-endian --save
```

## Require
### jspm
```js
let integerbigendian = require( "github:aureooms/js-integer-big-endian" ) ;
// or
import integerbigendian from 'aureooms-js-integer-big-endian' ;
```
### duo
```js
let integerbigendian = require( "aureooms/js-integer-big-endian" ) ;
```

### component, ender, spm, npm
```js
let integerbigendian = require( "aureooms-js-integer-big-endian" ) ;
```

### bower
The script tag exposes the global variable `integerbigendian`.
```html
<script src="bower_components/aureooms-js-integer-big-endian/js/dist/integer-big-endian.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-integer-big-endian" ] , function ( integerbigendian ) { ... } ) ;
```

## Reference

 - [The GNU Multiple Precision Arithmetic Library](https://gmplib.org/)
 - https://gmplib.org/gmp-man-6.0.0a.pdf
 - https://en.wikipedia.org/wiki/Sch%C3%B6nhage%E2%80%93Strassen_algorithm
 - http://bioinfo.ict.ac.cn/~dbu/AlgorithmCourses/Lectures/Hasselstrom2003.pdf
