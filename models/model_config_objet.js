const mongoose = require("mongoose");

let SchemaInst = mongoose.Schema;
// model
let model_materiel = new SchemaInst({
  nom: { type: String, required: true },
  avis: { type: String },
  lieu : { type : String},
  disponible : { type : Boolean}
});

module.exports = mongoose.model('model_materiel', model_materiel);