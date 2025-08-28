const express = require("express");
// const html = require("../public/index.html");
const path = require("path");

const app = express();

// this now becomes the root
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send({ products: [1, 4, 6, 10] });
});

app.listen(3000, () => {
  console.log("return ");
});
