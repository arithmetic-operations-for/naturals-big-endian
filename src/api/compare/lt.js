import cmp from './cmp.js';

const lt = (a, ai, aj, b, bi, bj) => cmp(a, ai, aj, b, bi, bj) < 0;
export default lt;
