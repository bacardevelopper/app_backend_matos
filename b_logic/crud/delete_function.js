let model_matos = require("../../models/model_config_objet");
const { print } = require("print_console_log");

exports.fct_delete = async (req, res, next) => {
  let idPost = req.body.id;

  model_matos.deleteOne({ _id: idPost }).then((value) => {
    let dataCountInt = value.deletedCount;
    
    if (dataCountInt === 1)
      return res.status(200).json({ message: "suppression reussit" });
    if (dataCountInt === 0)
      return res.status(400).json({ message: "aucun élément a été supprimé" });
  });
};

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
  let sizeList = list_delete.length;

  if (sizeList > 0) {
    deleteManyId(list_delete)
      .then((data) => {
        return res.status(200).json({ message: "matériels supprimés" });
      })
      .catch((e) => {
        return res.status(400).json({ message: "echec de suppréssion" });
      });
  }

  if (sizeList === 0) {
    return res.status(400).json({ message: "c'est vide" });
  }
};
