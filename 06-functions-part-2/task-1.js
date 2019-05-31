// Write your own implementation of function `bind`

// This function is waiting for next parameters:

// - First parameter - function for binding
// - Second parameter - link to this
// - Third parameter until ...n — parameters for binding function

// Example:

// ```javascript


const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};

const getName = obj.getName;

const f = bind(getName, {name: 'Pitter'}, 'My name');

function bind(names, arg1, agr2){
    let p = new Person(arg1.name);
    if (this instanceof Person) {
        this.names = names;
    } else {
        throw new Error('You must use keyword new with Person');
    }
};

console.log(f()); // My name: Pitter



