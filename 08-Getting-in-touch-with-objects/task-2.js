const person = {
    rate:30,
    get salary() {
        const today = new Date();
        const day = today.getDate();
        return day * this.rate;
    }
};


Object.defineProperty(person, 'rate', {
    configurable: false,
    enumerable:false,
});

Object.defineProperty(person, 'salary',{
    configurable: false,
});


console.log(person.salary)





