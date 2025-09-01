/*
Variables are the containers to store data like numbers, string, boolean, null,  object ( note: object type data like object or array array are store in heap where premetive data store in stack.) etc.
we use let,var or const keys before variable names (identifiers) then assign values to our variables.
*/
// var
console.log(x); 
console.log("var");
var x = 1;
console.log(x);
var x= 2;
console.log(x);
function fun1(){
  var x=0;
  console.log(x)
};
fun1();
console.log(x)

// var is a global scope variable means that you can redeclair a variable using var any place which change the value globally this can lead to personal errors.
// let 
console.log('let');
let a =1 ;
console.log(a);
//let a=3; give error you can't redeclare a variable with let

function fun2(){
  let a= 0;
  console.log(a);
};
fun2();
console.log(a)
// let has block wise scope with let you cannot redeclare same variable in the same block but you can reassign new values in the same block.
//const
console.log('const');
const u = 1;
console.log(u)
//u = 2;
//console.log(u);
//above statement will case error 
function fun3(){
  // u= 0; cause error
  const u=0;
  console.log(u);
};
fun3()
/*
note in the const declaration you can't assign new value to same variable neigther in other blocks you can only rediclare the variable with nee values in different blocks. Also you need to declare first variable before assigning any value or otherwise you get an error
*/