// c3bebdc2823598f5e839294ddd795a3a
// Dont share this key

const request = require("postman-request");
const geoCode = require("./utils/geocode");
// const toFahrenheit = function (c) {
//   let f = c * 1.8 + 32;
//   return f;
// };

// const url =
//   "https://api.weatherstack.com/current?access_key=c3bebdc2823598f5e839294ddd795a3a&query=37.8267,-122.4233";
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.error("unable to connect to API", error);
//   } else if (response.body.error) {
//     console.log(response.body.error);
//   } else {
//     const data = response.body;
//     const currentData = data.current;
//     const locationData = data.location;
//     console.log(error);
//     console.log(
//       `It is currently: ${currentData.temperature} degrees celsius in ${
//         locationData.name
//       }. It feels like ${toFahrenheit(
//         currentData.feelslike
//       )} degrees fahrenheit and the sky is  ${currentData.weather_descriptions}`
//     );
//   }
// });

// const geoUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXNhbmNoZXoxMTIiLCJhIjoiY21ldDFjM2ZjMDh0cDJrb25lcDFtNDRpZCJ9.aaONUWlwbU-JiZL00Za83g&limit=1";
// request({ url: geoUrl, json: true }, (error, response) => {
//   if (error) {
//     console.error("unable to connect to API", error);
//   } else if (response.body.features.length === 0) {
//     console.log("location not found");
//   } else {
//     const data = response.body.features;
//     const long = data[0].center[0];
//     const lat = data[0].center[0];
//     console.log(data, long, lat);
//   }
// });

geoCode("New York", (error, response) => {
  console.log("Error", error);
  console.log("Response", response);
});
