'use strict';

let value = true;

alert(typeof value);

value = String(value); //boolean

alert(typeof value); //string

alert(value); //true

alert( "6" / "2"); // 3


let str = "123";
alert(typeof str);

let num = Number(str);
alert(typeof num);

let age = Number("an arbitrary string instead of a number");
alert(typeof age);
alert(age);

alert("New");

alert(typeof NaN); //NaN
alert(typeof undefined);

alert(Number(undefined));
alert(Number(null));
alert(Number(true));
alert(Number(false));


alert(Number("     123     "));
alert(Number("123z"));


alert(Boolean(null));
alert(Boolean(undefined));
alert(Boolean(NaN));

alert( Boolean(1) );
alert( Boolean(0) );

alert(Boolean("Hello"));
alert(Boolean(""));

alert(Boolean("0")); //true
alert( Boolean(" ") ); //
