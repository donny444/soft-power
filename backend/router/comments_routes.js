const express = require("express");
const ShowComments = require("../controller/comments_controller.js");
const AddComment = require("../controller/comment_controller.js");
const auth = require("../middleware/auth.js");
const route = express.Router();

route.get("/:thing", ShowComments);
route.post("/:thing", auth, AddComment);

module.exports = route;