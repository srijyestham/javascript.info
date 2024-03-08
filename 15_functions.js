'use strict';


let userName = "John";

let userName2 = "Alice";

function showMessage() {
	alert("Hello everyone!");
	
	let message = "Hello, I'm JavaScript!, " + userName;
	alert(message);
	
	userName = "Bob"; // outer variable modified
	alert(userName); // Bob
	
	let userName2 = "somename";
	alert(userName2); // somename
}

showMessage();
//showMessage();

// alert(message);  // error

alert(userName); // Bob
alert(userName2); // Alice







