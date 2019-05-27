var login = 'Owner'

var message = (login == 'Pitter') ? 'hi' : (login == 'Owner') ? 'Hello' : (login == '') ? 'unknown' :'';
console.log(message);