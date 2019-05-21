// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes("John");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

var hundred() => (x) => Math.pow(x, 100)

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

function hundred(x) {
	return Math.pow(x, 10000);
}

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