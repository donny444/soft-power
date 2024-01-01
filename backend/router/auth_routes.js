const express = require("express");
const Comment = require("../controller/comment_controller.js");
const route = express.Router();

route.post("/comment", auth, Comment);

module.exports = route;