// import modules
const express = require("express");
const { fct_create } = require("../b_logic/crud/create_function");
const { fct_updateItem } = require("../b_logic/crud/update_function");
const { fct_delete, fct_deleteMany } = require("../b_logic/crud/delete_function");
const { fct_readAll, fct_read } = require("../b_logic/crud/read_function");
const auth = require("../middleware/authentification");
// config routes
let routes_crud = express.Router();
routes_crud.post("/create", auth, fct_create);
routes_crud.post("/update", auth, fct_updateItem);
routes_crud.post("/delete", auth, fct_delete);
routes_crud.post('/delete-many', auth, fct_deleteMany);
routes_crud.get("/read-all/:token", auth, fct_readAll);
routes_crud.get("/read-item/:id/:token", auth, fct_read);

module.exports = routes_crud;
