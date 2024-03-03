'use strict';

if ('0') { // true
	alert('Hello');
}

let value = prompt("What's the 'official' name of javascript?", "");

if ( value == "ECMAScript" ) {
	alert("Right!");
} else {
	alert("You don't know? 'ECMAScript'!");
}

value = prompt("Type a number : ", "");
let message;

if (value == 0) {
	message = "0";
} else if (value > 0) {
	message = "1";
} else {
	message = "-1";
}

alert(message);


let a = prompt("Enter a : ", "");
let b = prompt("Enter b : ", "");

let result = ( a + b < 4 ) ? 'Below' : 'Over';
alert(result);


alert("Task!");

let login = prompt("Login Type", "");

message = (login == "Employee") ? "Hello" :
		  (login == "Director") ? "Greetings" :
		  (login == "") ? "No login" :
		  "";

alert(message);











