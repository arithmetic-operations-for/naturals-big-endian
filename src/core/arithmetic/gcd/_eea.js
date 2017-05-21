
import { _idivmod } from '../../../api'
import { mul } from '../../../api'
import { _IADD } from '../../../core/arithmetic/add'
import { _alloc } from '../../../core/array'
import { _zeros } from '../../../core/array'
import { _jz } from '../../../core/compare'
import { _trim_positive } from '../../../core/convert'

/**
 * Extended Euclidean algorithm.
 *
 * @see https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
 *
 * Given two input integers a and b, a > b.
 * Let r_0 = a, r_1 = b,
 *     s_0 = 1, s_1 = 0,
 *     t_0 = 0, t_1 = 1 (Fibonacci :winkemoji:).
 *
 * Let r_{i+1} = r_{i-1} % r_i             (division remainder)
 * Let q_i = (r_{i-1} - r_{i+1}) / r_i > 0 (division quotient)
 *
 * An alternative definition is
 * r_{i+1} = r_{i-1} - q_i r_i       (with 0 <= r_{i+1} < r_i)
 *
 * Then define
 * s_{i+1} = s_{i-1} - q_i s_i
 * t_{i+1} = t_{i-1} - q_i t_i
 *
 * Let k be such that r_i > 0 for all i <= k and r_{k+1} = 0.
 *
 * Since q_i > 0, if t_{i-1} > 0 and t_i < 0 then t_{i+1} > 0. On the other
 * hand, if t_{i-1} < 0 and t_i > 0 then t_{i+1} < 0. Note that t_2 < 0, so the
 * signs of the t_i alternate: t_0 = 0, t_1 = 1, t_2 < 0, t_3 > 0, t_4 < 0, t_5
 * > 0, etc. The pattern for t is 0, 1, -, +, -, +, -, etc.
 *
 * The same holds for the s_i with flipped signs: note that s_2 = 1, then
 * s_0 = 1, s_1 = 0, s_2 = 1, s_3 < 0, s_4 > 0, s_5 < 0, etc.
 * The pattern for s is 1, 0, 1, -, +, -, +, etc.
 *
 *   | 0  1  2  3  4  5  6
 * ------------------------
 * s | 1  0  1  -  +  -  +
 * t | 0  1  -  +  -  +  -
 *
 * With i >= 1, |t_{i+1}| >= |t_i| + |t_{i-1}| > |t_i| because q_i >= 1 and
 * |t_i| > 0 and, since the signs are alternating, we have |t_{i-1} - q_i t_i|
 * = |t_{i-1}| + |q_i t_i|. Same goes for s_{i+1} w.r.t s_i and s_{i-1}.
 *
 *
 * Input
 * -----
 *  - No leading zeroes
 *  - A > B
 *  - (two bullets above imply |A| >= |B|)
 *
 *
 * Implementation details
 * ----------------------
 *
 * Here the implementation avoids computing with negative numbers and will only
 * output the absolute value of s_{k+1} and t_{k+1}. The signs can be recovered
 * from the number of steps of the algorithm (k). However, they do not matter
 * (really?): if the algorithm allowed a < b then the signs would be flipped.
 *
 * Note that s_i <= b and t_i <= a (proof?). Equality holds
 * when i = k+1 and a and b are coprime. Thus s_i can sit in an array as large
 * as b and same for t_i and a.
 *
 * @param {Number} r The radix.
 * @param {Array} a First input number <code>a>b</code>.
 * @param {Number} ai <code>a</code> left bound.
 * @param {Number} aj <code>a</code> right bound.
 * @param {Array} b Second input number <code>b<a</code>.
 * @param {Number} bi <code>b</code> left bound.
 * @param {Number} bj <code>b</code> right bound.
 */
