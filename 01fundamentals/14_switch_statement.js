'use strict';

let a = 2 + 2;

switch (a) {
	
	case 3:
		alert('Too small');
		break;
	
	case 4:
		alert('Exactly');
		break;
		
	case 5:
		alert('Too big');
		break;
		
	default :
		alert("I don't know such values");
}	


switch (a) {
	
	case 3:
		alert('Too small');
		break;
		
	case 4:
		alert('Exactly');
		
	case 5:
		alert('Too big');
		break;
		
	default:
		alert("I don't know such values");
}


alert("Expression as a switch/case argument");

a = "1";
let b = 0;

switch (+a) {
	
	case b + 1:
		alert("this runs, because +a is 1, exactly equals b+1");
		break;
		
	default:
		alert("this doesn't run");
}


alert("Grouping");

a = 3;

switch (a) {
	
	case 4:
		alert('Right!');
		break;
		
	case 3:
	case 5:
		alert("Wrong!");
		alert("Why don't you take a math class?");
		break;
		
	default:
		alert("The result is strange. Really.");
}


alert("Type check");

let arg = prompt("Enter a value?");

switch (arg) {
	
	case '0':
	case '1':
		alert('One or Zero');
		break;
		
	case '2':
		alert('Two');
		break;
		
	case 3:
		alert('Never executes!');
	
	default:
		alert('An unknown value');
}


alert('Tasks 01');

let browser = prompt("Your browser", "");

if (browser ==="Edge") {
	alert("You have got the Edge!");
} else if ( browser === "Chrome" || "Firefox" || "Safari" || "Opera" ) {
	alert("Okay we support these browsers too");
} else {
	alert("We hope that this page looks ok!")
}



alert('Tasks 02');

a = +prompt('a?', '');

switch (a) {
	
	case 0:
		alert(0);
		break;
		
	case 1:
		alert(1);
		break;
		
	case 2:
	case 3:
		alert('2,3');
		break;
		
	default:
		alert("Wrong input");
}




