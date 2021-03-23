import { parse } from "./parse.js" ;
import { stringify } from "./stringify.js" ;

export function translate ( f , t , string ) {

	const a = parse( f , t , string ) ;
	return stringify( t , t , a , 0 , a.length ) ;

}
