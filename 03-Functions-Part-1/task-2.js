// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number


function f() {
    var summing = 0
    for (each of arguments){
        if (typeof each == 'number'){
            summing = summing + each;
        }else {
            throw new Error('all parameters type should be a Number');
        }
    }
    console.log(summing)
}




