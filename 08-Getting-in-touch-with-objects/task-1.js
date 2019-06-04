
const person = {
    get salary() {
        let newVar = new Date();
        let monthDays = new Date(newVar.getFullYear(), newVar.getMonth() + 1, 0).getDate();
        if (newVar.getDate() < (monthDays - 20)) {
            return 'Good salary';
        } else {
            return 'Bad salary';
        }
    }
 };

 
 console.log(person.salary);