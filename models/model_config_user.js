const mongoose = require("mongoose");

let SchemaInst = mongoose.Schema;

// model
let model_user = new SchemaInst({
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  poste : { type : String}
});

module.exports = mongoose.model("model_user", model_user);
