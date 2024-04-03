'use strict';


function sum(a, b) {
	return a + b;
}

let result = sum(1,2);
alert(sum); // 3


function checkAge(age) {
	
	if (age >= 18) {
		return true;
	} else {
		return confrim('Do you have permission from your parents?');
	}
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
	
	alert('Access granted');
} else {
	alert('Access denied');
}


function showMovie(age) {
	
	if (!checkAge(age)) {
		return;
	}
	
	alert('Showing you the movie');
}

showMovie(age);

alert('before undefined function');

/*
function doNothig() {}
alert(doNothing() === undefined); // true

function doNothing2() { return; }
alert(doNothing2() === undefined); // true
*/

function sumNumbers() {
	
	return (
		1 + 2 + 3+ 4
	)
}

alert(sumNumbers()); // 10
