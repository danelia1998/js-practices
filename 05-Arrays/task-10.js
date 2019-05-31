var reverse = function(arr){
    if(!(Array.isArray(arr))){
        throw new Error ('First parameter required and has to be only array');
    }
    if(!arr.length){
        throw new Error ('empty array');
    }
    let eachValue = [];
    arr.forEach(function(item){
        eachValue.unshift(item)
    })
    return eachValue;
}

const arr = [3,2,1];
let check = reverse(arr);
console.log(check);
