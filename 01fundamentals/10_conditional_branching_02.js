'use strict';

let year = prompt("In which year was the ECMAScript-2015 specification published?", "");

if (year < 2015) {
	alert("Too early...");
} else if (year > 2015) {
	alert("Too late");
} else  {
	alert("Excatly!");
}

let accessAllowed;
let age = prompt("How old are you?", "");

if (age > 18) {
	accessAllowed = true;
} else {
	accessAllowed = false;
}

alert(accessAllowed);


accessAllowed = ( age > 18 ) ? true : false;

alert(`Access : ${accessAllowed}`);

accessAllowed = age > 18 ? true : false;
alert(accessAllowed);

accessAllowed = age > 18;
alert(accessAllowed);


alert("Multiple Ternary Operators '?'");

let message = (age < 3) ? 'Hi, baby!' :
			  (age < 18) ? 'Hello' :
			  (age < 100) ? 'Greetings!' :
			  'What an unusual age!';
	
alert(message);

if ( age < 3 ) {
	message = "Hi, baby!";
} else if ( age < 18 ) {
	message = "Hello";
} else if ( age < 100 ) {
	message = "Greetings!";
} else {
	message = "What an unusual age!";
}

alert(message);


let company = prompt('Which company created Javascript?', '');

(company == "Netscape") ?
	alert("Right!") : alert("Wrong!");


