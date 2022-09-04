const mongoose = require("mongoose");

let SchemaInst = mongoose.Schema;
// model
let model_materiel = new SchemaInst({
  nom: { type: String, required: true },
  batterie: { type: Number },
  avis: { type: String },
  flux : { type : Array }
});

module.exports = mongoose.model('model_materiel', model_materiel);