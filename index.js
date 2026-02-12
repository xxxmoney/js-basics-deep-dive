
//
// 
// GUIDE TO BASICS OF JAVASCRIPT
//
//



//
// Intro - what's JavaScript
//

// JavaScript is a programming language - simlar to other languages such as C#, Python, etc
// Features which make JavaScript goated to some, garbage to others:
// - It's dynamic - meaning you don't have to define variable types
// - It's interpreted - meaning it "run directly"
// - It's mainly used for frontend development (although it can be used in backend also)



// 
// Where we can run JavaScript
//

// JavaScript is mainly used in web browser - for interacting with the website - by using the script tag or script reference
// But it can also be used outside of browser - using Node.js runtime environment
// I would like you to understand the RUNTIME (Browser or Node.Js) simply - they are just "black boxes" which can run the JavaScript code
// To make this example easier to understand - I recommend getting the Node.Js
// - Firstly make sure if you don't already have it - type `node -v` in terminal
// - If not, download it: https://nodejs.org/en/download
// If you now have node installed, great - you can actually run this whole files using node
// - ``node index.js`` - this will run the file and execute the code in it without browser



//
// Syntax
// 

// JavaScript syntax is similar to C# langauge (albeit without the typing)
// Statement - basically a line of code that does something - doesn't need to but should end with a semicolon ";"
//  - These can be usually - variable declarations, function calls, etc
/* Imagine some code on this line ending with ; */

// Code blocks - are a group of statements that are grouped together using curly braces {}
//  - These are usually used in functions, loops, conditionals, etc
//  - These have what's called scope - variables are not availaible outside of it, heh
{
    // Some statement can be here
}

// Comments - are used to add notes to your code - single line comments use // and multi-line comments use /* */ (like the ones used here)
/*
    This ia also a comment - multi-line - up to you which one you use
*/



//
// Data Types (values)
//

// In programming, we want to somehow tell the program that we want to use some data
// In these examples, we are just making statements with pure data - those statements don't do anything of value - it's just example
// Common data types:
// - Number - literally just number, may be whole number - integer - or decimal - float
125.67;
45;
// - String - a sequence of characters, used to represent text - defined using single or double quotes
// "Hello, World!";
// 'JavaScript is fun! Or maybe, well, nah.';
// - Boolean - represents a logical entity, can be either true or false
true;
false;
// - Array - a collection of items, defined using square brackets []
[1, 2, 3, 4, 5];
["apple", "banana", "cherry"];
// - Object - a collection of key-value pairs, defined using curly braces {}
({ name: "John", age: 30 });
({ brand: "Toyota", model: "Camry", year: 2020 });
// Not necessarily a data type, but important to mention - JSON - JavaScript Object Notation - a data format
// - It's essentially a string representation of an object or array - notice how it looks veeery similar to the object, it's just a string (remember this, it might be useful later)
'{"name": "John", "age": 30}';
'[1, 2, 3, 4, 5]';



//
// Let's name our values and store them - variables to rescue!
//

// Right, so now, we know how to make statements with some data, but how to actually use this data and store it?
// Introducing variables - a way to store and use date
// In JavaScript, we can declare variables using the keywords: "let" or "const"
// let - used for variables that can be set reassigned
let age = 25; // Notice how we don't use data types here
age = 26;
// const - used for variables that cannot be reassigned
const name = "Alice";
// name = "Bob"; // This would throw an error

// Important aspect that we can assign variables to other variables
const otherName = name;

// Numbers - just number, what to say
let x = 10;
x = 10.5

// Booleans - whether something is true or false, duh
let isActive = true;
isActive = false;

// Strings - sequence of characters
let greeting = "Hello";
greeting = 'Hi there!';

// Arrays - collection of something - like numbers, strings, etc
let numbers = [1, 2, 3];
numbers = [4, 5, 6];
// We can access elements in array using indexes - starting from 0
let firstNumber = numbers[0]; // firstNumber is 4
let secondNumber = numbers[1]; // secondNumber is 5
// We can also add elements to array
numbers.push(7); // numbers is now [4, 5, 6, 7]
// Or we can remove the last element
numbers.pop(); // numbers is now [4, 5, 6]
// Or remove the first element
numbers.shift(); // numbers is now [5, 6]

// Similarly, as with arrays, we can also use indexes to work with strings
const firstChar = greeting[0]; // firstChar is 'H'
const secondChar = greeting[1]; // secondChar is 'i'

// Objects - collection of key-value pairs
let person = { name: "Bob", age: 30 };
person = { name: "Charlie", age: 35 };
// We can access values using keys
let personName = person.name; // personName is "Charlie"
let personAge = person.age; // personAge is 35
// We can also add new key-value pairs
person.city = "New York"; // person is now { name: "Charlie", age: 35, city: "New York" }
// We can also access them this way - similar to arrays - we use key in square brackets
let personCity = person["city"]; // personCity is "New York"
// Or we can remove key-value pairs
delete person.age; // person is now { name: "Charlie", city: "New York" }

// IMPORTANT ASPECT: - there are two main type of variables
// - Primitive types - these store the actual data (number, string, boolean, etc)
// - Reference types - these store a reference to the data (array, object, etc)

// What does this mean? When we use primitive type and assign it to another variable, it copies the actual data
let numberOne = 10; // This creates new variable "numberOne" with value 10
const numberTwo = numberOne; // Variable "numberTwo" now holds a copy of the value of "numberOne" (meaning it holds number 10)
// If we now change "numberOne", "numberTwo" remains the same
numberOne = 20; // "numberOne" is now 20, but "numberTwo" is still 10

