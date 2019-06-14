class MyString {
    constructor(){
    }
    reverse(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    ucFirst(arg2){
        let rest = arg2.slice(1)
        return arg2.charAt(0).toUpperCase() + rest
    }

    ucWords(arg3){
        let assd = arg3.split(" ")
        for(let i = 0; i < assd.length; i++){
            assd[i] = this.ucFirst(assd[i])
        }
        return assd.join(" ")
    }
}


const str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcDe')); // print 'Abcde'
console.log(str.ucWords('abcDe abcde abcde')); // print 'Abcde Abcde Abcde'


