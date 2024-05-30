'use strict';


function makeUser(name, age) {
	return {
		name : name,
		age : age,
	};
}

let user = makeUser("John", 30);
alert(user.name); // John

function makeUser2(name, age) {
	return {
		name, // same as name : name
		age,  // same as age : age
	};
}

let user2 = makeUser2("John", 30);
alert(user2.name); //John

function makeUser3(name, age) {
	return {
		name,	// works same as above
		age : age,
	};
}

let user3 = makeUser3("John", 30);
alert(user3.name); // John
