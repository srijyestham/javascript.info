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



// integer properties

alert( String(Math.trunc(Number("49"))) ); // "49"
alert( String(Math.trunc(Number("+49"))) ); // "49", not same as +49
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same as 1.2


let user2 = {
	name : "John",
	surname : "Smith"
};
user2.age = 25;

// non integer properties are listed in creation order
for (let prop in user2) {
	alert(prop);
}

// integer properties issue workaroud

let codes2 = {
	"+49" : "Germany",
	"+41" : "Switzerland",
	"+44" : "Great Britain",
	"+1"  : "USA"
};

for (let code in codes2) {
	alert( +code ); // 49, 41, 44, 1
}

alert("codes3");
let codes3 = {
	"49" : "Germany",
	"41" : "Switzerland",
	"44" : "Great Britain",
	"1"  : "USA"
}

for (let code in codes3) {
	alert( +code ); // 1, 41, 44, 49
}







