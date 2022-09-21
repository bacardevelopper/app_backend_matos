let model_matos = require("../../models/model_config_objet");
let Model_user = require("../../models/model_config_user");
exports.fct_read = (req, res, next) => {
    return res.status(200).json({ message: "fonction read ok" });
  };
  
  exports.fct_readAll = async (req, res, next) => {
    let userDecoded = String(req.user_decoded.data);
    let data = await Model_user.findOne({ _id: userDecoded });
    let userNameRes = data.user_name;
    let idUser = data._id;
  
    model_matos.find((err, doc) => {
      if (doc) {
        return res.status(201).json({ userNameRes, idUser, doc });
      } else {
        return res
          .status(401)
          .json({ message: "erreur verifier votre connexion" });
      }
    });
  };
  