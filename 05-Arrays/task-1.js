const arr = [1,2,3];
let  d = function (item, i, arr){}

forEachOne(arr, function(item, i, arr) {
    console.log(item);
    console.log(i);
    console.log(arr)
});


function forEachOne(firstPar, secondPar) {
    if (Array.isArray(firstPar) != true){
        throw new Error('First parameter required and has to be only array')
    } if (typeof secondPar !== "function"){
        throw new Error('Second parameter required and has to be only function')
    }
    else{
        for (let  count = 0; count < arr.length; count++){
            secondPar(arr[count], count, arr)
        }
    }
}

