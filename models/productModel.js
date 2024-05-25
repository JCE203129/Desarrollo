module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define("producto", {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
      },
      nombres: {
          type: DataTypes.TEXT,
      },
      apellidos: {
          type: DataTypes.TEXT,
      },
      correoelectronico: {
          type: DataTypes.TEXT,
      },
      telefono: {
          type: DataTypes.INTEGER,
      },
      tipoanimal: {
          type: DataTypes.TEXT,
      },
  });
  return Producto;
};
