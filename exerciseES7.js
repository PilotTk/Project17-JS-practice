//Function that calulates the power of 100 of a number 
// entered as a parameter

var hundred() => (x) => Math.pow(x, 100)

// with parameter 10000. 

function hundred(x) {
	return Math.pow(x, 10000);
}


//Some practice 

let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "RedNose"
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace("username", " ");
})