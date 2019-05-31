
// ```js
// getDivisors(12); // [1, 2, 3, 4, 6, 12]
// getDivisors('Content'); // Error: parameter type is not a Number
// getDivisors(0); // Error: parameter can't be a 0
// ```

function getDivisors(num) {
    let divisors = [];
    if (typeof num !== 'number') {
        throw new Error ('parameter type is not a Number')
    }else if (num <= 0) {
        throw new Error ("parameter can't be a 0")
    }else {
        for (let i = 1; i <= num; i++) {
            if (num % i == 0 ) {
                divisors.push(i)
            }
        }
    }
    return divisors
}


console.log(getDivisors(12))