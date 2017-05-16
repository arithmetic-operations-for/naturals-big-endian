import test from 'ava' ;

function macro ( t , A , B , U , V , D ) {

	// NOTE _eadd does NOT allow leading zeros

	const r = 10 ;

	const a = parse( 10 , r , A ) ;
	const b = parse( 10 , r , B ) ;

	const [ ri , si , ti ] = _eaa( r , a , 0 , a.length , b , 0 , b.length ) ;

	const Ri = stringify( r , 10 , ri , 0 , ri.length ) ;
	const Si = stringify( r , 10 , si , 0 , si.length ) ;
	const Ti = stringify( r , 10 , ti , 0 , ti.length ) ;

	t.is( Ri , D , 'Ri' ) ;
	t.is( Si , U , 'Si' ) ;
	t.is( Ti , V , 'Ti' ) ;

}

macro.title = ( _ , A , B , U , V , D ) => `GCD(${A}, ${B}) = ${D} and ${U}*${A} = ${V}*${B}` ;

// a > b
// ud = b <=> u = b / d
// vd = a <=> v = a / d
// => ua - vb = ab/d - ba/d = 0
test( macro ,   '1' ,  '0' ,  '0' ,   '1' , '1' ) ;
test( macro , '240' , '46' , '23' , '120' , '2' ) ;
test( macro , '999' ,  '1' ,  '1' , '999' , '1' ) ;
test( macro , '999' ,  '2' ,  '2' , '999' , '1' ) ;
test( macro , '999' ,  '3' ,  '1' , '333' , '3' ) ;
test( macro , '999' ,  '4' ,  '4' , '999' , '1' ) ;
test( macro , '999' ,  '5' ,  '5' , '999' , '1' ) ;
test( macro , '999' ,  '6' ,  '2' , '333' , '3' ) ;
