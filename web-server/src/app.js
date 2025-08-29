const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const app = express();

// handeblars config
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// this now becomes the root, setting up express config
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//------------------- Setting up homepage -----------------\\

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Eduardo",
    filler: "custom stuff",
  });
});

//------------------- Setting up homepage -----------------\\

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    filler: "no way dude you got this",
    name: "eduardo",
  });
});
//------------------- Setting up homepage -----------------\\

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    filler: "lorem lorem impsum ipsum",
    image: "supposed to be an immage path",
  });
});
//------------------- Setting up weather -----------------\\
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Please provide address",
    });
  } else {
    geoCode(
      req.query.address,
      (error, { latitude, longitude, location } = {}) => {
        if (error) {
          return res.send({ error });
        }
        forecast(latitude, longitude, (error, forecastData) => {
          if (error) {
            return res.send({ error });
          }
          res.send({
            forecast: forecastData,
            location,
            address: req.query.address,
          });
        });
      }
    );
  }
});

//-------------- Setting up 404 wildcards ----------------\\

app.get("/about/*", (req, res) => {
  res.render("404", {
    title: "404",
    filler: "link to page",
  });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    filler: "link to page",
  });
});

app.get("/*", (req, res) => {
  res.render("404", {
    title: "404",
    filler: "link to page",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    filler: "link to page",
  });
});
app.listen(3000, () => {
  console.log("hiii ");
});
