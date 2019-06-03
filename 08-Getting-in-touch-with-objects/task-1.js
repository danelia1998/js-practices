const person = {
    get salary() {
        const today = new Date()
        const nextMonth = new Date()
        nextMonth.setMonth(today.getMonth()+1)
        nextMonth.setDate(1)
        const daysLeft = (nextMonth - today) /  8.64e7;
        if (daysLeft > 20){
            return "good salary"
        }else{
            return "bad salary"
        }
    }
};

console.log(person.salary);



