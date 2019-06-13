

const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';


const send = function(url) {
    return new Promise((resolve, reject) => {
        get(url, (err, response, body) => {
            if (response.status == 200) {
                resolve('success');
            }
            reject(`We have error, status code: ${response.status}`);
        });
    });
}



send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });