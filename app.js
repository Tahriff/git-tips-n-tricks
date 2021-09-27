const express = require("express");
const morgan = require("morgan");
// const bodyParser = require("body-parser");
//load environment variables

const app = express();

app.use(morgan("dev")); //write dev logs automatically
// app.use(bodyParser.urlencoded({ extended: false })); //describe the type of url to parse
// app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  res.status(201).json({
    message: "Hello World"
  });
});

//handle errors
//error when routes is not found
app.use((req, res, next) => {
  const error = new Error("Routes not found");
  error.status = 404;
  next(error);
});

//handle other errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
