import {cmp} from './cmp.js';

export const eq = (a, ai, aj, b, bi, bj) => cmp(a, ai, aj, b, bi, bj) === 0;
