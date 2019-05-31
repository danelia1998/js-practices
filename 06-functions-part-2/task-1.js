// Write your own implementation of function `bind`

// This function is waiting for next parameters:

// - First parameter - function for binding
// - Second parameter - link to this
// - Third parameter until ...n — parameters for binding function

// Example:

// ```javascript

function bind(getName, lnk, ...n){
    return () => getName.call(lnk, ...n);
}
 
const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};
 
 
const getName = obj.getName;
 
const f = bind(getName, {name: 'Pitter'}, 'My name');
 
console.log(f());