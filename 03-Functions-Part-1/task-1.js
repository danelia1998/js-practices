// myFunction(2); // 8
f('Content'); // Error: parameter type is not a Number

function f(someNum) {
    if ((typeof someNum) == 'number'){
        console.log("this is number!")
    }else {
        throw new Error("parameter type is not a Number")
    }
}
