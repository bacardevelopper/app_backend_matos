let model_matos = require("../../models/model_config_objet");
let model_user = require("../../models/model_config_user");
const { print } = require("print_console_log");

exports.fct_read = async (req, res, next) => {
  let idItem = req.params.id;
  let dataFindOne = await model_matos.findOne({ _id: idItem });

  if (dataFindOne) {
    return res.status(200).json(dataFindOne);
  } else {
    return res.status(401).json({ message: "dont find item" });
  }
};

exports.fct_readAll = async (req, res, next) => {
  console.log("REQUETE BIEN RECU");
  let userDecoded = String(req.user_decoded.data);
  let data = await model_user.findOne({ _id: userDecoded });
  let userNameRes = data.user_name;
  let idUser = data._id;

  model_matos.find((err, doc) => {
    if (doc) {
      return res.status(201).json({doc});
    } else {
      return res
        .status(401)
        .json({ message: "erreur verifier votre connexion" });
    }
  });
};
