var arr = [2, -5, 9, -15, 0, 4, -7];
var sum = 0;

for (i of arr){
    if(i > 0) {
        sum = sum + i;
    }
}

console.log(sum)