// With reference types, when we assign the variable, we assign the reference to the data
const array = [1, 2, 3]; // This creates a new variable with references the array
const anotherArray = array; // When we do this, "anotherArray" references the same array as "array"
anotherArray[0] = 5; // We set 5 to the first element of "array"
// This will also affect "array" - they both reference the same array
// You can imagine this basically as a pointer - when we create array variable, its created in memory and the variable contains the refrence
// So basically this variable just stores the reference - meaning if we assign its value to another variable - we are assigning the reference
// So that's why when we modify the "anotherArray", we are also modifying the "array"

// Objects are also reference types - same concept applies
const obj1 = { key: "value" }; // Create new object
let obj2 = obj1; // obj2 references the same object as "obj1"
obj2.key = "newValue"; // Modify the key in "obj2"
// This will also affect "obj1" - they both reference the same object

// Another IMPORTANT notice - for reference variables defined with const - we just cannot reassign, but we CAN modify it
// So this is valid
const myArray = [1, 2, 3];
myArray.push(4); // myArray is now [1, 2, 3, 4]
// Likewise for objects
const myObject = { a: 1, b: 2 };
myObject.c = 3; // myObject is now { a: 1, b: 2, c: 3 }
myObject.a = 10; // myObject is now { a: 10, b: 2, c: 3 }

// Regarding arrays and objects, we also have to introduce two 'types'
// - null - similar to c# - represents "no value" or "empty value"
let emptyValue = null; // This variable holds no value
// - undefined - now this is a bs of JavaScript - because it essentially has "two null types"
//  - easily explained, undefined is used when something is not defined - for example a variable which is not yet set, etc
//  - you might encounter undefined more often than null
//  - rule of thumb - undefined is used for general not defined variables, null is used when we explicitly want to say "no value"
let notAssigned; // This variable is declared but not assigned - its value is undefined
let undefinedVariable = undefined; // This variable is explicitly set to undefined

//
// Operating with operators
//

// Now as we know how to use data, store said data in variables, we would also like to somehow work with some data
// There are operators - symbols used to perform operations on data (thus also on variables holding data)
// Funnily enough, we already know 1 operator - the assignment operator "="
// - This operator assigns a value to a variable
let score; // We can also firstly create variable without value
score = 100; // Here we use the assignment operator to assign number 100 to variable "score"

// Other common operators:
// Arithmetic operators - mainly used to perform mathematical operations
let a = 10;
let b = 5;
const sum = a + b; // Addition, sum is 15
const difference = a - b; // Subtraction, difference is 5
const product = a * b; // Multiplication, product is 50
const quotient = a / b; // Division, quotient is 2
const remainder = a % b; // Modulus, remainder is 0   
a++; // Increment, a is now 11
b--; // Decrement, b is now 4
// Some also work for strings
const firstMessagePart = "Hello, ";
const secondMessagePart = "World!";
const message = firstMessagePart + secondMessagePart; // Concatenation, message is "Hello, World!"

// Comparison operators - used to compare two values - returns boolean result
const isEqual = (a == b); // Equality, isEqual is false
const isNotEqual = (a != b); // Inequality, isNotEqual is true
const isGreater = (a > b); // Greater than, isGreater is true
const isLess = (a < b); // Less than, isLess is false
const isGreaterOrEqual = (a >= b); // Greater than or equal to, isGreaterOrEqual is true
const isLessOrEqual = (a <= b); // Less than or equal to, isLessOrEqual is false    
// Fun fact - in JavaScript, comparison can be done lazily or strictly - examples above are lazy
// - When presented with different data types, JavaScript tries to convert them to a common type
const lazyEqual = (5 == "5"); // true, because "5" is converted to number 5
// On other hand, strict comparison checks both value and type
const strictEqual = (5 === "5"); // false, because types are different
// It's generally recommended to use strict comparison (=== and !==) to avoid unexpected type conversions shenanigans

// Logical operators - used to combine or invert boolean values
const boolA = true;
const boolB = false;
const andResult = boolA && boolB; // Logical AND, andResult is false
const orResult = boolA || boolB; // Logical OR, orResult is true
const notResult = !boolA; // Logical NOT, notResult is false
// These are mainly used in conditionals and loops - which we will cover later

// Null/undefined operators - used to provide a default value when dealing with null or undefined
// Imagine this scenario - we have an object
let user; // User is not yet defined - so its value is now "undefined"
// We could have some code which accesses the user
// Now that code could crash

//const userName = user.name; // This would crash
const userName = user?.name; // Instead, we can use this - and now it won't crash - the ? means if there is null or undefined, don't even try accessing the property (in this case name)

// We also have coalescing operator - this just tells it - what value to use if it's null or undefined
const displayName = user?.name ?? "Guest"; // If user or user.name is null/undefined, use "Guest"

//
// The buidling block of code bases - conditions
//

// Now, we might also want to have some code which execuites only in some cases
// For example we might have an object with user, user has age, and we would like to execute a code only if the age of user is greater or equal to 18
const someUser = { username: 'Shinei', age: 20 }; 
if (someUser.age >= 18) { // Notice we use comparison operator here - condition can take a boolean value
    someUser.legalAge = "Full"; // And this code only executes if the condition is true
}
else if (someUser.age >= 15) {
    someUser.legalAge = "Partial"; // This code executes if the first condition is false, but this one is true
}
else { // Else execuites if the condition in "if" is false - so in this case both previous conditions must be false to execute
    someUser.legalAge = "None"; // This code executes if the condition is false
}

