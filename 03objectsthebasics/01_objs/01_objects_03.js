'use srict';

// property name limitations


let obj = { 		// no limitations on property names
	for : 1,		// they become string
	let : 2,
	return : 3,
};

alert(obj.for + obj.let + obj.return); // 6


obj = {
	0 : "test",		// same as "0": "test"
	//"0" : "test2"
};

//alert(obj.0); // does not execute
alert(obj[0]); // test
alert(obj["0"]); // test




let obj2 = {
	0 : "test1",
	"0" : "test2", 
	a : "test3",
	"a" : "test4"
};

alert(obj2[0]); // test2 // "0" considered, 0 is not
alert(obj2["0"]); //test2
alert(typeof obj2[0]); // string
alert(obj2); // object object

//alert(obj2.a); // test4
//alert(obj2[a]); // test4
alert(obj2["a"]); // test4 // "a" property considered



let obj3 = {};
obj3.__proto__ = 5; // assign a number
alert(obj3.__proto__); // [object object]


let obj4 = {
	0 : "test5",
};

//alert(obj4.0); // does not run
alert(obj4[0]); // test5
