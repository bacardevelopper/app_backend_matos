const { createUser, connectUser } = require("../../functions_bdd_users/bdd_user");
const {
  generateToken,
  passwordCompare,
} = require("../../functions_bdd_users/bdd_user");
/* import modules */

exports.create_userControler = async (req, res, next) => {
  
    let user = {
      name: req.body.nom,
      email: req.body.email,
      password_in: req.body.password,
      poste : "c_num"
    };
  
    let reponse = await createUser(user.name, user.email, user.password_in);
    let reponse_bool = Boolean(reponse);
  
    if (reponse_bool) return res.status(201).json({ message: "signup user ok" });
    if (!reponse_bool)
      return res.status(401).json({ message: "signup user not ok" });
  };