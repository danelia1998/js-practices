var list = [1, 2, -4, 3, -9, -1, 7]
var newList = []
f(list)

function isPositive(i) {
    if (i < 0){
        return false
    }else if (i > 0){
        return true
    }else {
        throw new Error('parameter type is not a Number')
    }
}

function f(list2) {
    for (each of list2){
        if (isPositive(each) == true){
            newList.push(each);
        }
    }
}
console.log(newList)


