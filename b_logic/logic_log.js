/* import modules */
const { print } = require("print_console_log");
const { createUser, connectUser } = require("../functions_bdd_users/bdd_user");
const {
  generateToken,
  passwordCompare,
} = require("../functions_bdd_users/bdd_user");
/* import modules */

exports.login_userControleur = async (req, res, next) => {
  
  let user_login = {
    email: req.body.email,
    password_login: req.body.password,
  };

  let connect_wait = await connectUser(
    user_login.email,
    user_login.password_login
  );

  if (connect_wait !== null) {
    let hash_password = connect_wait.password;

    let password_check = await passwordCompare(
      user_login.password_login,
      hash_password
    );

    if (password_check) {
      let token_rep = generateToken(connect_wait._id);
      let reponse_json = {
        user_name: connect_wait.user_name,
        id: connect_wait._id,
        token: token_rep,
      };
      return res.status(200).json(reponse_json);
    } else {
      return res.status(400).json({ message: "verifier vos ID" });
    }
  }
  if (connect_wait === null) {
    return res.status(400).json({ message: "verifier vos ID" });
  }
};

exports.create_userCotroleur = async (req, res, next) => {
  let user = {
    name: req.body.nom,
    email: req.body.email,
    password_in: req.body.password,
  };

  let reponse = await createUser(user.name, user.email, user.password_in);
  let reponse_bool = Boolean(reponse);

  if (reponse_bool) return res.status(201).json({ message: "signup user ok" });
  if (!reponse_bool)
    return res.status(401).json({ message: "signup user not ok" });
};

