'use strict';


let a = 1, b = 1;
let c = ++a;
let d = b++;

alert(a); // 2
alert(b); // 2
alert(c); // 2
alert(d); // 1


a = 2;

let x = 1 + ( a *= 2 );

alert(a); // 4
alert(x); // 5


alert( "" + 1 + 0 ); // "10"
alert( "" - 1 + 0 ); // -1
alert( true + false ); // 1
alert( 6 / "3" ); // 2
alert( "2" * "3" ); // 6
alert( 4 + 5 + "px" ); // "9px"
alert( "$" + 4 + 5 ); // $45
alert( "4" - 2 ); // 2
alert( "4px" - 2 ); // NaN
alert( "  -9  " + 5 ); // "  -9  5"
alert( "  -9  " - 5 ); // -14
alert( null + 1 ) // 1
alert( undefined + 1 ) // NaN
alert( " \t \n" - 2 ); // -2


let e = prompt("First Number?", 1); // string input 
let f = prompt("Second Number?", 2);

alert(typeof e); // string

alert( +e + +f); // 3

alert( typeof ("1" + "2") ); // "12"