// Interesting things about JavaScript - conditions not only take boolean values, but also regular values
// This is called truthy and falsy values
// So basically you can take "anything" and just put it in the condition
// JavaScript then evaluates the value
// There are some given truthy and falsy values for each data type

// Numbers, just numbers
// Falsy - 0, NaN (not a number)
// Truthy - any other number
if (0) {    
    // This code won't execute - 0 is falsy
}
if (42) {
    // This code will execute - 42 is truthy
}

// Sequence on characters? Strings!
// Falsy - empty string ""
// Truthy - any other string
if ("") {
    // This code won't execute - empty string is falsy
}
if ("Hello darkness my old friend") {
    // This code will execute - non-empty string is truthy
}

// Sequence of values - arrays
// Falsy - none
// Truthy - any array (even empty array) - important - you might think empty arrays are falsy, but they are not
if ([]) {
    // This code will execute - empty array is truthy
}
if ([1, 2, 3]) {
    // This code will execute - non-empty array is truthy
}

// Side note - if you want to check for empty array, use the length property - you can use the truthy of the length property, because it's a number
const arr = [];
if (arr.length) {
    // This code won't execute - length is 0, which is falsy
}
arr.push(1);
if (arr.length) {
    // This code will execute - length is 1, which is truthy
}

// Objects
// Falsy - none
// Truthy - any object (even empty object) - same as arrays, empty objects are also truthy
if ({}) {
    // This code will execute - empty object is truthy
}
if ({ key: "value" }) {
    // This code will execute - non-empty object is truthy
}

// Null and Undefined
// Falsy - both of them - null, undefined
// Truthy - none
if (null) {
    // This code won't execute - null is falsy
}
if (undefined) {
    // This code won't execute - undefined is falsy
}

//
// Looping with loops
//

// Great, now we know how to make variables, use conditions, but imagine this - how would execute same code multiple times?
// Intorducing loops - a breakthrough in looping technology

// There are two main types of loops
// - for loop - uses an index and condition how many times to loop
// - while loop - uses a condition to determine how many times to loop

// For loop example - we want to execuite the code 5 times
let iterationCount = 0;
for (let i = 0; i < 5; i++) { // Here we declare variable i, set condition i <= 5, and increment i by 1 each iteration
    iterationCount = iterationCount + 1; // This code executes 5 times, iterationCount will be 5 after the loop
    // iterationCount += 1; Note - we can also use this - this is just shorthand for the above line
    // Or even this - this is called increment operator
    // iterationCount++; - increments by one
}

// Amazing - now we know how to execuite code multiple times
// Let's use this for some more useful practice
// Imagine we have an array - and we might want to sum all the numbers in the array
const someNumbers = [1, 2, 3, 4, 5];
let someNumbersSums = 0;
for (let i = 0; i < someNumbers.length; i++) { // We use someNumbers.length to get the length of the array - we tell the for loop to go from 0 to length of the array minus 1 (minus 1 because the condition is less than)
    someNumbersSums += someNumbers[i]; // We can use the index to accesss the element in array - and because this goes through all indexes - it goes through all elements in array - in our case, calculating the sum of all numbers
}

// Great, now for the while lopp
let countdown = 5;
while (countdown > 0) { // Here we set the condition - while countdown is greater than 0
    countdown--; // We decrement countdown by 1 each iteration
    // This code will execute 5 times - when countdown reaches 0, the condition becomes false and the loop stops

    // We could of course also execuite other code here - same in the for loops
    // In the beginning, scope was mentioned - the thing in the curly braces "{}" (NOT the object, the code in curly braces) - you can imagine this as executing a scope multiple times
} 

// 
// Imagine a code block, but with name, and we can call it - functions!
// 

// Great, just amazing! Now we know how to create variables, use some conditions, repeat code using loops
// But let's now imagine this - what if we have code that we need to use in multiple places - like some code for addition, etc
// Wouldn't it be great to have something which can be "called" from multiple places?
// Well we are in luck, introducing the F U N C T I O N S

// We can think of functions as "named code blocks" - we give them a name, and we can call them by that name
// Let's look at this simple example
function doSomeSillyStuff() { // We use the "function" keyword, we then specify name of the function, and then we write the code block
    const sillyNumber = 69;
    const sillyMessage = "Lmao: "
    const finalSillyMessage = sillyMessage + sillyNumber; // This literally does nothing of value, just an example >]
}

// Great, we have a named code block, how to use it? Simple - let's call it!
doSomeSillyStuff(); // This calls the function - the code in the function will now execute
// You can imagine it as "placing the code block here" - the code block will be in this place and will be executed:
{
    const sillyNumber = 69;
    const sillyMessage = "Lmao: "
    const finalSillyMessage = sillyMessage + sillyNumber; // This literally does nothing of value, just an example >]
}

