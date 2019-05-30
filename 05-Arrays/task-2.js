

function filterNew(firstPar, secondPar) {
    if (Array.isArray(firstPar) != true){
        throw new Error('First parameter required and has to be only array')
    } if (typeof secondPar !== "function"){
        throw new Error('Second parameter required and has to be only function')
    }
    else{
        let filtered = []
        for (var count = 0; count < arr.length; count++){
            const newContainer = arr[count];
            const eachOne = secondPar(newContainer, count, arr)
            if(eachOne){
                filtered.push(newContainer)
            }
        }
        return filtered;
    }
}

const arr = [1,2,3];

let filtered = filterNew(arr, function(item, i, arr) {
    return item > 1;
});

console.log(filtered)



