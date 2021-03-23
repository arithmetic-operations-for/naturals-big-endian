import _zeros from '../array/_zeros.js';
import _convert from './_convert.js';

export default function convert_keep_zeros(f, t, a, ai, aj) {
	const bi = 0;
	const bj = Math.ceil((Math.log(f) / Math.log(t)) * (aj - ai));
	const b = _zeros(bj - bi);

	_convert(f, t, a, ai, aj, b, bi, bj);

	return b;
}
