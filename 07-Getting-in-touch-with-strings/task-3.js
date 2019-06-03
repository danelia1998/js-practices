
const truncate = function(string, maxlength){
    if (typeof string == 'string' && typeof maxlength == 'number'){
        let n = string.length
        if (n > maxlength){
            let numb = n - maxlength
            let newString = string.substring(0,numb) + "..."
            return newString
        }
    }else{
        throw new Error("first parameter isnt string of second isnt number")
    }

}


console.log(truncate("danelia david daneli dsasdf sfdgdh gvd", 15))