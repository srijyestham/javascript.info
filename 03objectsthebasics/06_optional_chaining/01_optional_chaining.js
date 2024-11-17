"use strict";

//alert("test");

/**
let user = {};

// alert(user.address.street); // Error! does not exist


//let html = document.querySelector('.elem').innerHTML;

alert(user.address ? user.address.street : undefined); // undefined

// accessing user.address.street.name

alert(user.address ? user.address.street ? user.address.street.name : null : null);


// using && operator

alert(user.address && user.address.street && user.address.street.name); // undefined

// optional chaining eliminates code duplication

alert(user?.address?.street); // undefined

let html = document.querySelector('.elem')?.innerHTML; // undefined

let user1 = null;

alert(user1?.address); // undefined
alert(user1?.address.street); // undefined


// variable before ?. must be declared
// reference error: user is not defined
// optional chaining only works for declared variables
user3?.address;


// short-circuiting
// ?. immediately stops the evaluation of the part after it

/**
let user = null;
let x = 0;

user?.sayHi(x++);

alert(x); // 0, value is not incremented



// optional chaining ?. is not a operator
// but a special syntax construct
// works with functions and square [] brackets.

// ?.() used to call a fn that may not exist



let userAdmin = {
	admin() {
		alert("I am admin");
	}
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens as no such method
**/


// using ?.[]

let key = "firstName";

let user11 = {
	firstName: "John"
};

let user12 = null;

alert(user11?.[key]); // John
alert(user12?.[key]); // undefined


// ?. can also be used with delete

// delete user?.name; // deletes 'name' / user.name if user exists


// ?. can be used ofr safe reading and deleting but not writing

/**
let user = null;

user?.name = "John"; // error does not work
// because it evaluates to: undefined = "John"
**/


// ?. to be used carefully for left part that doesn't exist
// else it can hide programming errors, if they occur
