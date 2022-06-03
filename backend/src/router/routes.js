const controllers = require("../controllers/controller");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: controllers.home,
  },
  {
    method: "GET",
    path: "/users",
    handler: controllers.findAllUsers,
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: controllers.findUserById,
  },
  {
    method: "POST",
    path: "/users",
    handler: controllers.createUser,
  },
  {
    method: "PUT",
    path: "/users/{id}",
    handler: controllers.updateUser,
  },
  {
    method: "DELETE",
    path: "/users/{id}",
    handler: controllers.deleteUser,
  },
];

module.exports = routes;
