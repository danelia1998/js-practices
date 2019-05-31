
var arrayFill = function(arg1, cb){
    if(!((typeof arg1 === 'number') || (typeof arg1 === 'string') ||(typeof arg1 === 'array'))){
        throw new Error ('First parameter required and has to be only number, string, object array');
    }
    if(!(typeof cb === 'number')){
        throw new Error ('Second parameter required and has to be only number');
    }
    let eachValue = [];
    for(var count = 0; count < cb; count++){
        eachValue.push(arg1);
    }
    return eachValue;
}


let check = arrayFill('x',5);
console.log(check);

