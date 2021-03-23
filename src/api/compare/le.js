import {cmp} from './cmp.js';

export const le = (a, ai, aj, b, bi, bj) => cmp(a, ai, aj, b, bi, bj) <= 0;
