
// f([1,2,3]);
// // 1
// // 2
// // 3
// f(1,2,3) // Error: parameter type should be an array
// f('Content') // Error: parameter type should be an array
// f([]) // Error: parameter can't be an empty



function getDivisors(arr) {
    console.log(Array.isArray(arr))
    if (Array.isArray(arr) == false) {
        throw new Error ('parameter type should be an array')
    }else if (arr.lenght < 1 ) {
        throw new Error ("parameter can't be an empty")
    }else {
        let  i = 0
        return getDivisors(arr[i], i++)
    }
}


console.log(getDivisors([1,2,3]))