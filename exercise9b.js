
// Function that takes an array of numbers and a 
// target number. The function finds 
// two different numbers in the 
// array that, when added together, 
// give the target number. 

const test = [1,2,3,4,5,6,7,8,9,10,11,12]

function FindSumNumbers (arr, a) {

let highest = 0;
  	for (num of arr) {
    if (highest < num) {
   	highest = num;
    	}
    }

if ( a - highest > 0) {
	console.log("Sorry, not possible with this array");
	}


	arr.forEach(num => {
		if ( a - num > 0) {
			let d = num;
			arr.forEach(num => {
				if (num + d === a) {
				console.log( "You need " 
					+ d 
					+ " and " 
					+ num);
				}
			})
		} else if ( a === num) {
			console.log("All you need is the input " + a);
		} 
	})
}
					
FindSumNumbers(test,50);
