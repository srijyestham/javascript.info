'use strict';


/* Prime numbers */

let number = prompt("Enter a number");

nextPrime:
for (let i = 2; i <= number; i++) {
	
	alert(`i is ${i}`);
	
	for (let j = 2; j < i; j++) {
		
		alert(`j is ${j}`);
		
		if (i % j === 0) continue nextPrime;
	}
	
	alert(i);
}
