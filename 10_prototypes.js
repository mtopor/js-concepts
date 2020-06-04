// __proto__ refers to the parent prototype
// Object.getPrototypeOf()

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.voice = function () {
    console.log(`Cat ${this.name} says meow`);
};

const cat = new Cat('Kot', 'white');
console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__);
console.log(cat.__proto__ === Cat.prototype);
console.log(cat.constructor);

cat.voice();

// =======================
function Person() {}
Person.prototype.legs = 2;
Person.prototype.age = 45;

const person = new Person();
person.name = 'Jack';

console.log('age' in person);
console.log(person.legs);
console.log(person.eyes); // undefined
console.log(person.name);

console.log(person.hasOwnProperty('name')); //true person has the property name
console.log(person.hasOwnProperty('legs')); //false  as legs prop is taken from the prototype

// Object.create()
const proto = {year: 2020};
const myYear = Object.create(proto);
console.log(myYear.year);
proto.year = 2121;
console.log(myYear.year); // 2121 the value changed in the proto of the myYear object
console.log(myYear.hasOwnProperty('year')); //false its from proto
console.log(myYear.__proto__ === proto);
