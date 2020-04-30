 //null, undefined, boolean, string, object, symbol
console.log(typeof 0); //number
console.log(typeof true); //boolean
 console.log(typeof 'text'); //string
 console.log(typeof undefined); // undefined
 console.log(typeof Math);// object
 console.log(typeof Symbol('JS'));
 console.log(typeof null); //object
 console.log(typeof function () {}); //function
 console.log(typeof NaN); //number

 //type conversion

 let text = 'some text';
 if (text) {
  console.log('printing ', text);
 }

 // '', 0, null, undefined, NaN, false => false after boolean conversion

 console.log(Boolean('')); //false
 console.log(Boolean('Hello')); //true
 console.log(Boolean(' ')); //true
 console.log(Boolean('0')); //true
 console.log(Boolean(0)); //false
 console.log(Boolean(null)); //false
 console.log(Boolean([])); //true
 console.log(Boolean({})); //true
 console.log(Boolean(function () {})); //true

 //String & numbers
 console.log(1 + '2'); // string 12
 console.log('' + 1 + 0); // string 10
 console.log('' - 1 + 0); // number -1. string does not support - operation, conversion to number happens
 console.log('3' * '8'); // number 24. same as above
 console.log(4 + 10 + 'px'); // string 14px
 console.log('px' + 5 + 10);// string px510
 console.log('42' - 40); //number 2
 console.log('42px'- 2); //NaN
 console.log(null + 2); // number 2
 console.log(undefined + 2); // NaN

 // == vs ===
 // == comparison of value with type conversion(coercion)
 // === comparison of value, no conversion

 console.log(2 == '2'); //true
 console.log(2 === '2'); //false
 console.log(undefined == null); //true
 console.log(undefined === null); //false
 console.log('0' == false); // true
 console.log('0' == 0); // true
 console.log(0 == 0); // true


// misc
 console.log(false == ''); //true
 console.log(false == []); //true
 console.log(false == {}); //false

 console.log('' == 0); //true
 console.log('' == []); //true
 console.log('' == {}); //false

 console.log(0 == []); // true
 console.log(0 == {}); //false
 console.log(0 == null); // false

