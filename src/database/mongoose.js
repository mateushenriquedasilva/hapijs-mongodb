const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = () => {
  mongoose.connect("mongodb+srv://matheus:4002892233@apicluster.lhgso.mongodb.net/users?retryWrites=true&w=majority");

  const database = mongoose.connection;
  database.on("error", (error) => console.log(error));
  database.once("open", () => console.log("Conectado com o banco de dados🔥"));
};

module.exports = connection;
