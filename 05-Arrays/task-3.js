

function every(firstPar, secondPar) {
    if (Array.isArray(firstPar) != true){
        throw new Error('First parameter required and has to be only array')
    } if (typeof secondPar !== "function"){
        throw new Error('Second parameter required and has to be only function')
    }
    else{
        let eachOne = false
        for (var count = 0; count < arr.length; count++){
            eachOne = secondPar(arr[count], count, arr)
            if(!eachOne){
                break;
            }
        }
        return eachOne;
    }
}

const arr = [1,2,3];

let e = every(arr, function(item, i, arr) {
    return item < 4;
});

console.log(e)