// Well this is great, but how do we make something of some value? 
// Let's thinkg - how would be this code block be useful? Hmmm, only if it could give us some value back...
// Fear not, we can to this - introducing "return"
// With "returh" keyword, the funciton can give us some value back - which we can use in our current code
function giveMeSomeSillyStuff() { // It's a similar function to the one above, but notice how now we use the "return" keyword
    const sillyNumber = 69;
    const sillyMessage = "Lmao: "
    const finalSillyMessage = sillyMessage + sillyNumber;

    return finalSillyMessage;
}
// This function can be used like this
const sillyResult = giveMeSomeSillyStuff(); // We have called the function, it excecuited its code block in its scope, and then gave us a value which we can use in our scope
const ultimateSillyMessage = sillyResult + "!!!"; // Of course the variable can be used here - and it has the value returned - in this case "Lmao: 69" - the value "calculated" in the function

// Now with this, the usefulness of functions increased by at least 49% or maybe 51%

// But... What if we could go.. Even FURTHER BEYOND?
// What if we could give the function some data to work with? - not just having to work with data from outside scope, but give it data directly - basically pass the data to it?
// The parameters - a way to pass data to functions
// With this, we can now start making some useful functions
function addTwoNumbers(num1, num2) { // In the little parentheses, we define parameters - just the names - as this is JavaScript, we don't need to define types here (so funnily, you can call the function with "anything")
    const sum = num1 + num2;    
    return sum; // We return the sum of the two numbers (of course, we could directly return num1 + num2, but this is for example clarity)

    // By the way, code here won't get execuited - as the return statement exits the function
}
// Now this is some useful funciton, yeh?
const resultOfAddition = addTwoNumbers(10, 20); // We call the function, it returns number 30 (because its logic uses the + operator (which adds numbers) and returns result)

// You can imagine it as something like this:
//const anotherResultOfAddition = addTwoNumbers(5, 10); - commented, below is the "represantion" of the used function
// The variable addTwoNumbersResult is used for this example - to get the value from the code block scope
const num1 = 10; // The first parameter
const num2 = 20; // The Second parameter
let addTwoNumbersResult;
{
    const sum = num1 + num2;
    addTwoNumbersResult = sum;
}
const anotherResultOfAddition = addTwoNumbersResult;

// Hopefully you understand functions now - they are essential in making a clean, reusable code



//
// Naming things - making an order out of wild west
//

// You might have been thinking - but if we can name the variables almost however we like, why couldn't we use names like "x", "y", "data", "my_super_value", "MyVariable123", etc
// Technically you could
// But try thinking again - why should we try to write code that is understandable to others?
// Well, because usually, we don't work alone on proejcts - we work with other people
// Setting up guidelines and rules helps with helping everyone involved - that everyone can somewhat understand code of others
// Basically the end goal is to have guidelines to not make this full wild west

// Rule of thumb - try make make the name of thing you name - be it variable, function, object, etc - 
// - Short, concise and descriptive
// - Do NOT use abbreviations unless commonly known
// - Do NOT use overly long names
// - Do NOT use non-descriptive names such as x, y, etc (exceptions in for loop, etc)
// For example, we could have a function which adds two numbers and returns the result, let's think of some examples of naming it
// - takeTwoNumberAddThemTogetherAndReturn - this one is too descriptive, too long, imagine calling this function in code just to add two numbers
// - calc - this doesn't tell us much - we might presume calc means calculate - but what to calculate?
// - addNumbers - this is concise, short and descriptive - one thing I would exclude is numbers - depends, but we don't need to tell parameter name (this is usually clear from the method parameters themselves)
// - add - this is even shorter, still descriptive - as we know what add means
function add(numberOne, numberTwo) { // This is an example of short and descriptive function name, while the meaning is also clear - that's because of the parameters
    return numberOne + numberTwo;
}
// overall, there are many hard things in programming, one of them is indeed naming variables
// Because there's no concrete - one-rule-them-all specific guide - there are just some "loose" guidelines, and you have to do with it
// Small bit of advice - try thinking about the overall context and usage of the things you name - in the example above, we name the function add - why not be more descriptive? Because what the function does is already aparent from its parameters
// In similar sense, if we had some code block, we could name things shorter - because the meaning of the variable may be apparent from code context 
function calculateAreaOfRectangle(width, height) { // Notice how here we use descriptive name - because without "OfRectangle" in name, it wouldn't be apparent from parameters what area does it calculate"
    const area = width * height; // Here, we could just name the variable "area" - because the context is apparent = we don't need to name it "rectangleArea"
    return area;
}
// This method should obvisouly be named many ways - like calculateRectangleArea, getAreaOfRectangle, etc
// When making your own project, try sticking to "one way" - like using "Of" in names for calculations, etc
// When working in a team, try following the team/company guidelines - they might have their own naming conventions
// Overall, try survive the naming hell pls >]

// Anyways, the guidelines might differ company to company, team to team, etc
// But there are usually high-level guidelines for languages
// Usually, casing guidelines are language based

// Casing - how to write names and separate words
// There are many ways to write variable names, some of them are named
// - camelCase - first word lowercase, subsequent words start with uppercase letter - myVariableName
// - PascalCase - each word starts with uppercase letter - MyVariableName
// - snake_case - words are separated by underscores, all lowercase - my_variable_name
// - kebab-case - words are separated by hyphens, all lowercase - my-variable-name (not usable in JavaScript variable names, but used in file names, etc)
// But wait, you might ask, why is there a need for casing?
// Well, because usually, we name functions and variables with using multiple words - and we just cannot use spaces, that's not supported in variable names
// So we need some way to separate the words - thus the casing styles
// So for example, as we have already did, let's write a variable name
const userAge = 30; // This is camelCase - used for variable and function names in JavaScript
function getUserName() { // Also camelCase - function name
    return "Alice";
}
const UserProfile = { name: "Bob", age: 25 }; // This would be PascalCase - not used for variable names in JavaScript



