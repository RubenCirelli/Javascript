const repeatHello = (callback) => {
    setInterval(callback, 1000);
}
// Conciseness: Arrow functions can be more concise than traditional function expressions.
// this keyword: In traditional functions, the this keyword represents the object that called the function, which can be the window, 
// the document, a button, or whatever. With arrow functions, the this keyword always represents the object that defined the arrow function. 
// 6This can be beneficial when working with object methods or event handlers in JavaScript.

repeatHello(() => console.log("Hello"));