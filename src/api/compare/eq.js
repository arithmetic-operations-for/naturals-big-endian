import cmp from './cmp.js';

const eq = (a, ai, aj, b, bi, bj) => cmp(a, ai, aj, b, bi, bj) === 0;
export default eq;
