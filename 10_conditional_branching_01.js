
'use strict';

let year = prompt("In which year was ECMAScript-2015 specification published ?", "");
//alert(typeof year);
//alert(year);
if(year == 2015) {
	alert('You are right!');
	alert("You're so smart!");
} else {
	alert("How can you be so wrong?");
}


if (0) {
	alert("Zero test condition");
}

if (1) {
	alert("One test condition");
}

let cond = (year == 2015);

if (cond) {
	alert("Correct");
}
