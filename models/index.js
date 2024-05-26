const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/dbconfig");

async function connectToDatabase() {
  const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      operatorAliases: false,
    }
  );

  try {
    await sequelize.authenticate();
    console.log("La conexión se ha establecido correctamente.");
  } catch (error) {
    console.error(
      "No se pudo establecer la conexión a la base de datos:",
      error
    );
  }

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.productos = require("./productModel")(sequelize, DataTypes);

  module.exports = db;
}

//connectToDatabase();
