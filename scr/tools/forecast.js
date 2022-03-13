const request = require("request");
const forecast = (latitude, longtitiude, callback) => {
    const url =
        "http://api.weatherapi.com/v1/current.json?key=c30c62152bba41c983771238220903&q=" +
        latitude +
        "," +
        longtitiude;
    request({ url, json: true }, (error, response) => {
        // low level error
        if (error) {
            callback("Unable to connect weather service", undefined);
        } else if (response.body.error) {
            callback(response.body.error.message, undefined);
        } else {
            callback(
                undefined,
                response.body.location.name +
                " IT is " +
                response.body.current.condition.text +
                " and Temp is " +
                response.body.current.temp_c
            );
        }
    });
};

module.exports = forecast;