const person = {
    surname: 'Stark',
    knows: function (what, name) {
        console.log(`You know ${what} ${name} ${this.surname}`);
    }
};

const john = { surname: 'Snow'};

person.knows('everything', 'Bran');
person.knows.call(john, 'nothing', 'John'); //executes/calls the function with the specified context
person.knows.apply(john, ['nothing', 'John']);
person.knows.call(john, ...['nothing', 'John']);
const bound = person.knows.bind(john, ...['nothing', 'John']); //does not call a function, but creates one
bound();

//========
function Person(name, age) {
    this.name = name;
    this.age = age;

    console.log(this);
}

const sansa = new Person('Sansa', 20);

// ============ explicit binding
function logThis() {
    console.log(this);
}

const obj = { num: 42};
logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();

// ========== implicit binding
const animal = {
    legs: 4,
    logThis: function () {
        console.log(this);
    }
};

animal.logThis();

// ========================== arrow fn does not create context
function Cat(color) {
    this.color= color;
    console.log('This: ', this);
    (()=>{
        console.log('Arrow this', this);
    })();
}

new Cat('grey');