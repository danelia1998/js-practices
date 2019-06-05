
Object.prototype.extend = function (source) {
    console.log(this);
    
    // console.log(source)
    for( key in source){
        // console.log(key)
        if (!(key in Object.getOwnPropertyDescriptor(this))){
            this += key,
        }
    }
}
// Object.defineProperties(Object.prototype, 'extend', {
//     value:extend
// })

const data = { a: 'a'}
const source = { a: 'A', b: 'b'}

data.extend(source)