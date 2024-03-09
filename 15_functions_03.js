'use strict';



let from = "Hello";

function showMessages(from, text = msgValue()) {
	
	from = from + "*"; // hello*
	
	alert(from + ", " + text);
}

function msgValue() {
	alert("This is default value function");
}

showMessages(from); // hello*, This is default value function
showMessages(from, "Ann!"); // hello*, Ann!
msgValue();


alert(from); // Hello

