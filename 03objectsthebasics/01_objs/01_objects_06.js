'use strict';

let user = {}; // obj literal syntax
let user2 = new Object; // object contructor syntax


user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// object emptiness check

let schedule = {};

function isEmpty(obj) {
	
	for (let key in obj) {
		return false;
	}
	
	return true;
}

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false



// sum obj properties

let sum = 0;

let salaries = {
	John : 100,
	Ann : 160,
	Pete : 130
}

for (let prop in salaries) {
	
	sum += salaries[prop];
}

alert(sum); // 390


// multiply numberic property values by 2

let menu = {
	width : 200,
	height : 300,
	title : "My menu"
};

function multiplyNumeric(obj) {
	
	for (let prop in obj) {
		
		if (typeof( obj[prop] ) == "number") {
			
			obj[prop] *= 2;
		}
	}
}

multiplyNumeric(menu);

// print multiplied properties
function viewObj(obj) {
	for (let prop in obj) {
		alert(obj[prop]);
	}	
}

viewObj(menu);














