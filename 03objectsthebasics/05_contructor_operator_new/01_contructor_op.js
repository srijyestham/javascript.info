"use strict";

function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);


// single use immediately called constructor function

let user1 = new function() {
	this.name = "John";
	this.isAdmin = false;
	
}

alert(user1.name);
alert(user1.isAdmin);


// to check if a function was called with "new"

function User1() {
	alert(new.target);
}

User1();
new User1();

// manually adding "new"

function User2(name) {
	if (!new.target) {
		return new User2(name);
	}
	
	this.name = name;
}

let john = User2("John");
alert(john.name);


// return from constructor

function BigUser() {
	
	this.name = "John";
	
	return { name: "Godzilla" };
}

alert(new BigUser().name);

function SmallUser() {
	
	this.name = "John";
	
	return;
}

alert(new SmallUser().name);


function User3() {
	this.name = "test";
}

//alert(new User3.name); // does not work this way
alert(new User3().name); // test

let user3 = new User3;
alert(user3.name); // test
let user4 = new User3(); // above work same
alert(user3.name); // test
