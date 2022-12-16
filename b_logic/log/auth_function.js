let model_user = require("../../models/model_config_user");
const { print } = require("print_console_log");

exports.auth_fct = async (req, res, next) => {
  let userDecoded = String(req.user_decoded.data);
  let data = await model_user.findOne({ _id: userDecoded });

  if (!data || data == null) {
    return res.status(401).json({ message: "erreur verifier votre connexion" });
  } else {
    let userNameRes = data.user_name;
    let poste = data.poste;
    let idUser = data._id;
    return res.status(201).json({ userNameRes, idUser, poste });
  }
};
