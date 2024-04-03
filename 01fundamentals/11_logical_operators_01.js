'use strict';

alert(null || 2 || undefined); // 2

alert( alert(1) || 2 || alert(3)); // alert(1) -> 1, 2

alert(!!alert(1)); // 1, undefined -> false

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); // alert(1) -> 1, undefined

alert(null || 2 && 3 || 4); // 3

alert("Check the range between");

let age = prompt("Your age?", "");

if (age >= 14 && age <= 90) {
	alert("Right answer!");
} else {
	alert("Wrong!");
}

alert("Check the range outside");

age = prompt("Your age? x2", "");

if (!(age >= 14 && age <= 90)) {
	alert("Right answer! x2");
} else {
	alert("Wrong!");
}

age = prompt("Your age? x3", "");

if (age < 14 || age > 90) {
	alert("Right answer! x3");
} else {
	alert("Wrong!");
}



if (-1 || 0) alert('first'); // -1 -> first
if (-1 && 0) alert('second'); // 0 -> 
if (null || -1 && 1) alert('third'); // -1 -> third


// check the login
alert("Check the login");

let userName = prompt("Who's there?", "");

if (userName === "Admin") {
	
	let password = prompt("Password?", "");
	
	if (password === "TheMaster") {
		alert("Welcome!");
	} else if ( password === "" || password === null) {
		alert("Cancelled");
	} else {
		alert("Wrong password");
	}
} else if (userName === "" || userName === null) {
	alert("Cancelled");
} else {
	alert("I don't know you");
}
