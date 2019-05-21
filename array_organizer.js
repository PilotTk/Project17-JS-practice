// Clean the room function: 
// function that organizes array into 
// individual arrays that are ordered. 
// Organizes strings differently from number types.

function groupNumbers(array){
	var result1 = [];
	var result = [];
	var finale = []

function findString(arr) {
	subarray1 = [];
	var subarray1 = array.filter(item => typeof item === 'string');
	subarray1.sort();
	result1.push(subarray1);
	return result1;
	}
	
function sortStrings(arr) {
	var number = [];
	var char = [];
	arr.forEach(a => {
  	if (typeof a == 'number') number.push(a);
  	else char.push(a);
	})
	var sorted = number.sort().concat(char.sort());
}

	array.sort(function(a, b){return a - b});
	var counter = 0;
  	for (var i = 0; i < array.length; ++i ) { 
  		if( array[i] === array[i+1] || 
    		array[i] === array[i-1] && 
    		array[i] !== array[i+1] ) {
  				counter ++;
  					if (array[i] !== array[i+1]) {
	  					var subarray = []
	  					subarray = new Array(counter).fill(array[i]);
	  					result.push(subarray);
	  					//loop x amount of items into subarray
	  					counter = 0;
	  					subarray = [];
  						}
					} 
					else if (array[i] !== array[i+1] &&
							 array[i] !== array[i-1] &&
							 typeof array[i] !== 'string') {
								result.push(array[i]);
						}
		}
		finale.push(result);


		findString(array);
		sortStrings(result1);


		finale.push(result1);
		
		return finale
	}

const array = [1,2,4,"49",591,"auto",392,391,2,5,10,2,"kaka",1,1,"22",1,20,20, "1", "2"];

groupNumbers(array);

