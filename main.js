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

console.log("\n******************************************");
console.log("Problem 2\n");

// Problem 2 Code
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log("::: Predicted Output :::")
console.log("syntax error: name is not declared")
console.log("otherwise: othername = Elon")

// Actual Output
console.log("\n::: Actual Output :::")
// console.log(name);
console.log(otherName);

console.log("\n******************************************");
console.log("Problem 3\n");

// Problem 3 Code
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

// Predict the output
console.log("::: Predicted Output :::")
console.log("12345");
console.log("Syntax error: password not defined in person object")

// Actual Output
console.log("\n::: Actual Output :::")
console.log(password);
console.log(hashedPassword);

console.log("\n******************************************");
console.log("Problem 4\n");