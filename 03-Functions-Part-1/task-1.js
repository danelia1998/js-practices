// myFunction(2); // 8
f(2); // Error: parameter type is not a Number

function f(someNum) {
    if ((typeof someNum) == 'number'){
        return someNum ** 3
    }else {
        throw new Error("parameter type is not a Number")
    }
}

console.log(f(2))
