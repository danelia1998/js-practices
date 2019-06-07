Object.defineProperty(Object.prototype, 'extend', {
    value(source) {
        for (let key of Object.keys(source)) {
            if(!(key in this)){
                Object.defineProperty(this, key, Object.getOwnPropertyDescriptor(source, key))
            }
        }
    }
})

const data = { a: 'a' };
const source = { a: 'A', b: 'b' };

Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); //false