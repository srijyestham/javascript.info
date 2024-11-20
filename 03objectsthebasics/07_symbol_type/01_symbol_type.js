"use strict";


// symbol is a primitive unique value
let id = Symbol();

// symbol with description "id"
let id2 = Symbol("id");
let id3 = Symbol("id");


alert(id2 == id3); // false

// symbols dont auto convert to a string

let id4 = Symbol("id");

//alert(id4); // Type error
// the above doesnt work as alert has to convert
// implicitly anything inside braces to string value
// symbols can not be made implicitly string as they are
// primitive unique values
// explicitly needed to call .toSting()

alert(id4.toString()); // Symbol(id)

// to show description only of a symbol
alert(id4.description); // id

