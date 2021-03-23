import assert from 'assert';

export default function _log(x, y) {
	assert(y > 1);

	let z = 0;

	while (x >= y) {
		if (x % y) break;
		x /= y;
		++z;
	}

	return [z, x];
}