export function _eaa(r, a, ai, aj, b, bi, bj) {
	// R_0 = a
	const R0 = _alloc(aj - ai);
	_copy(a, ai, aj, R0, 0);
	let R0i = 0;
	const R0j = R0.length;

	// R_1 = b
	const R1 = _alloc(bj - bi);
	_copy(b, bi, bj, R1, 0);
	let R1i = 0;
	const R1j = R1.length;

	const Q = _zeros(aj - ai);
	let   Qi = 0;
	const Qj = Q.length;

	// S_0 = 1
	const S0 = _zeros(bj - bi);
	let S0i = S0.length - 1;
	const S0j = S0.length;
	S0[S0j - 1] = 1;

	// S_1 = 0
	const S1 = _zeros(bj - bi);
	let S1i = S1.length;
	const S1j = S1.length;

	// T_0 = 0
	const T0 = _zeros(aj - ai);
	let T0i = T0.length;
	const T0j = T0.length;

	// T_1 = 1
	const T1 = _zeros(aj - ai);
	let T1i = T1.length - 1;
	const T1j = T1.length;
	T1[T1j - 1] = 1;

	const X = _zeros(aj - ai);
	let Xi = 0;
	const Xj = X.length;

	// We handle the first two steps outside of loop because s_1 = t_0 = 0
	// and s_1 = 0, s_2 = 1

	// Invariants
	// ----------
	//
	// 1. No leading zeros in R0
	// 2. No leading zeros in R1
	// 3. |Q| = |R0| (why ???)
	// 4. s_0 = S0 > 0
	// 5. s_1 = S1 < 0
	// 6. t_0 = T0 < 0
	// 7. t_1 = T1 > 0

	if ( R1i === R1j ) {
		return;
	}

	// Q_1 = (r_0 - r_2) / r_1
	// R0 is r_0 and becomes r_2
	// R1 is r_1
	// Q is q_1
	_idivmod(r, R0, R0i, R0j, R1, R1i, R1j, Q, Qi, Qj);

	// remove leading zeros from Q
	// since Q = R0 / R1 we have |R0| - |R1| <= |Q| <= |R0| - |R1| + 1
	Qi = Qj - (R1j - R1i + 1) ;
	if ( Q[Qi] === 0 ) ++Qi;

	// remove leading zeros from R0
	// since R0 = R0 % R1 we have |R0| <= |R1|
	R0i = _trim_positive( R0 , R0j - (R1j - R1i) , R0j) ;

	// s_2 = s_0 - q_1 * s_1 = s_0
	// S0 is s_0 and becomes s_2 i.e. NOTHING TO DO

	// t_2 = t_0 - q_1 * t_1 = q_1
	// T0 is t_0 and becomes t_2
	T0i = T0j - (Qj - Qi) ;
	_copy(Q, Qi, Qj, T0, T0i);

	// Invariants
	// ----------
	//
	// 1. No leading zeros in R0
	// 2. No leading zeros in R1
	// 3. |Q| = |R1| (why ???)
	// 4. s_1 = S1 < 0
	// 5. s_2 = S0 > 0
	// 6. t_1 = T1 > 0
	// 7. t_2 = T0 < 0

	if ( R0i === R0j ) {
		return;
	}

	// Q_2 = (r_1 - r_{i+1}) / r_2
	// R1 is r_1 and becomes r_3
	// R0 is r_2
	// Q is q_2
	_idivmod(r, R1, R1i, R1j, R0, R0i, R0j, Q, Qi, Qj);

	// remove leading zeros from Q
	// since Q = R1 / R0 we have |R1| - |R0| <= |Q| <= |R1| - |R0| + 1
	Qi = Qj - (R0j - R0i + 1) ;
	if ( Q[Qi] === 0 ) ++Qi;

	// remove leading zeros from R1
	// since R1 = R1 % R0 we have |R1| <= |R0|
	R1i = _trim_positive( R1 , R1j - (R0j - R0i) , R1j) ;

	// s_3 = s_1 - q_2 * s_2 = -q_2
	S1i = S1j - (Qj - Qi) ;
	_copy(Q, Qi, Qj, S1, S1i);

	// q_2 * t_2
	// since Q and T0 have no leading zeros then
	// Q * T0 has |Q| + |T0| - 1 <= |Q*T0| <= |Q| + |T0| limbs with no leading zeros.
	Xi = Xj - (Qj - Qi) - (T0j - T0i) ;
	mul(r, Q, Qi, Qj, T0, T0i, T0j, X, Xi, Xj);
	// t_3 = t_1 - q_2 * t_2 = 1 - q_2 * t_2
	// T1 is t_1 and becomes t_3
	_increment(r, X, Xi, Xj);
	T1i = T1j - (Xj - Xi) ;
	_copy(X, Xi, Xj, T1, T1i);
	if ( T1[T1i] === 0 ) ++T1i;

	while (true) {

		// Invariants
		// ----------
		//
		// 1. No leading zeros in R0
		// 2. No leading zeros in R1
		// 3. |Q| = |R0| (why ???)
		// 4. s_{i-1} = S0 > 0
		// 5. s_i = S1 < 0
		// 6. t_{i-1} = T0 < 0
		// 7. t_i = T1 > 0

		if ( R1i === R1j ) {
			break;
		}

		// Q_i = (r_{i-1} - r_{i+1}) / r_i
		// R0 is r_{i-1} and becomes r_{i+1}
		// R1 is r_i
		// Q is q_i
		_idivmod(r, R0, R0i, R0j, R1, R1i, R1j, Q, Qi, Qj);

		// remove leading zeros from Q
		// since Q = R0 / R1 we have |R0| - |R1| <= |Q| <= |R0| - |R1| + 1
		Qi = Qj - (R1j - R1i + 1) ;
		if ( Q[Qi] === 0 ) ++Qi;

		// remove leading zeros from R0
		// since R0 = R0 % R1 we have |R0| <= |R1|
		R0i = _trim_positive( R0 , R0j - (R1j - R1i) , R0j) ;

		// q_i * s_i
		// since Q and S1 have no leading zeros then
		// Q * S1 has |Q| + |S1| - 1 <= |Q*S1| <= |Q| + |S1| limbs with no leading zeros.
		Xi = Xj - (Qj - Qi) - (S1j - S1i) ;
		mul(r, Q, Qi, Qj, S1, S1i, S1j, X, Xi, Xj);
		if ( X[Xi] === 0 ) ++Xi; // remove leading zero if no carry
		// s_{i+1} = s_{i-1} - q_i * s_i
		// S0 is s_{i-1} and becomes s_{i+1}
		S0i = S0j - (Xj - Xi + 1) ;
		_IADD(r, S0, S0i, S0j, X, Xi, Xj);
		if ( S0[S0i] === 0 ) ++S0i;

		// q_i * t_i
		// since Q and T1 have no leading zeros then
		// Q * T1 has |Q| + |T1| - 1 <= |Q*T1| <= |Q| + |T1| limbs with no leading zeros.
		Xi = Xj - (Qj - Qi) - (T1j - T1i) ;
		mul(r, Q, Qi, Qj, T1, T1i, T1j, X, Xi, Xj);
		if ( X[Xi] === 0 ) ++Xi; // remove leading zero if no carry
		// t_{i+1} = t_{i-1} - q_i * t_i
		// T0 is t_{i-1} and becomes t_{i+1}
		T0i = T0j - (Xj - Xi + 1) ;
		_IADD(r, T0, T0i, T0j, X, Xi, Xj);
		if ( T0[T0i] === 0 ) ++T0i;

		// Invariants
		// ----------
		//
		// 1. No leading zeros in R0
		// 2. No leading zeros in R1
		// 3. |Q| = |R1| (why ???)
		// 4. s_{i-1} = S1 < 0
		// 5. s_i = S0 > 0
		// 6. t_{i-1} = T1 > 0
		// 7. t_i = T0 < 0

		if ( R0i === R0j ) {
			break;
		}

		// Q_i = (r_{i-1} - r_{i+1}) / r_i
		// R1 is r_{i-1} and becomes r_{i+1}
		// R0 is r_i
		// Q is q_i
		_idivmod(r, R1, R1i, R1j, R0, R0i, R0j, Q, Qi, Qj);

		// remove leading zeros from Q
		// since Q = R1 / R0 we have |R1| - |R0| <= |Q| <= |R1| - |R0| + 1
		Qi = Qj - (R0j - R0i + 1) ;
		if ( Q[Qi] === 0 ) ++Qi;

		// remove leading zeros from R1
		// since R1 = R1 % R0 we have |R1| <= |R0|
		R1i = _trim_positive( R1 , R1j - (R0j - R0i) , R1j) ;

		// q_i * s_i
		// since Q and S0 have no leading zeros then
		// Q * S0 has |Q| + |S0| - 1 <= |Q*S0| <= |Q| + |S0| limbs with no leading zeros.
		Xi = Xj - (Qj - Qi) - (S0j - S0i) ;
		mul(r, Q, Qi, Qj, S0, S0i, S0j, X, Xi, Xj);
		if ( X[Xi] === 0 ) ++Xi; // remove leading zero if no carry
		// s_{i+1} = s_{i-1} - q_i * s_i
		// S1 is s_{i-1} and becomes s_{i+1}
		S1i = S1j - (Xj - Xi + 1) ;
		_IADD(r, S1, S1i, S1j, X, Xi, Xj);
		if ( S1[S1i] === 0 ) ++S1i;

		// q_i * t_i
		// since Q and T0 have no leading zeros then
		// Q * T0 has |Q| + |T0| - 1 <= |Q*T0| <= |Q| + |T0| limbs with no leading zeros.
		Xi = Xj - (Qj - Qi) - (T0j - T0i) ;
		mul(r, Q, Qi, Qj, T0, T0i, T0j, X, Xi, Xj);
		if ( X[Xi] === 0 ) ++Xi; // remove leading zero if no carry
		// t_{i+1} = t_{i-1} - q_i * t_i
		// T1 is t_{i-1} and becomes t_{i+1}
		T1i = T1j - (Xj - Xi + 1) ;
		_IADD(r, T1, T1i, T1j, X, Xi, Xj);
		if ( T1[T1i] === 0 ) ++T1i;

	}

}
