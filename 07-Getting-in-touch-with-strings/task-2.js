
const checkSpam = function(source, example){
    if (typeof source == 'string' && typeof example == 'string'){
        let first = source.toLowerCase();
        let second = example.toLowerCase();
        let result = first.indexOf(second);
        if (result == 1){
            return true;
        }
        else{
            return false;
        }
    }else{
        throw new Error("first or second parameters aren't string")
    }

}

console.log(checkSpam('source', 'ou'))