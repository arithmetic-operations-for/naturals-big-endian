import cmp from './cmp.js';

const ge = (a, ai, aj, b, bi, bj) => cmp(a, ai, aj, b, bi, bj) >= 0;
export default ge;
