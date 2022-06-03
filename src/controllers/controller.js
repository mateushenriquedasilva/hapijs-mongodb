const User = require("../models/User");

// home
const home = (request, h) => {
  return { msg: "Server On🔥" };
};

// create user
const createUser = async (request, h) => {
  const { name, email, password } = request.payload;

  const user = {
    name,
    email,
    password,
  };

  try {
    await User.create(user);
    return { msg: "Usuário inserido no sistema com sucesso!" };
  } catch (error) {
    return { err: error };
  }
};

module.exports = {
  home,
  createUser,
};
