'use strict';

let x = 1;

x= -x;

alert(x);

let z = 1, y = 3;

alert( y - z );

alert( 5 % 2 );
alert( 8 % 3 );
alert( 8 % 4 );

alert( 2 ** 2 );
alert( 2 ** 3 );
alert( 2 ** 4 );

alert( 4 ** (1/2) );
alert( 8 ** (1/3) );

let s = "my" + "string";
alert(s);

alert( "1" + 2 ); // "12"
alert( 2 + "1" ); // "21"

alert( 2 + 2 + '1' ); // "41"

alert( '1' + 2 + 2 ); // "122"

alert( 6 - "2" ); // 4
alert( '6' / '2' ); // 3


let a = 1;
alert( +a );

let b = -2;
alert( +b );

alert( + true ); // 1
alert( +true ); // 1

alert( +"" ); // 0

alert( +undefined ); // NaN

alert( +null ); // 0


let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23"

alert( +apples + +oranges ); // 5

alert( apples * oranges );
alert( apples + oranges );

let c = "2";

alert( c * 2 ); // 4
alert( c + 2 ); // 22
alert( 2 + c ); // 22

alert( 2 * c ); // 4
alert( c - 1 ); // 1
alert( c - "1" ); // 1
alert( typeof ( c - "1" ) ); // Number
alert( typeof ( c - 1 ) ); // Number

let  d = 2 * 2 + 1;
alert(d);

let e = 1;
let f = 2;

let g = 3 - ( e = f + 1 );

alert(e); // 3
alert(g); // 0

let h, i, j;

h = i = j = 2 + 2;

alert(h);
alert(i);
alert(j);

let k = 2;
k = k + 5;
k = k * 2;

alert(k); // 14

k = 2;

k += 5;
k *= 2;

alert(k); // 14

k = 2;

k *= 3 + 5;

alert(k); // 16

alert("Counters");

let counter = 2;
counter++;
alert(counter); // 3

counter --;
alert(counter); // 2

counter = 1;

let l = ++counter;

alert(counter); // 2

alert(l); // 2

l = counter++;

alert(l); // 2

alert(`Counter : ${counter}`); // 3

counter = 0;

counter++;
++counter;
alert(`Counter : ${counter}`); // 2

counter = 0;
alert(++counter); // 1

counter = 0;
alert(counter++); // 0

alert("Counters 2 ");
counter = 1;
alert( 2 * ++counter ); // 4

counter = 1;
alert( 2 * counter++ ); // 2

let m = ( 1 + 2, 3 + 4 );
alert(m); // 7

m = 1 + 2, 3 + 4;
alert(m); // 3


