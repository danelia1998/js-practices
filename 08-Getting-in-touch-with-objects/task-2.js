const person = {};

Object.defineProperties(person, {
    rate:{
        value: 0,
        writable: true,
        configurable: false,
        enumerable:false,
    },

    salary: {
        get() {
            const today = new Date();
            const day = today.getDate();
            return day * this.rate;            
        },

        set() {
            throw new Error('you cant use it');
        }
    }
})


person.rate = 30
console.log(person.salary)





