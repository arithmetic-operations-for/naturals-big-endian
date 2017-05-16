import test from 'ava' ;

import { parse , stringify , _trim_positive , _euclidean_algorithm } from '../../../../../src' ;

function macro ( t , A , B , D ) {

	const r = 10 ;

	const a = parse( 10 , r , A ) ;
	const aj = a.length ;
	const ai = _trim_positive( a , 0 , aj ) ;

	const b = parse( 10 , r , B ) ;
	const bj = b.length ;
	const bi = _trim_positive( b , 0 , bj ) ;

	const [ d , di , dj ] = _euclidean_algorithm( r , a , ai , aj , b , bi , bj ) ;

	// only works with r = 10
	t.is( dj - di , D.length , 'length' ) ;

	const GCD = stringify( r , 10 , d , di , dj ) ;

	t.is( GCD , D , 'value' ) ;

}

macro.title = ( _ , A , B , D ) => `GCD(${A}, ${B}) = ${D}` ;

// a >= b
test( macro ,   '1' ,  '0' , '1' ) ;
test( macro , '240' , '46' , '2' ) ;
test( macro , '999' ,  '1' , '1' ) ;
test( macro , '999' ,  '2' , '1' ) ;
test( macro , '999' ,  '3' , '3' ) ;
test( macro , '999' ,  '4' , '1' ) ;
test( macro , '999' ,  '5' , '1' ) ;
test( macro , '999' ,  '6' , '3' ) ;
test( macro , '89798763754892653453379597352537489494736' , '978' , '6' ) ;
test( macro , '1234567891011121314151617181920212223242526272829' , '1221' , '3' ) ;
test( macro , '8918391893892839282938092838273908' , '9238902830982083209836079238902830' , '18' ) ;

test( macro ,
	'37650526072328171936695291762250209370684337226819795603338569781977444693437332193180866661042770508342415236941382410000000000000000' ,
	'5696107759173612435215985096515090524728819689625373634782109911819800000000' ,
	'12272004900965151087327615491240194950486574150898137749184200000000'
) ;
