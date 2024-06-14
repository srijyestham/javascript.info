'use strict';


let user = { name: "John" };

let admin = user; // copied reference

admin.name = 'Pete';

alert(user.name); // Pete


let a = {};
let b = a; // copy the reference

alert(a == b); // true
alert( a === b); //true

let c = {};
let d = {};

alert(c == d); // false


const user1 = {
	name: "John"
};

user1.name = 'Pete'; // reference is constant, object vlaue change

alert(user1.name); // Pete

let user2 = {
	name: "John",
	age: 30
};

let clone = {}; // new empty object

for (let key in user2) {
	clone[key] = user2[key];
}

alert(clone.name); // John

clone.name = 'Pete';

alert(clone.name); // Pete
