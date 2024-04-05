'use strict';

// property existence test, "in" operator


let user = {};

// reading non-existing property returns undefined in JS
alert(user.noSuchProperty === undefined); // true
alert(user.noSuchProperty); // undefined

// "in" operator

// key in object

let user2 = { name : "John", age : 30, "1" : "number", test : undefined, test2 : "undefined" };

alert("age" in user2); // true, user.age exists
alert("blabla" in user2); // false
alert(name in user2); // false, considers name to be variable
					  // that is supposed to contain actual value
alert(1 in user2); // true

alert("undefined test");

alert(user2.test); // undefined
//alert(test in user2); // crashes
//alert(test2 in user2); // crashes
alert("test" in user2); // true

alert(user2.test2); // undefined


let key = "age";

alert(key in user2); // true
alert(user2[key]); // 30
alert(user2.key); // undefined

// in use case

let obj = {
	test : undefined,
};

alert(obj.test); // undefined
alert( "test" in obj ); // true 
// above will fails when using comparision



