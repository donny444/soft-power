require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/soft-power").
    catch(error => console.log("Can't connect to database"));
mongoose.connection.on("connected", () => console.log("Database connected"));
mongoose.connection.on("error", () => console.log("Database error occured"));

const routes = require("./router/routes.js");
const thingsRoutes = require("./router/things_routes.js");

app.use("/", routes);
app.use("/things", thingsRoutes);

module.exports = app;