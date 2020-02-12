function getIP(json) {
    var ipAddress = json.ip
    localStorage.setItem('ip', ipAddress)
}

var ipAddress = localStorage.getItem('ip')

var queryURL = 'http://api.ipstack.com/' + ipAddress + '?access_key=1d9caf0d18492415cbdbea74d0036473'


console.log(queryURL)

var settings = {
    "url": queryURL,
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    console.log(`${response.city},${response.region_name}`);

    location = `${response.city},${response.region_name}`

});
