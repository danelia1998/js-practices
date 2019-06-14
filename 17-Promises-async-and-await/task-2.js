const getCustomers = function(customers, countries) {
    num = 0
    for (each of customers){
        if (customers[num].hasOwnProperty('verified') && customers[num].verified == true && customers[num].id === countries[num].id ){
            if (countries[num].hasOwnProperty('country')){
                return Promise.resolve({...customers[num],...countries[num]})
            }else{
                return Promise.reject(`We don't have information about country for this customer: ${customer.name}`)
            }
        } ++num
    }
}   


const customers = [
    {
        id: 'A4',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex',
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
