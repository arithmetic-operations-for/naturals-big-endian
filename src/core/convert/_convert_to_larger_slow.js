import { _iadd_limb , _imul_limb } from '../arithmetic' ;

/**
 *
 * @param {Number} f the base to convert from
 * @param {Number} t the base to convert to
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

export function _convert_to_larger_slow ( f , t , a , ai , aj , b , bi , bj ) {

	let batch = 1;
	let shift = f;
	for (; shift * f <= t; shift *= f, ++batch) ;

	const rounds = ((aj - ai) / batch) | 0 ;
	const first = (aj - ai) % batch ;

	if (first > 0) {
		let w1 = a[ai];
		for (let j = 1; j < first; ++j) {
			w1 *= f;
			w1 += a[ai+j];
		}
		b[bj-1] = w1;
	}

	const _ai = ai + first;
	let _bi = bj - 1 ;

	for (let i = 0; i < rounds; ++i) {
		if (b[_bi] !== 0 && _bi > bi) --_bi;
		_imul_limb(t, shift, b, _bi, bj);
		if (b[_bi] !== 0 && _bi > bi) --_bi;
		let w = 0;
		let j = _ai+i*batch;
		const _end = j + batch  ;
		do {
			w *= f;
			w += a[j];
		} while ( ++j < _end ) ;
		_iadd_limb(t, w, b, _bi, bj);
	}

}
