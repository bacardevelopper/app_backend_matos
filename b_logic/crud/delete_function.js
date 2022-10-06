let model_matos = require("../../models/model_config_objet");
const { print } = require("print_console_log");

exports.fct_delete = (req, res, next) => {};

// fonction suppression de plusieurs
async function deleteManyId(listArrayId) {
  let sizeArray = listArrayId.length;
  for (let sizeAwait = 0; sizeAwait <= sizeArray; sizeAwait++) {
    let dataDelete = await model_matos.deleteOne({
      _id: listArrayId[sizeAwait],
    });
  }
}

exports.fct_deleteMany = async (req, res, next) => {
  let list_delete = req.body.array;
  deleteManyId(list_delete)
    .then((data) => {
      return res.status(200).json({ message: "matériels supprimés" });
    })
    .catch((e) => {
      return res.status(400).json({ message: "echec de suppréssion" });
    });
};
