'use strict';


let user = {};

alert(typeof user); // object

user = {
	name : "John",
	age : 30,
};

alert(typeof user.name); // string
alert(typeof user.age); // number

user.isAdmin = true;

delete user.isAdmin;

user = {
	name : "John",
	age : 30,
	"likes birds" : true,
}

//user."likes birds" = true; // syntax error

alert(user["likes birds"]); // true

delete user["likes birds"]; 

let key = "likes birds";

user[key] = true;

alert(user[key]); // true
alert(user["likes birds"]); // true

key = prompt("what do you want to know about the user?", "name");

alert(user[key]); // John

// computed properties

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
	[fruit] : 5,
};

alert(bag.apple); // 5
alert(bag[fruit]); // 5

bag = {
	[fruit + "Computers"] : 5,
};

alert(bag.appleComputers); // 5
alert(bag["appleComputers"]); // 5
