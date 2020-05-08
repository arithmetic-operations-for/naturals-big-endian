[@aureooms/js-integer-big-endian](https://aureooms.github.io/js-integer-big-endian)
==

<img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Big-Endian.svg" width="864">

Arbitrary precision arithmetic for integers in big endian order.
See [docs](https://aureooms.github.io/js-integer-big-endian).
Twin project of [@aureooms/js-integer-little-endian](https://github.com/aureooms/js-integer-little-endian).

```js
integer.parse( 16 , 100 , 'ff' ) ; // [ 2 , 55 ]
integer.stringify( 100 , 16 , [ 2 , 55 ] ) ; // 'ff'
integer.translate( 10 , 16 , '255' ) ; // 'ff'
```

[![License](https://img.shields.io/github/license/aureooms/js-integer-big-endian.svg)](https://raw.githubusercontent.com/aureooms/js-integer-big-endian/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-integer-big-endian.svg)](https://www.npmjs.org/package/@aureooms/js-integer-big-endian)
[![Build](https://img.shields.io/travis/aureooms/js-integer-big-endian/master.svg)](https://travis-ci.org/aureooms/js-integer-big-endian/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-integer-big-endian.svg)](https://david-dm.org/aureooms/js-integer-big-endian)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-integer-big-endian.svg)](https://david-dm.org/aureooms/js-integer-big-endian?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-integer-big-endian.svg)](https://github.com/aureooms/js-integer-big-endian/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-integer-big-endian.svg)](https://www.npmjs.org/package/@aureooms/js-integer-big-endian)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-integer-big-endian.svg)](https://codeclimate.com/github/aureooms/js-integer-big-endian/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-integer-big-endian.svg)](https://codeclimate.com/github/aureooms/js-integer-big-endian/trends/churn)
[![Code coverage (alls)](https://img.shields.io/coveralls/github/aureooms/js-integer-big-endian/master.svg)](https://coveralls.io/github/aureooms/js-integer-big-endian)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-integer-big-endian.svg)](https://codeclimate.com/github/aureooms/js-integer-big-endian/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-integer-big-endian/badge.svg)](https://aureooms.github.io/js-integer-big-endian/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-integer-big-endian)](https://bundlephobia.com/result?p=@aureooms/js-integer-big-endian)

## Reference

 - [The GNU Multiple Precision Arithmetic Library](https://gmplib.org/)
 - https://gmplib.org/gmp-man-6.0.0a.pdf
 - https://en.wikipedia.org/wiki/Sch%C3%B6nhage%E2%80%93Strassen_algorithm
 - http://bioinfo.ict.ac.cn/~dbu/AlgorithmCourses/Lectures/Hasselstrom2003.pdf
