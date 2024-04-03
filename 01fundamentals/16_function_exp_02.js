'use strict';

/*
let age = 19;

if (age < 18) {
	
	welcome(); // works
	
	function welcome() {
		alert("Hello");
	}
	
	welcome(); // works

} else {
	
	welcome(); // works
	function welcome() {
		alert("Greetings!");
	}
}

welcome(); // Does not work, welcome not visible
		   // outide scope
*/

/*
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
	
	welcome = function () {
		alert("Hello");
	};
} else {
	welcome = function () {
		alert("Greetings!");
	};
}

welcome(); // runs
*/


let age = prompt("What is your age?", 18);

let welcome = (age < 18) ? 
	function () { alert("Hello"); } :
	function () { alert("Greetings"); };
	
welcome(); // runs

