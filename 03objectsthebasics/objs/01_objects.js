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
