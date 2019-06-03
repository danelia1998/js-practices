
const checkSpam = function(source, example){
    if (typeof source == 'string' && typeof example == 'string'){
        let transform = source.toLowerCase();
        let exTransf = example.toLowerCase();
        let first = transform.indexOf(exTransf)
        if (first == 1){
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