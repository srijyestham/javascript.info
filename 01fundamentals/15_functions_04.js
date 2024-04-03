'use strict';

/*
function showMessage(text) {
	
	if (text == undefined) {
		text = 'empty message';
	}
	
	alert(text);
}

showMessage(); // empty message
*/


/*
function showMessage(text) {
	
	text = text || 'empty';
	
	alert(text);
}

showMessage(); // empty
showMessage(0); // empty
*/

function showCount(count) {
	
	alert(count ?? "unknown");
}

showCount(0); // 0
showCount(); // unknown
showCount(null); // unknown


	
