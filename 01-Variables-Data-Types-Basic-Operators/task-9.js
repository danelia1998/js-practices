var firstC;
var secondC;

for (firstC=2; firstC<=10; firstC++) {
    var level = true;
    for (secondC = 2; secondC < firstC; secondC++) {
        if (firstC % secondC == 0) {
            var level = false;
            break;
        }
    }
    if(level){
        console.log(firstC)
    }
}
