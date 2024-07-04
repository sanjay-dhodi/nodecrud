require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");


const renderPageRoutes = require("./routes/renderPage");
const crudRoutes = require("./routes/crud");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(renderPageRoutes);
app.use(crudRoutes);

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err.toString());
  });

app.use((err, req, resp, next) => {
  const errrstatus = err.status || 500;
  const massage = err.message || "something wrong ";

  return resp.status(errrstatus).json({
    success: "false",
    errrstatus,
    massage,
  });
});

app.listen(3000, () => {
  console.log("3000 port started");
});
