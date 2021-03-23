import {cmp} from './cmp.js';

export const ne = (a, ai, aj, b, bi, bj) => cmp(a, ai, aj, b, bi, bj) !== 0;
