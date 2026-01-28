
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



//
// Variables
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
// Operators
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
let user; // User is not yet defined
// We could have some code which accesses the user
// Now that code could crash

//const userName = user.name; // This would crash
const userName = user?.name; // Instead, we can use this - and now it won't crash - the ? means if there is null or undefined, don't even try accessing the property (in this case name)

// We also have coalescing operator - this just tells it - what value to use if it's null or undefined
const displayName = user?.name ?? "Guest"; // If user or user.name is null/undefined, use "Guest"

//
// Conditions
//

// TODO:


//
// Loops
//

// TODO:


// 
// Functions
// 

// TODO:
