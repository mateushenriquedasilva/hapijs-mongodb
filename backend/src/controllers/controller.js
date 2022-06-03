const User = require("../models/User");

// home
const home = (request, h) => {
  return { msg: "Server On🔥" };
};

// find all users
const findAllUsers = async (request, h) => {
  try {
    const users = await User.find();
    h.response("ok").code(200);
    return { users };
  } catch (error) {
    return { err: error };
  }
};

// find user by id
const findUserById = async (request, h) => {
  const id = request.params.id;
  try {
    const user = await User.find({ _id: id });
    h.response("ok").code(200);
    return { user };
  } catch (error) {
    return { err: error };
  }
};

// create user
const createUser = async (request, h) => {
  const { name, email, password } = request.payload;

  const user = {
    name,
    email,
    password,
  };

  const validation = await User.find({ email: user.email });

  if (validation.length) {
    return { err: "Email inválido!" };
  }

  try {
    await User.create(user);
    h.response("created").code(201);
    return { msg: "Usuário inserido no sistema com sucesso!" };
  } catch (error) {
    return { err: error };
  }
};

// update user
const updateUser = async (request, h) => {
  const id = request.params.id;
  const { name, email, password } = request.payload;

  const user = {
    name,
    email,
    password,
  };

  const validation = await User.find({ email: user.email });
  if (validation.length && validation[0].email != user.email) {
    return { err: "Email inválido!" };
  }

  try {
    await User.findByIdAndUpdate({ _id: id }, { name, email, password });
    h.response("created").code(201);
    return { msg: "Usuário atualizado no sistema com sucesso!" };
  } catch (error) {
    return { err: error };
  }
};

// delete user
const deleteUser = async (request, h) => {
  const id = request.params.id;

  try {
    await User.findByIdAndDelete({ _id: id });
    h.response("delete").code(204);
    return { msg: "Usuário deletado do sistema com sucesso!" };
  } catch (error) {
    return { err: error };
  }
};

module.exports = {
  home,
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
};
