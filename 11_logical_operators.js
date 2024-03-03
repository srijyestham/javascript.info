'use strict';

let a = 1;
let b = 2;

let result = b || a; // b 

alert(result);


alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false


if ( 1 || 0 ) {
	alert('truthy!');
}


let hour = 9;

if (hour < 10 || hour > 18) {
	alert('The office is closed');
}

hour = 12;

let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
	alert('The office is closed');
}


alert( 1 || 0 ); // 1
alert( null | 1 ); // 1
alert( null || 0 || 1 ); // 1
alert( undefined || null || 0 ); // 0
alert( 0 || undefined || null ); // null



let firstName = '';
let lastName = '';
let nickName = 'SuperCoder';

alert( firstName || lastName || nickName || 'Anonymous' ); // SuperCoder


true || alert('not printed');
false || alert('printed');


alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
	alert('The time is 12:30');
}

if ( 1 && 0 ) {
	alert("won't work, because the result is falsy");
}

alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5
alert( 5 && 1 ); // 1

alert( null && 5 ); // null
alert( 0 && 'no matter what' ); // 0

alert( 1 && 2 && null && 3 ); // null
alert( undefined && 1 && null ); // undefined
alert( 1 && 2 && 3 ); // 3


