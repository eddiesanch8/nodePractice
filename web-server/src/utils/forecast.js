const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=c3bebdc2823598f5e839294ddd795a3a&query=${longitude},${latitude}&units=f`;
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to API", error);
    } else if (body.error) {
      callback("error, unable to find location", body.error);
    } else {
      callback(
        undefined,
        `It is currently: ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees fahrenheit and the sky is ${body.current.weather_descriptions}`
      );
    }
  });
};

module.exports = forecast;
