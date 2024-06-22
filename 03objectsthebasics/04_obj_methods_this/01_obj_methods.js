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
	
