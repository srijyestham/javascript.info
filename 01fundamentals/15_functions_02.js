'use strict';

function showMessages(from, text = 'no text given') {
	
	from = '*' + from + '*';
	
	alert(from + ': ' + text);
}

let from = 'Ann';

showMessages(from, 'Hello'); // *Ann*: Hello
showMessages(from, undefined); // *Ann*: no text given
showMessages(from); // *Ann*: no text given

alert(from); // Ann


function valueSet(value) {
	
	value = value + '*'; // scoped change, not reflected outside
	alert(value);		 // 
}

let value = 'hello'; // global variable

valueSet(value); // hello*

alert(value); // hello



