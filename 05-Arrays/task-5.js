// - - 

// ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);
// ```

function reduce(arr, cb, acc){
    if(!(Array.isArray(arr))){
        throw new Error ('First parameter required and has to be only array');
    }

    else if (!(typeof cb === 'function')){
        throw new Error ('Second parameter required and has to be only function');
    }

    else if (!(typeof acc === 'number' || typeof acc === 'string' )){
        throw new Error ('Third parameter required and has to be only string or number');
    }

    let number = acc;
    for(let  count = 0; count < arr.length; count++){
        number = cb(number, arr[count], count , arr);
    }
    return number;
}

const arr = [1,2,3];
const acc = 0;
let check = reduce(arr, function(acc, item, i, arr) {
    return item + acc;
}, acc);

console.log(check);
