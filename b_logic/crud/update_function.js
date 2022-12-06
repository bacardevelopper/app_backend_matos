let model_matos = require("../../models/model_config_objet");
const { print } = require("print_console_log");
const { findUserIdAndName } = require("../../functions_bdd_users/bdd_user");

let msgReussite = "modification apporté";
let msgEchec = "modification non apporté";

exports.fct_updateItem = async (req, res, next) => {
  print(req.body);
  let idUser = req.user_decoded.data;
  let idItem = req.body.id_item;
  let dateReq = req.body.date;
  let avisReq = req.body.avis;
  let lieuReq = req.body.lieu;
  let pseudoName = await findUserIdAndName(idUser);
  pseudoName = pseudoName.user_name;
  let dataPush = { pseudo: pseudoName, dateReq };

  let matos = await model_matos.findOne({ _id: idItem });
  await matos.updateOne({ avis: avisReq, lieu: lieuReq }, (err, doc) => {
    if (err) {
      return res.status(400).json({ message: msgEchec });
    } else {
      return res.status(200).json({ message: msgReussite });
    }
  });
  matos.flux.push(dataPush);
  await matos.save();

  return res.status(200).json({ message: msgReussite });
};

exports.fct_updateMany = (req, res, next) => {};
