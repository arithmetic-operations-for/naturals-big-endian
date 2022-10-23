:elephant: [@arithmetic-operations-for/naturals-big-endian](https://arithmetic-operations-for.github.io/naturals-big-endian)
==

<img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Big-Endian.svg" width="864">

Arbitrary precision arithmetic for integers in big endian order.
See [docs](https://arithmetic-operations-for.github.io/naturals-big-endian).
Twin project of [@arithmetic-operations-for/naturals-little-endian](https://github.com/arithmetic-operations-for/naturals-big-endian).

```js
import {parse, stringify, translate} from '@arithmetic-operations-for/naturals-big-endian';
parse(16, 100, 'ff'); // [ 2 , 55 ]
stringify(100, 16, [2, 55]); // 'ff'
translate(10, 16, '255'); // 'ff'
```

[![License](https://img.shields.io/github/license/arithmetic-operations-for/naturals-big-endian.svg)](https://raw.githubusercontent.com/arithmetic-operations-for/naturals-big-endian/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@arithmetic-operations-for/naturals-big-endian.svg)](https://www.npmjs.org/package/@arithmetic-operations-for/naturals-big-endian)
[![Tests](https://img.shields.io/github/workflow/status/arithmetic-operations-for/naturals-big-endian/ci?event=push&label=tests)](https://github.com/arithmetic-operations-for/naturals-big-endian/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/arithmetic-operations-for/naturals-big-endian.svg)](https://github.com/arithmetic-operations-for/naturals-big-endian/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/arithmetic-operations-for/naturals-big-endian.svg)](https://github.com/arithmetic-operations-for/naturals-big-endian/issues)
[![Downloads](https://img.shields.io/npm/dm/@arithmetic-operations-for/naturals-big-endian.svg)](https://www.npmjs.org/package/@arithmetic-operations-for/naturals-big-endian)

[![Code issues](https://img.shields.io/codeclimate/issues/arithmetic-operations-for/naturals-big-endian.svg)](https://codeclimate.com/github/arithmetic-operations-for/naturals-big-endian/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/arithmetic-operations-for/naturals-big-endian.svg)](https://codeclimate.com/github/arithmetic-operations-for/naturals-big-endian/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/arithmetic-operations-for/naturals-big-endian/main.svg)](https://codecov.io/gh/arithmetic-operations-for/naturals-big-endian)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/arithmetic-operations-for/naturals-big-endian.svg)](https://codeclimate.com/github/arithmetic-operations-for/naturals-big-endian/trends/technical_debt)
[![Documentation](https://arithmetic-operations-for.github.io/naturals-big-endian/badge.svg)](https://arithmetic-operations-for.github.io/naturals-big-endian/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@arithmetic-operations-for/naturals-big-endian)](https://bundlephobia.com/result?p=@arithmetic-operations-for/naturals-big-endian)

## :scroll: Reference

 - [The GNU Multiple Precision Arithmetic Library](https://gmplib.org/)
 - https://gmplib.org/gmp-man-6.0.0a.pdf
 - https://en.wikipedia.org/wiki/Sch%C3%B6nhage%E2%80%93Strassen_algorithm
 - http://bioinfo.ict.ac.cn/~dbu/AlgorithmCourses/Lectures/Hasselstrom2003.pdf
