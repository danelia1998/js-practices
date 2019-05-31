f(1); // Sunday
// f(2); // Monday
// f(8); // Error: parameter should be in the range of 1 to 7
// f('1'); // Error: parameter type is not a Number

function f(a) {
    if ((typeof a) == 'number'){
        if (a == 1){
            return 'Sunday'
        }
        else if (a == 2){
            return 'Monday'
        }
        else if (a == 3){
            return 'Tuesday'
        }
        else if (a == 4){
            return 'Wednesday'
        }
        else if (a == 5){
            return 'Thursday'
        }
        else if (a == 6){
            return 'Friday'
        }
        else if (a == 7){
            return 'Saturday'
        }else {
            throw new Error('parameter should be in the range of 1 to 7');
        }
    }else {
        throw new Error('all parameters type should be a Number');
    }
}

console.log(f(1))
