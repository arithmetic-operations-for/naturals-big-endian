import test from 'ava' ;
import * as integer from '../../../src' ;

function macro ( t , s ) {
	const a = s.split('').map( x => parseInt(x, 10) ) ;
	t.is( s , integer.parse(10, 10, s).join('') ) ;
}

macro.title = ( _ , s ) => `convert_dc bug 10 10 ${s.slice(0,40)+'...'}` ;

test( macro , '1267650600228229401496703205376' ) ;
test( macro , '515377520732011331036461129765621272702107522001' ) ;
test( macro , '1606938044258990275541962092341162602522202993782792835301376' ) ;
test( macro , '7888609052210118054117285652827862296732064351090230047702789306640625' ) ;
test( macro , '653318623500070906096690267158057820537143710472954871543071966369497141477376' ) ;
test( macro , '46336150792381577588313262263220434371406283602843045997201608143345357543255478647000589718036536507270555180182966478507' ) ;
test( macro ,  '7696436915158194113318351373463845221171356145956582163352457594358867621369111939116411591286644215669468216857934835317654199357729258249751557319148431184429671129493281347861351938333111711595191294654521519168223111179372164712642323113738666356144516' ) ;

test( 'convert_dc bug 16 32' , t => {
	const s16 = '7696436905158094003308350373463845221071356045956582063352457594358867621369100939016411590286644205669468206857934835307654199357729258249751557309048431184429670029493281347861350938333001700595191294654520509068223010179372164702642323113738666356044506' ;
	const s32 = integer.translate(16, 32, s16);
	t.is( s16 , integer.translate(32, 16, s32) ) ;
}) ;

test( 'convert_dc bug 16 36' , t => {
	const s16 = '7696436905158094003308350373463845221071356045956582063352457594358867621369100939016411590286644205669468206857934835307654199357729258249751557309048431184429670029493281347861350938333001700595191294654520509068223010179372164702642323113738666356044506' ;
	const s36 = integer.translate(16, 36, s16);
	t.is( s16 , integer.translate(36, 16, s36) ) ;
}) ;

test( 'convert_dc bug 16 35' , t => {
	const s16 = '7696436905158094003308350373463845221071356045956582063352457594358867621369100939016411590286644205669468206857934835307654199357729258249751557309048431184429670029493281347861350938333001700595191294654520509068223010179372164702642323113738666356044506' ;
	const s35 = integer.translate(16, 35, s16);
	t.is( s16 , integer.translate(35, 16, s35) ) ;
}) ;

test( 'convert_dc bug 9 8' , t => {
	const s9 = '7676436715158174113318351373463845221171356145756582163352457574358867621367111737116411571286644215667468216857734835317654177357727258247751557317148431184427671127473281347861351738333111711575171274654521517168223111177372164712642323113738666356144516' ;
	const s8 = '2341511753762417574267007637275674131142156520746203057314467730455404277272762246772544705373444735202465304444063665456343411166473401205724176607231571765573377253513617567037636027453057070427750527740414020063465317231626405252605557043305357513631417320631516523047' ;

	const out = integer.translate(9, 8, s9);
	t.is( s8 , out ) ;
}) ;

test( 'convert_dc bug 8 9' , t => {
	const s8 = '2341511753762417574267117637275674131142156521746213157314467731455414277272762246772544715373444735212465314444163665456343411166473411215724176617231571765573377253513617567137636127453157171427751527741414121163465317231626415252615557143315357513631417321631516523147' ;
	const s9 = '7676436715158174113324628077245537553715217783000327125164316171175261487176551270283528223665306534361832552387385342283811063603446045453853316005761148822334514681534233512340787628370085234700131650275200138738633568337374662744606600607032773544166071' ;

	const out = integer.translate(8, 9, s8);
	t.is( s9 , out ) ;
}) ;

test( 'convert_dc bug 9 8 translate' , t => {
	const s9 = '7676436715158174113318351373463845221171356145756582163352457574358867621367111737116411571286644215667468216857734835317654177357727258247751557317148431184427671127473281347861351738333111711575171274654521517168223111177372164712642323113738666356144516' ;

	const out = integer.translate(9, 8, s9);
	t.is( s9 , integer.translate(8, 9, out) ) ;
}) ;