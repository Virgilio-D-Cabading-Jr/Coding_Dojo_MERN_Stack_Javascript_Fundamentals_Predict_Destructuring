///////////////////////////////////////////////////////
//  PREDICT DESTRUCTURING MAIN
///////////////////////////////////////////////////////

console.log("******************************************");
console.log("Problem 1\n");

// Problem 1 Code
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

// Predict the output
console.log("::: Predicted Output :::");
console.log("Tesla");
console.log("Mercedes");

// Actual Output
console.log("\n::: Actual Output :::");
console.log(randomCar)
console.log(otherRandomCar)

