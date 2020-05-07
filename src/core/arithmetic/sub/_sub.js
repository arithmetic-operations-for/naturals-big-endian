
/**
 * Subtracts two big endian arrays, |c| >= |a| >= |b|
 * wraps
 *
 * @param {int} r base (radix)
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 * @param {array} b second operand
 * @param {int} bi b left
 * @param {int} bj b right
 * @param {array} c result, must be 0 initialized
 * @param {int} ci c left
 * @param {int} cj c right
 */

export function _sub ( r , a, ai, aj, b, bi, bj, c, ci, cj){
	var T, C = 0;

	while(--bj >= bi){
		--aj; --cj;
		T = C;
		C = (a[aj] < b[bj] + T) | 0;
		c[cj] = a[aj] - b[bj] + (C*r - T);
	}

	while(--aj >= ai){
		--cj;
		T = C;
		C = (a[aj] < T) | 0;
		c[cj] = a[aj] + (C*r - T);
	}

	if(C){
		while(--cj >= ci){
			c[cj] = r - 1;
		}
	}

}
