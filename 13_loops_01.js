'use strict';


alert("Answer 1");
let i = 3;

while (i) {
	alert(i--); // 3,2,1
}

alert("Answer 2");
i = 0;
while (++i < 5) alert(i); // 1,2,3,4

alert("Answer 2 part 2");
i = 0;
while(i++ < 5) alert(i); // 1,2,3,4


alert("Answer 3");
for (let i = 0; i < 5; i++) alert(i); // 0,1,2,3,4

alert("Answer 3 2nd part");
for (let i = 0; i < 5; ++i) alert(i); //  1,2,3,4,5

alert("Answer 4 Even Loops");

for ( let i = 2; i <= 10; i++) {
	
	if (i%2 === 1) continue;
	
	alert(i);
}

alert("Answer 4");

i = 0;
while (i < 3) {
	
	alert(`number ${i}!`); // 0,1,2
	i++;
}

alert("Answer 5");

let number;
do {
	
	number = prompt("Enter value greater than 100", "0");
	//if (number == '') break; 
	alert(`Value inserted is : ${number}`);
	
} while (number <= 100 && number);



alert("Answer 6 Prime Numbers");

let numberCheck = prompt("Enter a number", "");

for (let counter = 2; counter < numberCheck; counter++) {
	
	if (numberCheck % counter === 0) break;
	
	alert(counter);
}

