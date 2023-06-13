const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("combined"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () =>
  console.log(`Example app listening at http://localhost:3000`)
);
