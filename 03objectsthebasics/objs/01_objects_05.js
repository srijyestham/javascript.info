'use strict';

// for..in loop

// for (key in object) {
	// executes the body for each key among object properties
// }	

let user = {
	name : "John",
	age	 : 30,
	isAdmin : true,
};

for (let key in user) { // `let prop in user` is also valid
	// keys
	alert(key); // name, age, isAdmin
	//values for the keys
	alert(user[key]); // John, 30 , true
}

// ordered like an object
// special sort order of properties
// integers properties are sorted 
// others appear in creation order

let codes = {
	"49" : "Germany",
	"41" : "Switzerland",
	"44" : "Great Britain",
	// ...,
	"1" : "USA"
};

for (let code in codes) {
	alert(code); // 1, 41, 44, 49
}

