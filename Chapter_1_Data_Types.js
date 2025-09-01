//there mainly two data types in js
//1 . Premetive (number, string, boolean, null, undefined, symbol, BigInt).
//2 . Objective (array, object )
// premetive store in stack and objectives store in heap
// note : js wrap premtive data into objective when we apply methods 
// (built in functions) or prroperties on them behind the scene.
//====Premetive data====
console.log(`Premetive Data`);
let x = 1;
console.log(typeof x);
x= `Hi`;
console.log(typeof x);
x = true
console.log(typeof x);
x= null;
console.log(typeof x);
x=undefined;
console.log(typeof x);
//====Objective Data====
console.log(`Objective Data`);
x=[1,'p'];
console.log(typeof x);
x= { name:'Noman',
     Designation: 'MMA fighter and Programmer'
   };
console.log(typeof x);
