const express = require("express");
const Tmd = require("../controller/tmd_controller.js");
const Login = require("../controller/login_controller.js");
const Register = require("../controller/register_controller.js");
const route = express.Router();

route.get("/tmd", Tmd);
route.post("/login", Login);
route.post("/register", Register);

module.exports = route;