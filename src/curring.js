/* function add(a, b) {
  return a + b
} */

//By using curring technique
// we can get the same result but passing only one argument

function add(a) {
  return function (b) {
    return a + b
  };
}

const add1 = add(1)(5);
// with curring instead of separate our arguments with ","
//we separarte them with "()"

//shorter way 
const add2 = a => b => a + b;