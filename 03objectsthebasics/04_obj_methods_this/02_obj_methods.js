'use strict';

let user1 = {
	name: "John",
	age: 30,

	sayHi1() {  // 'this' usage
		alert(this.name);
	}
};

user1.sayHi1(); // John

// below unrealiable code

let user2 = {
	name: "John",
	age: 30,
	
	sayHi2() {
		alert(user2.name);
	}
};

user2.sayHi2(); // John, works but unrealiable

// unrealiability demonstration

let admin = user2; // naming not copied

user2 = null; // admin reference also becomes null

admin.sayHi2(); // error


