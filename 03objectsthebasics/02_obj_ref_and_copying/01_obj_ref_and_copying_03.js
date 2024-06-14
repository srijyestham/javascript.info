'use strict';

// nested cloning

let user = {
	name: "John",
	sizes: {
		height: 182,
		width: 50
	}
};

alert(user.sizes.height); // 182

let clone = Object.assign({}, user); // inner sub object reference assigned only not cloned

alert(user.sizes === clone.sizes); // true same sub object

user.sizes.width = 60;

alert(clone.sizes.width); // 60, since sizes is referenced

// structured cloning

let clone1 = structuredClone(user);

alert(user.sizes === clone1.sizes); // false, different objects

user.sizes.width = 70;
alert(clone1.sizes.width); // 60


// circular reference

let user2 = {};
user2.me = user2;
 
let clone2 = structuredClone(user2);

alert(clone2.me === clone2); // true 


// structured cloning failure
// in case of function properties
// error upon below code execution
let clone3 = structuredClone( {
	f: function() {}
});