//
// Not all functions need to be defined by us (and alas not all objects?)
//

// Great, as we know now how to define our functions, let's look at some built-in functions in JavaScript
// Essentially, we will be using (or misusing) global objects - these objects are available everywhere in the code
// These global objects provide us with the "built in" functions

// Console - the magical place where we can print stuff
// Printing to console - seems uninteresting, but it's actually very useful
// It helps with understanding, going through code, etc
// In JavaScript, we can use the console.log() function to print stuff to console - very similar to C#'s Console.WriteLine()
console.log("Can we get much higher?"); // console.log prints the provided parameter - in this case string
// We can also supplement it with other data types
console.log(42); // prints number 42
console.log(true); // prints boolean true
console.log([1, 2, 3]); // prints array [1, 2, 3]
console.log({ key: "value" }); // prints object { key: "value" }

// console.log can take multiple parameters - it will print them all, separated by space
console.log("The cake is", true, "?", "or is it lie?", 666); // prints "The cake is true ? or is it lie? 666"


// JSON
// Remember the string repesentation of object/array we mentioned at the start?
// Now, we do not need to manually create these strings - we can use the JSON global object
// It has two main functions - JSON.stringify() and JSON.parse()
// JSON.stringify() - takes an object or array and converts it to JSON string
const userObject = { name: "Johan", personalInfo: null, secretInfo: undefined };
const userJsonString = JSON.stringify(userObject); // userJsonString is now '{"name":"Johan","personalInfo":null}' - notice how the undefined value is omitted in JSON string - this is the use case of null - as we want to represent "no value"
// JSON.parse() - takes a JSON string and converts it back to object or array
const jsonString = '{"name":"Johan","personalInfo":null}';
const parsedObject = JSON.parse(jsonString); // parsedObject is now { name: "Johan", personalInfo: null } - notice how the parsed object has no undefined value, as it was not present in the JSON string


// Side note - we might not mention this much here in the basics, but console is a global object - meaning it's available everywhere in the code
// In client side code in browser, it's a part of window object - which is the global object in browser environment - the window object provides useful APIs we can work with
// But this is a just a mention of this - course of this basics is focused mainly on pure JavaScript, not browser APIs, etc



//
// Modern JavaScript Syntax - some cool stuff
//

// So far, we have been working with simple JavaScript syntax - similar to other C languages
// But JavaScript has its own special syntax for some usages

/* Arrow Functions */
// Let's start with alternative way of writing function - just imagine it as alternative syntax
// It's main advantage is when we use anonymous function - functions without name - like passing function directly in some other function, etc
function calculateNumber(number, calculationFunction) { // Here the variable can be function
    return calculationFunction(number); // Because we presume the variable is function, we can cal it
}

// Example usage
const result = calculateNumber(5, function (num) { // Here we pass an anonymous function - a function without name - as the second parameter
    return num * num; // This function takes a number and returns its square
});

// With arrow functions, we can do this
const arrowResult = calculateNumber(5, (num) => { // This is an arrow function - notice the syntax - we use "=>" to separate parameters and function body
    return num * num; // This function does the same thing as the previous one - it takes a number and returns its square
});

// Isn't it pretty cool? Similar syntax, shorter
// Oh, one more thing - when returning value directly, arrow function can be even shorter, look
const evenShorterArrowResult = calculateNumber(5, num => num * num); // Wow - so short, right?


/* Spread Operator */

// Now imagine a use case when we would like to create new array with same elements
// Right now, we would do it something like this
const mineArray = [1, 2, 3];
const mineArrayCopy = [];
for (let i = 0; i < mineArray.length; i++) { // We would need to loop and append for each element
    mineArrayCopy.push(mineArray[i]);
}

// But now watch this syntax
const mineArrayCopyWithSpread = [...mineArray]; // This little thingy - the three dots - "..." - this is the spread operator
// What spread operator does is that it "extracts" elements, for example from array - we can then use this to initialize new array - cool, right?
console.log("Mine Array Copy is not same as original:", mineArrayCopyWithSpread === mineArray); // False, different references

// Also, this works for objects as well
const mineObject = { key1: "value1", key2: "value2" };
const mineObjectCopyWithSpread = { ...mineObject }; // Also copy
console.log("Mine Object Copy is not same as original:", mineObjectCopyWithSpread === mineObject); // False, different references

// IMPORTANT - the spread operator creates a SHALLOW copy - meaning in this case:
const nestedObject = { key: "value", nested: { nestedKey: "nestedValue" } };
const nestedObjectCopy = { ...nestedObject }; 
console.log("Nested Object Copy is not same as original:", nestedObjectCopy === nestedObject); // False, different references
console.log("Nested Object Copy's nested is SAME as original's nested:", nestedObjectCopy.nested === nestedObject.nested); // IMPORTANT - true, because the nested object still uses the SAME reference

// Also, with this syntax, you can create arrays/objects with additional values/properties
const extendedMineArray = [...mineArray, 4, 5]; 
const extendedMineObject = { ...mineObject, key3: "value3" };
// Both of these have copy of the values from original, but also have some additional values/properties

/* Destructuring Operator */
 
