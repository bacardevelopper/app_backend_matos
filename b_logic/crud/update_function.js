let model_matos = require("../../models/model_config_objet");
const { print } = require("print_console_log");
const { findUserIdAndName } = require("../../functions_bdd_users/bdd_user");

exports.fct_updateItem = async (req, res, next) => {
  let idUser = req.user_decoded.data;
  let idItem = req.body.id_item;
  let dateReq = req.body.date;
  let pseudoName =  await findUserIdAndName(idUser);
  pseudoName = pseudoName.user_name;
  let dataPush = { pseudo: pseudoName, dateReq };
  
  let matos = await model_matos.findOne({ _id: idItem });
  matos.flux.push(dataPush);
  await matos.save();

  return res.status(200).json({message : "modification apporté"});
};
exports.fct_updateMany = (req, res, next) => {};
