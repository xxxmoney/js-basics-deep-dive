
// NOTE: this advanced section should be learned after going thorugh the basics in index.js!

// This is our example library script file
// We want to define some functions in this file, and have them availabile elsewhere
// This is used with EXPORT
// We use the export keyword
// There are many ways of doing this
// - Define the functions and export them later
// - Export the functions right away
// The exports itself are of two types - named and default

// This function won't be avalaible to outside - because it's not exported
function print(message) {
    console.log(message);
}

// These two methods have named export - because we export the methods with the export keyword
// This function is named exported - will be available to outside files
export function add(a, b) {
    return a + b;
}
// This function is also named exported
export function subtract(a, b) {
    return a - b;
}
// This function is default exported - meaning it's the default option
export default function calculate(a, b, action) {
    if (action === "add") {
        return add(a, b);
    } else if (action === "subtract") {
        return subtract(a, b);
    }

    return null;
}