// Very similar to Spread Operator, is getting specific values from object
// Like not every property using the spread operator, but just specific ones
const anotherUser = { name: "Alice", age: 30, city: "New York" };
const { city } = anotherUser; // Here we can just get a variable city from anotherUser
console.log("City extracted using destructuring:", city);
// We can also use aliases here:
const { name: userNameAlias } = anotherUser;
console.log("Name extracted using destructuring with alias:", userNameAlias);



/* Rest Parameter - honorable mention */

// Just a quick mention - this is similar to params in C#
// Meaning we can have loads of parameters - like loads of numbers

// Example
function sumAllNumbers(...numbers) { // The "..." here is the rest parameter
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
const sumAllNumbersResultFiveParameters = sumAllNumbers(1, 2, 3, 4, 5); // Here we have 5 parameters
const sumAllNumbersResultTwoParameters = sumAllNumbers(10, 20); // Here we have 2 parameters
console.log("Sum of 1, 2, 3, 4, 5 is:", sumAllNumbersResultFiveParameters);
console.log("Sum of 10, 20 is:", sumAllNumbersResultTwoParameters);


/* Template Literals */

// Also a cool mention - with backticks - "`" in string, we can directly include variables in the string (like C#'s string interpolation)
const someRandomNumber = 88;
const messageWithTemplateLiteral = `Just a number with literal: ${someRandomNumber}.`;
console.log(messageWithTemplateLiteral);

/*  */



//
// Classes
//

// Now, it wouldn't be a "full language" without some OOP, eh?
// Introducing - classes
// Yes, even JavaScript has classes

// Firstly, let's understand what class is
// As we now know, we understand objects - a collection of key-value pairs
// Class is a blueprint for creating objects
// Additionally, classes can have methods - functions associated with the class - that can operate on the data within the class

// Let's do some simple example with person
class Person {
    // This way we can define fields - these are properties of the class - basically the key-value pairs of the object
    name;
    age; 

    // This is contructor - a special method called when creating the object
    // As it's a method, it has parameters
    // It's usual purpose is to set initial values for the fields - like in here
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // This is a method - a function associated with the class
    getGreetMessage() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`; // Important keyword here is "this" - it refers to the current instance of the class (like we can have some object with some name and age, this refers to that specific object)
    }
}

// Let's create an instance of person
const personInstanceOne = new Person("Diana", 28); // We use the "new" keyword to create a new instance of the class - this calls the constructor
console.log(personInstanceOne.name); // We can access the fields of the instance - this will be "Diana"
console.log(personInstanceOne.age); // Of course we can also access age - this will be 28
const greetMessage = personInstanceOne.getGreetMessage(); // We can call the method on the instance - this will be "Hello, my name is Diana and I am 28 years old."
console.log(greetMessage);

// We can create multiple instances of the class
const personInstanceTwo = new Person("Ethan", 35);
const anotherGreetMessage = personInstanceTwo.getGreetMessage(); // This will be "Hello, my name is Ethan and I am 35 years old."
console.log(anotherGreetMessage);


// Let's try more complex example - with private fields
class BankAccount {
    accountNumber; // Usual field
    #balance; // But what is this? - this is a private field - meaning it cannot be accessed from outside the class
    #password; // Another private field

    constructor(accountNumber, initialBalance, password) {
        this.accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.#password = password;
    }

    deposit(amount) {
        if (amount <= 0) {
            return false; // Invalid amount
        }

        this.#balance += amount;
        return true;
    }
    withdraw(amount, password) {
        if (password !== this.#password) {
            return false; // Invalid password
        }

        if (amount <= this.#balance) {
            this.#balance -= amount;
            return true;
        } else {
            return false; // Not enough balance
        }
    }

    getBalance(password) {
        if (password === this.#password) {
            return this.#balance;
        } else {
            return null; // Invalid password
        }
    }
}

const account = new BankAccount("123456789", 1000, "securePassword123");
// We can work with this instance of BankAccount
account.deposit(500);
console.log(account.withdraw(2000, "anotherPassword")); // false - incorrect password
console.log(account.withdraw(2000, "securePassword123")); // false - not enough balance
console.log(account.withdraw(300, "securePassword123")); // true - withdrawal successful

// We can also access the account number
console.log(account.accountNumber); // "123456789"
console.log(account.getBalance("securePassword123")); // 1200
console.log(account.getBalance("wrongPassword")); // null

// But we cannot access the balance directly - because it's private!
// console.log(account.#balance); // This would throw an error

// Now, classes have also other speical feature - such as getters, setters and static methods/properties

class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    // Getter is used to run a function, return value, but use it like a property
    // In this case, we can have private fields, getters to access them, but no setters - making the fields effectively read-only from outside the class
    get width() {
        return this.#width;
    }
    get height() {
        return this.#height;
    }

    get area() {
        return this.width * this.height;
    }

    // Setter - similar to getter, but used to set value
    set dimensions(size) {
        this.#width = size;
        this.#height = size;
    }

    // Static method - belongs to the class itself, not to instances
    static calculatePerimeter(width, height) {
        return 2 * (width + height);
    }
}

const rectangle = new Rectangle(10, 5);
// rectangle.#width = 20; // This would throw an error - cannot access private field
// But we can use the getters:
console.log(rectangle.width); // 10
console.log(rectangle.height); // 5
console.log(rectangle.area); // 50

// The setter also works
rectangle.dimensions = 30;
console.log(rectangle.width); // 30
console.log(rectangle.height); // 30

// To use the static method, we must use the Rectangle class itself
const perimeter = Rectangle.calculatePerimeter(2, 4); // 12
console.log(perimeter);

// Last but not least - inheritance
// A way to have a class inherit properties and methods from another class

// We define simple animal class
class Animal {
    name; // Public field name

    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise.`;
    }
}

