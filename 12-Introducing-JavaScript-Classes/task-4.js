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
        return arg2.charAt(0).toUpperCase() + arg2.slice(1);
    }

    ucWords(arg3){
        let assd = arg3.toLowerCase().split(" ")
        for(let i = 0; i < assd.length; i++){
            assd[i] = assd[i].charAt(0).toUpperCase() + assd[i].substring(1);
        }
        return assd.join(" ")
    }
}







const str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'


