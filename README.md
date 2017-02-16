[@aureooms/js-integer-big-endian](https://aureooms.github.io/js-integer-big-endian)
==

<img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Big-Endian.svg" width="864">

Arbitrary precision arithmetic for integers in big endian order.
Twin project of [@aureooms/js-integer-little-endian](https://github.com/aureooms/js-integer-little-endian).

```js
integer.parse( 16 , 100 , 'ff' ) ; // [ 2 , 55 ]
integer.stringify( 100 , 16 , [ 2 , 55 ] ) ; // 'ff'
integer.translate( 10 , 16 , '255' ) ; // 'ff'
```

[![License](https://img.shields.io/github/license/aureooms/js-integer-big-endian.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-integer-big-endian/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-integer-big-endian.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-integer-big-endian)
[![Build Status](https://img.shields.io/travis/aureooms/js-integer-big-endian.svg?style=flat)](https://travis-ci.org/aureooms/js-integer-big-endian)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-integer-big-endian.svg?style=flat)](https://coveralls.io/r/aureooms/js-integer-big-endian)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-integer-big-endian.svg?style=flat)](https://david-dm.org/aureooms/js-integer-big-endian#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-integer-big-endian.svg?style=flat)](https://david-dm.org/aureooms/js-integer-big-endian#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-integer-big-endian.svg?style=flat)](https://codeclimate.com/github/aureooms/js-integer-big-endian)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-integer-big-endian.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-integer-big-endian)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-integer-big-endian.svg?style=flat)](https://github.com/aureooms/js-integer-big-endian/issues)
[![Documentation](https://aureooms.github.io/js-integer-big-endian/badge.svg)](https://aureooms.github.io/js-integer-big-endian/source.html)

## Reference

 - [The GNU Multiple Precision Arithmetic Library](https://gmplib.org/)
 - https://gmplib.org/gmp-man-6.0.0a.pdf
 - https://en.wikipedia.org/wiki/Sch%C3%B6nhage%E2%80%93Strassen_algorithm
 - http://bioinfo.ict.ac.cn/~dbu/AlgorithmCourses/Lectures/Hasselstrom2003.pdf
