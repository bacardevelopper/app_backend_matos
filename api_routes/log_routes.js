// import modules
const express = require('express');
const fct_log = require('../b_logic/logic_log');
const auth = require('../middleware/authentification');

// config modules
let routes_user = express.Router();
routes_user.post('/signup', fct_log.create_userCotroleur);
routes_user.post('/login', fct_log.login_userControleur);

module.exports = routes_user;