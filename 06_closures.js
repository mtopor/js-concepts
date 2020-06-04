function sayHelloTo(name) {
    const message = 'Hello ' + name;

    return function () {
        console.log(message); //closure function has an access to the variable from the upper/outer scope
    }
}

const sayHelloToMax = sayHelloTo('Max');
console.log(sayHelloToMax); // [Function (anonymous)]
sayHelloToMax(); // Hello Max


function createFrameworkManager() {
    const fw = ['Angular', 'React'];

    return {
        print: function () {
            console.log(fw.join(' '));
        },
        add: function (framework) {
            fw.push(framework);
        }
    }
}

const manager = createFrameworkManager();
console.log(manager); // { print: [Function: print], add: [Function: add] }
manager.print();
manager.add('VueJS');
manager.print();
// controlling fw variable through the methods print and add of the function createFrameworkManager

// setTimeout

const fib = [1,2,3,5,8,13];

// for (var i = 0; i < fib.length; i++) {
// //     setTimeout(function () {
// //         console.log(`fib[${i}] = ${fib[i]}`); // 6 x fib[6] = undefined
// //     }, 1500);
// // }

// for (let i = 0; i < fib.length; i++) { //works fine as let var exists only in the scope
//     setTimeout(function () {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 1500);
// }

for (var i = 0; i < fib.length; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`); // 6 x fib[6] = undefined
        }, 1500);
    })(i);
}



