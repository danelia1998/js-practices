let  firstC;
let  secondC;

for (firstC=2; firstC<=10; firstC++) {
    let level = true;
    for (secondC = 2; secondC < firstC; secondC++) {
        if (firstC % secondC == 0) {
            level = false;
            break;
        }
    }
    if(level){
        console.log(firstC)
    }
}
