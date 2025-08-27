const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const search = process.argv[2];

if (!search) {
  console.log("please input valid string");
} else {
  geoCode(search, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log("Error", error);
    }
    forecast(latitude, longitude, (error, data) => {
      if (error) {
        return console.log("error", error);
      }
      console.log(location);
      console.log(data);
    });
  });
}
