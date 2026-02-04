
// 
// Import/Export
//

// Note: this advanced section should be learned after going thorugh the basics in index.js
// Without further ado, let's do it!

// Now, we know the basics of JavaScript, its caveats, etc
// But we might run into a wall relatively quickly - how do we structure larger applications?
// We might need to separate our code into multiple files, and have those files interact with each other

// Introducting - modules
// Modules are a way to split our code into files for better organization, resuability, maintainability, etc

// There are different ways of enabling this, dependant on environment
// In browser, we had to use script tags with type="module"
// In Node.js, we can use ES Modules option or use the .mjs extension

// For now, head to the "library.mjs" file, after you go through it all, go back here - we will be using import here

// Now, I hope you have gone through the "library.mjs" file
// We can now IMPORT - using the import keyword
// - This just means getting the code from another module/file into the current one

// This import will get the default export (or whole if there is no default export)
import mySuperDuperCalculate from "./library.mjs"; // As it's default, we can name it whatever we want 
const result = mySuperDuperCalculate(5, 3, "add"); // And this will work - it wil just call the default exported function - which is calculate

// We can also get the named export using this syntax
import { add, subtract } from "./library.mjs"; // Note the curly braces for named imports
const sum = add(10, 7); // This will call the named exported add function
const difference = subtract(10, 7); // This will call the named exported subtract function
console.log(`Result: ${result}, Sum: ${sum}, Difference: ${difference}`);

// This whole syntax can also be done in one line, we can use aliases with "as" keyword too
// import someOtherNameBecauseThisIsDefaultExportAndICanNameItHoweverIWantDuh, { add as addition, subtract as subtraction } from "./library.mjs";

