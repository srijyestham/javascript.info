'use strict';

alert( 2 > 1 );

let result = alert( 3 > 1);

alert(result); // undefined

result = 5 > 1;

alert(`Result : ${result}`);

alert( 'Z' > 'A' ); // true
alert("Glow" > "glee"); // false
alert("a" > "A"); // true

alert( "2" > 1 ); // true
alert( '01' == 1 ); // true



let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert( a == b ); // true

alert( 0 == false ); // true

alert( '' == false ); // true


alert ( `Strict Equality Check : ${0 === false}` ); // false

alert(0 !== false); // true

alert(0 !== 0); // false

alert( null === undefined ); // false

alert( null == undefined ); // true

alert("null vs 0");

alert( null > 0 ); // false
alert( null == 0 ); // false
alert( null >= 0 ); // true

alert( undefined > 0 ); // false
alert( undefined < 0 ); // false
alert( undefined == 0 ); // false
alert( undefined === 0 ); // false

