f(1); // Sunday
// f(2); // Monday
// f(8); // Error: parameter should be in the range of 1 to 7
// f('1'); // Error: parameter type is not a Number

function f(a) {
    if ((typeof a) == 'number'){
        if (a == 1){
            console.log('Sunday')
        }
        else if (a == 2){
            console.log('Monday')
        }
        else if (a == 3){
            console.log('Tuesday')
        }
        else if (a == 4){
            console.log('Wednesday')
        }
        else if (a == 5){
            console.log('Thursday')
        }
        else if (a == 6){
            console.log('Friday')
        }
        else if (a == 7){
            console.log('Saturday')
        }else {
            throw new Error('parameter should be in the range of 1 to 7');
        }
    }else {
        throw new Error('all parameters type should be a Number');
    }
}
