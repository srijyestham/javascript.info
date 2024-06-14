'use strict';

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copying objects
Object.assign(user, permissions1, permissions2);

for (let key in user) {
	alert(user[key]);
}

Object.assign(user, { name: 'Pete' }); // property overwritten

alert(user.name); // Pete

// simple object cloning

let user1 = {
	name: "John",
	age: 30
};

let clone = Object.assign({}, user1);

alert(clone.name); // John
alert(clone.age); // 30
