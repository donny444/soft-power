const express = require("express");
const { Things, SpecificThing } = require("../controller/things_controller.js");
const route = express.Router();

route.get("/", Things);
route.get("/:_id", SpecificThing);

module.exports = route;