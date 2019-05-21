
//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color 
// and has a sound method that moo's her name, type and color. 

const Animal = { a: "Doggo", b: "Dog", c: "spotty", d: "fluffy"}
const Mammal = { a: "Rudolph", b: "reindeer", c: "red", d: "nose"}


const animalArray = {

	a: Animal.a,
	b: Mammal.b,
	c: Animal.c,
	d: function moo() {
			console.log("I am a " + Mammal.c + Mammal.a + Mammal.b);
		}
	
};


class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mammal('Shelly', 'cow', 'brown');






