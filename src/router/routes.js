const controllers = require("../controllers/controller");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: controllers.home,
  },
  {
    method: "POST",
    path: "/users",
    handler: controllers.createUser,
  },
];

module.exports = routes;
