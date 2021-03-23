import test from 'ava';

import {jz} from '../../../src/index.js';

function macro_jz(t, a, ai, aj, e) {
	t.is(e, jz(a, ai, aj));
}

macro_jz.title = (_, a, ai, aj, e) =>
	`jz(${JSON.stringify(a)}, ${ai}, ${aj}) = ${e}`;

test(macro_jz, [], 0, 0, true);
test(macro_jz, [1, 3, 2], 1, 1, true);
test(macro_jz, [1, 3, 2], 1, 2, false);
test(macro_jz, [1, 0, 2], 1, 2, true);
test(macro_jz, [1, 0, 0, 0, 0, 0, 2], 2, 4, true);
test(macro_jz, [1, 0, 0, 0, 0, 0, 2], 1, 5, true);
test(macro_jz, [1, 0, 0, 0, 0, 0, 2], 1, 6, true);
test(macro_jz, [1, 0, 0, 0, 0, 0, 2], 1, 7, false);
test(macro_jz, [1, 0, 0, 0, 0, 0, 2], 0, 5, false);
test(macro_jz, [1, 0, 0, 0, 0, 0, 2], 0, 4, false);
test(macro_jz, [1, 0, 0, 0, 0, 1, 2], 2, 4, true);
test(macro_jz, [1, 0, 0, 0, 0, 1, 2], 1, 5, true);
test(macro_jz, [1, 0, 0, 0, 1, 0, 2], 1, 5, false);
test(macro_jz, [1, 0, 1, 0, 0, 1, 2], 2, 4, false);
test(macro_jz, [1, 0, 0, 6, 0, 1, 2], 2, 4, false);
