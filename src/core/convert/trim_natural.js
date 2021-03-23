import _trim_positive from './_trim_positive.js';
import _alloc from '../array/_alloc.js';
import _copy from '../array/_copy.js';

export default function trim_natural(a, ai, aj) {
	const x = _trim_positive(a, ai, aj);

	if (x >= aj) return [0];

	const b = _alloc(aj - x);

	_copy(a, x, aj, b, 0);

	return b;
}
