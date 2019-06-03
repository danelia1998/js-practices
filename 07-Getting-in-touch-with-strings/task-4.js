const extractCurrencyValue = function (val) {
    if (typeof val == 'string'){
            let withoutFirst = val.substring(1)
         let newOne = withoutFirst++
        return newOne
    }else{
        throw new Error("parameter isn't string")
    }
}



console.log(extractCurrencyValue("$120"))
