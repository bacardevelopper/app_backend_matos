let model_matos = require("../models/model_config_objet");
const { print } = require("print_console_log");

exports.fct_read = (req, res, next) => {
  return res.status(200).json({ message: "fonction read ok" });
};

exports.fct_readAll = (req, res, next) => {
  model_matos.find((err, doc) => {
    if (doc) {
      return res.status(201).json(doc);
    } else {
      return res
        .status(401)
        .json({ message: "erreur verifier votre connexion" });
    }
  });
};

exports.fct_update = (req, res, next) => {};
exports.fct_delete = (req, res, next) => {};

// fonction creation d'un materiel
exports.fct_create = (req, res, next) => {
  print(req.body);

  // nouveaux modele
  let model_post = new model_matos({
    nom: req.body.nom,
    batterie: req.body.batterie,
    avis: req.body.avis,
    flux: req.body.flux,
  });

  const save_data = () => {
    model_post.save((err, doc) => {
      if (doc) {
        return res.status(201).json({ message: "fonction create ok" });
      } else {
        return res.status(401).json({ message: "non enregistré" });
      }
    });
  };

  save_data();
};
