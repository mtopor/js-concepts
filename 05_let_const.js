let a = 'Var a';
let b = 'Var b';

{
    a = 'New Var A';
    let b = 'Local Var B';
    console.log('Scope A: ', a); // Scope A:  New Var A
    console.log('Scope B: ', b); //  Scope B:  Local Var B as it's a new var in local scope

    // console.log(c);  //  Cannot access 'c' before initialization
    // let c = 'Something'; //
}

console.log('A: ', a); // A:  New Var A
console.log('B: ', b); // B:  Var b


//Const
const PORT = 8080;
// PORT = 2020; //TypeError: Assignment to constant variable.

const array = ['JavaScript', 'is', 'great'];
array.push('!');
array[0] = 'JS';
console.log(array);

const obj = {};
obj.name = 'Max';
obj.age = 32;
console.log(obj);
delete obj.name;
console.log(obj);
// obj = 23; // Assignment to constant variable.

