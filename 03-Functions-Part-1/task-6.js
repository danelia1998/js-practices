
// isEven(3); // false
// isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number


function isEven(i) {
    if (i % 2 == 0){
        return true
    }else if (i % 2 == 1){
        return false
    }else{
        throw new Error('parameter type is not a Number')
    }
}


console.log(isEven(4))
