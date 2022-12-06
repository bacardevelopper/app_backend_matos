// import modules
const express = require("express");
const { login_userControleur } = require("../b_logic/log/login_function");
const { create_userControler } = require("../b_logic/log/signup_function");



// config modules
let routes_user = express.Router();
routes_user.post("/signup", create_userControler);
routes_user.post("/login", login_userControleur);

module.exports = routes_user;
