
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
"Hello, World!";
'JavaScript is fun! Or maybe, well, nah.';
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
// Or we can remove key-value pairs
delete person.age; // person is now { name: "Charlie", city: "New York" }

// IMPORTANT ASPECT: - there are two main type of variables
// - Primitive types - these store the actual data (number, string, boolean, etc)
// - Reference types - these store a reference to the data (array, object, etc)

// What does this mean? When we use primitive type and assign it to another variable, it copies the actual data
const numberOne = 10; // This creates new variable "numberOne" with value 10
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

// TODO:



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


