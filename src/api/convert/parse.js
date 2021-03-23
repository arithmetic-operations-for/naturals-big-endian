import {parse_keep_zeros} from '../../core/convert/parse_keep_zeros.js';
import {trim_natural} from '../../core/convert/trim_natural.js';

export function parse(f, t, string) {
	const b = parse_keep_zeros(f, t, string);

	return trim_natural(b, 0, b.length);
}
