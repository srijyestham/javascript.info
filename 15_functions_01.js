'use strict';

function showMessage(from, text = "no text given" ) { // text has default value
	
	from = '*' + from + '*';
	alert(from + ': ' + text);
}

let from = "Ann";

showMessage(from, "Hello!");
showMessage(from, "What's up?");


alert(from); // Ann not *Ann*

showMessage("Ann"); // *Ann* : no text given
showMessage(from);  // *Ann* : no text given
showMessage(from, undefined);  // *Ann* : no text given