// The extends keyword means inheritance - now Squirrel has access to things Animal has, including the method
class Squirrel extends Animal { // Squirrel class inherits from Animal class
    // Notice how we don't define the field here

    constructor(name) {
        // Keyword super is used to call the constructor of the parent class - so of the Animal class
        super(name);
    }
}

// We can also do another interesting thing - change the behavior of the inherited method
class Dog extends Animal { // Dog class inherits from Animal class
    constructor(name) {
        super(name); // Call the constructor of the parent class
    }

    // With this, we override the speak method from Animal class
    speak() {
        return `${this.name} barks.`; // Override the speak method
    }
}

const squirrel = new Squirrel("Sammy");
console.log(squirrel.speak()); // "Sammy makes a noise."

const dog = new Dog("Buddy");
console.log(dog.speak()); // "Buddy barks."



//
// Asynchronous operations
//

// So far, we have been (mostly) executing code sequentially - synchronously
// There are situations when we need to execute code not in synchronous way

// First thing to undertstand - browser JavaScript in single-threaded - meaning we are not really doing any parralelism
// What we are doing is "cheating" - with the usage of Event Loop (https://javascript.info/event-loop)
// - TLDR - there is a big loop (basically while(true)) which runs and looks at what is hould execute - it takes things to execute from different queues - the main code queue, microtasks queue and macrotasks queue
// - there are two main queues - for the main code and for the asynchronous code
// - The asynchronous code has two sub queues - microtasks and macrotasks
//  - Microtasks - "true" asynchronous operations - promises, async/await, etc
//  - Macrotasks - some callbacks which should be executed - setInterval, setTimeout, DOM events, etc
// The Event Loop is looking at these queues and is taking thingys to run from them
// - It firstly looks at the main code queue - if there is something to execute, it executes it
// - If there is nothing to execute in the main code queue, it looks at the microtasks queue - if there is something to execute, it executes it
// - If there is nothing to execute in the microtasks queue, it looks at the macrotasks queue - if there is something to execute, it executes it

// Making heads or tails out of this
// - Firstly, our main JavaScript code gets executed - like the code we have been writing so far
// - Then, if we have used any Microtasks - like Promises, this gets executed - but ONLY if there is not other code to be executed not (so we have essentially gone to the bottom of the script file)
// - After this, if there are no Microtasks (thus also no main code to execute), Mactotasks get executed - like setTimeout


/* Macrotasks (setInterval, setTimeout) */

// Let's start with Macrotasks - as they might be easier to understand
// The example is setInterval and setTimeout
// Both of them take some sort of callback
// And this callback gets executed after specified time (in milliseconds)

// setTimeout - executes the callback once after the specified timeout
setTimeout(() => {
    console.log("This is a setTimeout callback - it executes once after 2 seconds");
}, 2000); // The callback will execute once after 2000 milliseconds (2 seconds)
// So how will it work - all the code here in this script file get executed - including this 
// The setTimeout function set the callback on the Macrotask queue
// And it says - ok, this can get executed after 2 seconds - so after 2 seconds, if there is no other code to execute, this callback will get executed
// Meaning when you run this code, this code should hang for at least 2 seconds and then print the message

// setInterval - executes the callback repeatedly, with a fixed time delay between each call
const intervalId = setInterval(() => {
    console.log("This is a setInterval callback - it executes every 3 seconds");
}, 3000); // The callback will execute every 3000 milliseconds (3 seconds)
// But that's not good - this will keep running forever
// That's also why we have captured the result of setInterval to variable
// - Because it is the id of the interval
// - With this, we can kill it when we want - with clearInterval function

// Let's cheakily use another setTimeout to kill the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId); // This will stop the interval from executing further
    console.log("Interval has been cleared - it won't execute anymore");
}, 10000); // This will execute once after 10 seconds - it will clear the interval

// The clear method also exists for setTimeout - it's called clearTimeout - it works the same way - you capture the id of the timeout, and then you can clear it before it executes


/* Microtasks (Promise) */

// Great, but what are Microtasks? 
// Let's start with the most prominent example - Promise
// Promise is simply something "promised" to be done in the future
// You can also image it as a "task" which has some state
// - Pending - the initial state, the task is not yet completed
// - Fulfilled - the task is completed successfully, and has a result
// - Rejected - the task is completed with an error, and has a reason for the rejection

// Let's make an example of creating a promise:
const resolvedPromise = new Promise((resolve, reject) => {
    resolve("Value");
});
// With this, we have created a promise - the method inside is a callback - it takes two parameters - resolve and reject - these are functions we can call to change the state of the promise
// So in the example above, we call the resolve function - meaning the promise will be Fulfilled
const rejectedPromise = new Promise((resolve, reject) => {
    reject("Error");
});
// In this case, we call the reject function - meaning the promise will be Rejected

