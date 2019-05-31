
f(9,3,2); // 3
// f('s',9,3) // Error: all parameters type should be a Number

function f(a,b,c) {
    let  fin = 0
    if ((typeof a) == 'number' && (typeof b) == 'number' && (typeof c) == 'number'){
        fin = (a - b) / c;
    }else {
        throw new Error('all parameters type should be a Number');
    }
    return fin 
}

console.log(f(9,3,2))
