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

// Problem 4 Code:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

// Predict the output
console.log("::: Predicted Output :::")
console.log("5")
console.log("2")

// Actual Output
console.log("\n::: Actual Output :::")
console.log(first == second);
console.log(first == third);

console.log("\n******************************************");
console.log("Problem 5\n");

// Problem 5 Code:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

// Predict the output
console.log("::: Predicted Output :::")
console.log("value")
console.log("[1, 5, 1, 8, 3, 3]")
console.log("0")
console.log("syntax error: secondKey is undefined")

// Actual Output
console.log("\n::: Actual Output :::")
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);