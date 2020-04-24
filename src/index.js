// ##Programming Paradigms / style of programming
// Functional
// it means decomposing the problem to small functions
// Some languages specifically designed for funtion programming as
// Clojure - Haskell - JavaScript


// Object-oriented
// Procedural
// Event-driven

//Javascript functions are first-classs citizens
// It means we treat them as any others variables
// We can pass them as an argument
// Return them from other functions



/* function sayHi() {
  return "Hi you!";
}

let fn = sayHi;
fn()
sayHi()


function greet(fnMessage) {
  console.log(fnMessage());
}


greet(sayHi) */

function sayHi() {
  return function () {
    return "Hi You!"
  }
}

let fn = sayHi();
let message = fn();

//--------------------------------------------------------------
// ## Higher-order-function
//It is a function which take a function as an argument
// or return it or both

let numbers = [1, 2, 3];
numbers.map(number => number * 2)

setTimeout(() => console.log('Hello!'), 1000);

//---------------------------------------------------------------
// ## Function Composition

let input = "    javaScript    ";
let output = "<div>" + input.trim() + "</div>"

// we can use function programmin to solv this propblem also
// trim
// wrapInDiv
const trim = str => str.trim();
const wrapInDiv = str => `<div> ${str} </div>`;
const toLowerCase = str = str.toLowerCase();

//This is what we call function composition in functional programing
const result = wrapInDiv(toLowerCase(trim(input)));