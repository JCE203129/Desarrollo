
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_comercio', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306, // Asegúrate de que este puerto sea correcto
});

module.exports = sequelize;
