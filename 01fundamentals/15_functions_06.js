'use strict';

/*
function checkAge(age) {
	if (age > 18) {
		return true;
	}
	
	return confirm("Did parents allow you?");
}

checkAge(18);
*/

function checkAge(age) {
	
	return (age > 18) ? true : confirm("Did parents allow you?");
	
}
checkAge(18);


function checkAge2(age) {
	
	return (age > 18) || confirm("Did parents allow you?");
}
checkAge2(18);


function min(a,b) {
		
	return a < b ? a : b;
}

alert(min(1 , 10));

