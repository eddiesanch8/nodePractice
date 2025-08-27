const request = require("postman-request");

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZXNhbmNoZXoxMTIiLCJhIjoiY21ldDFjM2ZjMDh0cDJrb25lcDFtNDRpZCJ9.aaONUWlwbU-JiZL00Za83g&limit=1`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to server", undefined);
    } else if (response.body.features.length === 0) {
      callback("cannot find location given", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        locations: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
