const isCustomerVerified = function(customer) {
    if (customer.hasOwnProperty('verified') && customer.verified == true){
        return Promise.resolve(true)

    }else{
        return Promise.reject(`Customer is not verified`)
    }
}





const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex'
};

// isCustomerVerified(personFirst)
//     .then(status => console.log(status)) // true
//     .catch(error => console.log(error))
    
isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified

