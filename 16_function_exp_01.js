'use strict';

/*
function sayHi() {
	alert("Hello");
}
alert(sayHi); // stores function 

let func = sayHi; // copies function

func(); // Hello

/****************************************/


let sayHi = function() {
	alert("Hello");
};
alert(sayHi); // function(){alert("Hello");} 

let func = sayHi; // copies function
func(); // Hello


function ask(question, yes, no) {
	
	if(confirm(question)) yes()
	else no();
}

/*
function showOk() {
	alert("You agreed.");
}

function showCancelled() {
	alert("You cancelled the exection");
}

ask("Do you agree?", showOk, showCancelled);
*/


function ask(question, yes, no) {
	if(confirm(question)) yes()
	else no();
}

ask(
	"Do you agree?",
	function () { alert("You agreed."); },
	function () { alert("You cancelled the execution."); }
);
	

/*
function sum(a, b) {
	return a + b;
}

let sum = function (a, b) {
	return a + b;
}
*/

/* *******************************

sayHi("John"); // this works

function sayHi(name) {
	alert(`Hello, ${name}`);
}
----------------------------------

sayHi("John");

let sayHi = function (name) {
	alert(`Hello, ${name}`);
}
*/