// But only with this, Promises would be kinda useless
// We need a way to work with them - like do something on Fullfillment, or on Rejection
// For this, we have .then() and .catch() methods
resolvedPromise.then((value) => {
    console.log("Promise fulfilled with value:", value);  // The callback in "then" gets called on Fulfillment of the promise - the value passed to resolve function is passed as parameter to the callback
}
).catch((error) => {
    console.log("Promise rejected with error:", error);  // This would get called on Rejection of the promise - so it won't get called here
});

rejectedPromise.then((value) => {
    console.log("Promise fulfilled with value:", value); // This won't get called - because the promise is rejected, not fulfilled
}
).catch((error) => {
    console.log("Promise rejected with error:", error); // This will get called - because the promise is rejected - the error passed to reject function is passed as parameter to the callback
});

// This whole won't make much sense for this usage, but imagine we call some method - for example some method for getting data from server
// This method would return promise
// This way, we could easily set callbacks on what to do when the data is received succcessfully, or if there is an error
// Because of this, we don't have to worry when it will happend
// - Because we have specified the callback, once the data is received, "then" is called
// - If there is an error, "catch" is called

// We also have an option to execute a callback regardless of the outcome - whether the promise is fulfilled or rejected - with .finally() method
resolvedPromise.finally(() => {
    console.log("Promise has been settled (either fulfilled or rejected)");
});

/* Microtasks (Promise - async/await) */
// Good, so we now understand the premise of promises (heh)
// But this syntax could get clunky fast - especially if we have multiple asynchronous operations, and we need to chain them
// - we would end up with a "callback hell" - where we have multiple nested callbacks
// For this reason, there is a new syntax for working with asyncrhonous operations - async/await

// The syntax is rather simple - let's create a new promise first
const somePromise = new Promise((resolve, reject) => {
    resolve("Async/Await is cool!");
}); // We have created a new promise and resolved it with a value

// Now, instead of using .then() and .catch(), we can use async/await
// Along with try/catch
// TLDR for try catch - this syntax is used to handle errors
// If something throws an error, we can use try catch to catch that error
// - We can for example log the error, and let other code below run

// Anyways, the await keyword can be used in function with async keyword
// Let's create a function to demonstrate this:
async function getData() { // See that we first specified the async keyword - with this we can use await
    try {
        const somePromiseResult = await somePromise; // Here we use await - something similar to .then(), but we can get the result in this scope directly
        console.log("Promise fulfilled with value:", somePromiseResult); 
    }
    catch (error) {
        console.log("Error caught:", error); // If there was an error, we would get it here
    }
}

const getDataPromise = getData(); // We call the function to see the result
// Important note - as this function is async, it returns a promise
// What we know about promises - they get executed AFTER the current code

// Another thing - .then() syntax and async/await syntax can get comined
// So we could for example use .then() on the getDataPromise

getDataPromise.then(() => {
    console.log("Function getData has completed"); // This will get called once the getData function has completed - meaning the promise returned by getData is fulfilled
});



//
// Fetch API
//

// As we now understand the aync operations, let's look ata very practical example of this
// The Fetch API
// - TLDR - a way to make HTTP requests from JavaScript
// - So in other words, how to get data from server

// Horaay, finnaly, we can get some data, let's do it
// The fetch function is called with the URL
// By default, the HTTP request is GET
const getPromise = fetch("https://jsonplaceholder.typicode.com/todos/1"); 
// The fetch function returns a promise - which gets fulfilled once the response is received
// Keep in mind as it is a promise, we have to handle it as promise - so either .then() syntax or async/await syntax - to get the data from the response

// Let's get the data
async function getDataFromGetPromise() {
    const response = await getPromise; // We await the promise returned by fetch - this will give us the response object
    const jsonData = await response.json(); // We then have to call .json() to get json from it
    // If it was only text, we would use .text(), or in other formats such as blob .blob(), etc
    console.log("Data received from fetch:", jsonData); // This will log the data received from the fetch request   
}
getDataFromGetPromise();

// The Fetch method has also other parameters - such as setting the method (POST, PUT, DELETE, etc), setting headers, body, etc
// For example, if we wanted to make a POST request with some JSON data, we could do it like this:
const postPromise = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // We set the method to POST
    headers: {
        "Content-Type": "application/json" // We set the content type to JSON
    },
    body: JSON.stringify({ value: 'Some Text' }) // We set the body of the request - we have to stringify the JSON data
});

async function getDataFromPostPromise() {
    const response = await postPromise;
    const jsonData = await response.json();
    console.log("Data received from POST fetch:", jsonData);
}
getDataFromPostPromise();

// With this, now you should be able to understand how to get data from server, how to handle async requests, etc - GREAT!


//
// JSDoc
//

// As we know, JavaScript is dynamically typed - meaning we don't have to specify types for variables, function parameters, etc
// But what if we had a way to define at least what the types should be?
// JSDoc is a way to add type annotations and documentation to JavaScript code

// Let's do an example right away on an example funciton

/**
 * Adds two numbers
 * 
 * @param {number} numberOne - The first number
 * @param {number} numberTwo - The second number
 * @returns {number} The sum of the two numbers
*/
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

// And that's really it - it just specified what the types should be, along with some commentary - pretty neat, eh?
// By the way, this also works for variables, objects, etc - you can specify types for them as well

/**
 * @type {string}
 */
const someString = "Hello, JSDoc!";
const someObject = {
    /**
     * @type {number}
     * This is the age of the person
     * 
     *  @example
     * // This is how you can use this property
     * someObject.age = 30;
     */
    age: 25
};


