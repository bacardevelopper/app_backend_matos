const { print } = require("print_console_log");
let model_matos = require("../../models/model_config_objet");

exports.fct_create = (req, res, next) => {
  print(req.body);

  // nouveaux modele
  let model_post = new model_matos({
    nom: req.body.nom,
    avis: req.body.avis,
    lieu: "",
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
