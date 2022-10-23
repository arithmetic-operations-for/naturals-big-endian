import test from 'ava';
import {_cmp_n} from '#module';

test('_cmp_n', (t) => {
	t.true(_cmp_n([1, 2], 0, 2, [1, 2], 0) === 0);
	t.true(_cmp_n([1, 2], 0, 2, [1, 1], 0) > 0);
	t.true(_cmp_n([1, 2], 0, 2, [2, 2], 0) < 0);
});
