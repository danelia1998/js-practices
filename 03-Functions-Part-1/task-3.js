
f(9,3,2); // 3
// f('s',9,3) // Error: all parameters type should be a Number

function f(a,b,c) {
    if ((typeof a) == 'number' && (typeof b) == 'number' && (typeof c) == 'number'){
        fin = (a - b) / c;
    }else {
        throw new Error('all parameters type should be a Number');
    }
    console.log(fin)
}




