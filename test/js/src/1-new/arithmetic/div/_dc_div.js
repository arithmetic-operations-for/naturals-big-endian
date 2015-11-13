
var integer = integerbigendian ;

test( 'integer._dc_div' , function ( assert ) {

console.log( 'integer._dc_div' ) ;

var t = function ( dividend , divisor , quotient , remainder ) {
	var B = 10 ;

	var D = integer.parse( 10 , B , dividend ) ;
	var d = integer.parse( 10 , B , divisor ) ;
	var q = integer._zeros( D.length ) ;

	integer._dc_div( B , D , 0 , D.length , d , 0 , d.length , q , 0 , q.length ) ;

	assert.deepEqual(
		integer.stringify( B , 10 , q , 0 , q.length ) , quotient ,
		dividend + ' / ' + divisor + ' = ' + quotient
	) ;

	assert.deepEqual(
		integer.stringify( B , 10 , D , 0 , D.length ) , remainder ,
		dividend + ' % ' + divisor + ' = ' + remainder
	) ;

} ;


t( '7' , '10' , '0' , '7' ) ;
t( '10' , '7' , '1' , '3' ) ;
t( '7' , '7' , '1' , '0' ) ;
t( '4' , '2' , '2' , '0' ) ;
t( '15' , '3' , '5' , '0' ) ;
t( '16' , '3' , '5' , '1' ) ;

t( '89' , '7' , '12' , '5' ) ;
t( '789' , '77' , '10' , '19' ) ;

t( '120' , '39' , '3' , '3' ) ;
t( '250' , '59' , '4' , '14' ) ;
t( '500' , '59' , '8' , '28' ) ;

t( '400' , '59' , '6' , '46' ) ;

t( '421' , '23' , '18' , '7' ) ;
t( '23' , '421' , '0' , '23' ) ;

t( '3611' , '12' , '300' , '11' ) ;
t( '3899' , '300' , '12' , '299' ) ;

t( '1' , '9999999999999' , '0' , '1' ) ;
t( '9999999999999' , '1' , '9999999999999' , '0' ) ;

t( '9999999999999' , '7777777777777' , '1' , '2222222222222' ) ;

t( '9999999999999' , '777777777777' , '12' , '666666666675' ) ;

t(
	'27389247928379827398729874923879287398273982739724723937203' ,
	'273892739827938296487254837632' ,
	'99999904873659598945208306076' ,
	'3689578978384602245584885171'
) ;

t(
	'1000000000000000000000000000000000000000000000000' ,
	'9',
	'111111111111111111111111111111111111111111111111' ,
	'1'
) ;

t( // 2**1000 / 2**625 = 2**(1000-625) = 2**375 remainder 0
	'10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376' ,
	'139234637988958594318883410818490335842688858253435056475195084164406590796163250320615014993816265862385324388842602762167013693889631286567769205313788274787963704661873320009853338386432' ,
	'76957043352332967211482500195592995713046365762627825523336510555167425334955489475418488779072100860950445293568',
	'0'
) ;

t( // ( 2**1000 - 1 ) / 2**625 = 2**(1000-625) - 1 = 2**375 - 1 remainder 2**625 - 1
	'10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069375' ,
	'139234637988958594318883410818490335842688858253435056475195084164406590796163250320615014993816265862385324388842602762167013693889631286567769205313788274787963704661873320009853338386432' ,
	'76957043352332967211482500195592995713046365762627825523336510555167425334955489475418488779072100860950445293567',
	'139234637988958594318883410818490335842688858253435056475195084164406590796163250320615014993816265862385324388842602762167013693889631286567769205313788274787963704661873320009853338386431'
) ;

// covers case A_2 >= B_1 in _dc_div_32

t(
'7696436905158094003308350373463845221071356045956582063352457594358867621369100939016411590286644205669468206857934835307654199357729258249751557309048431184429670029493281347861350938333001700595191294654520509068223010179372164702642323113738666356044506' ,
'76964369051580940033083503734638452210713560459565820633524575943588676213691009390164115902866442056694682068579348353076541994' ,
'99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999' ,
'34693627301332497342131934919068122240206841807427171571857577644183867508345529899232338913045814221397324391693087019432586500'
) ;

} ) ;
