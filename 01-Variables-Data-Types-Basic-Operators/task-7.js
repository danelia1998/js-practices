var arr = [1,2,3,4];

var a = 0;

for(i of arr){
    if(i%2==0){
        a = a + i
    }
}

console.log(a)