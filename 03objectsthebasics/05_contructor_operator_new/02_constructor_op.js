"use strict";

function User(name) {
	
	this.name = name;
	
	this.sayHi = function() {
		alert("My name is: " + this.name);
	};
}

let john = new User("John");

john.sayHi();

// tasks 

// task 1
/**
function A() {
	this.name = "hello";
}

function B() {
	this.name = "hello";
}

let a = new A();
let b = new B();

alert( a === b ); // false
alert( a == b );  // true
**/

// case when they return same

let obj = {};

function A() {
	return obj;
}

function B() {
	return obj;
}

alert( new A() == new B() ); // true
// since they return same object 'obj'


// task 2

function Calculator() {
	
	this.read = function() {
		this.a = +prompt("Enter value of a: ", 0);
		this.b = +prompt("Enter value of b: ", 0);
	};
	
	this.sum = function() {
		return this.a + this.b;
	};
	
	this.mul = function() {
		return this.a * this.b;
	};
}

let calculator = new Calculator();
calculator.read();

alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());

// task 3

function Accumulator(startingValue) {
	
	this.value = startingValue;
	
	this.read = function() {
		this.value += +prompt("Enter a new numeric value: ", 0);
	};
}

let accumulator = new Accumulator(10);
accumulator.read();

alert(accumulator.value);
