
// isEven(3); // false
isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number


function isEven(i) {
    if (i % 2 == 0){
        console.log(true)
        return true
    }else if (i % 2 == 1){
        console.log(false)
        return false
    }else{
        throw new Error('parameter type is not a Number')
    }
}



