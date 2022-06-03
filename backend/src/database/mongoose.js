const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = () => {
  mongoose.connect(process.env.CONNECTION_MONGODB);

  const database = mongoose.connection;
  database.on("error", (error) => console.log(error));
  database.once("open", () => console.log("Conectado com o banco de dados🔥"));
};

module.exports = connection;