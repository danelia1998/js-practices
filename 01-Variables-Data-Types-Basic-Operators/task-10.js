let  numbers = [6,2,3,4,5,6]

for (num of numbers){
   for (let i = 0; i<numbers.length; i++){
       if (numbers[i] < numbers[i+1]){
           temp = numbers[i]
           numbers[i] = numbers[i+1]
           numbers[i+1] = temp
       }
   }
}
console.log(numbers)