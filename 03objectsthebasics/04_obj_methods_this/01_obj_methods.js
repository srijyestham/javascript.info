'user strict';

let user = {
	name: "John",
	age: 30
};

// objects as real world entities
// methods as actions of entities

user.sayHi = function () { // arrow fn cant be used
	alert("Hello!");
};

user.sayHi(); // Hello!


// using predeclared function as a method

function greet() {
	alert("Good Morning");
}

let user2 = {};

user2.greeter = greet; // reference copying of fn body

user2.greeter(); // Good Morning
	


// function as method 2

let user3 = {};

function sayHi2() {
	alert("Hello!X2");
}

user3.sayHi2 = sayHi2;

user3.sayHi2(); // Hello!X2



// Method Shorthand

let user4 = {
	sayHi: function() {
		alert("Hello");
	}
};

user4.sayHi(); // Hello

let user5 = {
	sayHi() {              // function keyword not to be used
		alert("Hello!X3");
	}
};

user5.sayHi(); // Hello!X3



