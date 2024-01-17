

/*console.log([] == []):

This expression compares two empty arrays. Since arrays are objects, the comparison is based on reference, not content.
The two empty arrays are distinct objects in memory, so the result is false.
console.log({} == {}):

Similarly, this expression compares two empty objects. Again, the comparison is based on reference.
The two empty objects are distinct instances in memory, so the result is also false.*/

//what is the output of this code with explanation
function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();

//the answer is:
//A
//C
//B
//because the the call-stack will pass the setTimeout function to the web api to wait till the callback queue is empty

/*
** what is the output of this code with explanation 
var num = 8;
var num = 10;
console.log(num);

will throw an error because you can't declare num twice

 */

//what is the output of this code with explanation
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Ahmed";
  let age = 21;
}
sayHi();

/* 
    undefined
ReferenceError: age is not defined
var name = 'Ayush': This line initializes the variable name with the value 'Ayush'. This assignment happens at the point where the variable is declared (due to hoisting).

let age = 21: This line declares and initializes the variable age with the value 21. Unlike var, variables declared with let are not initialized until the point in the code where they are declared
 */
