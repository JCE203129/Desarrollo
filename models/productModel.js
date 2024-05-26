module.exports = (sequelize, DataTypes) => {
    const contactos = sequelize.define("Contactos", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nombres: {
            type: DataTypes.STRING, // Cambiado a STRING para mejor consistencia de datos
            allowNull: false,
        },
        apellidos: {
            type: DataTypes.STRING, // Cambiado a STRING para mejor consistencia de datos
            allowNull: false,
        },
        correoelectronico: {
            type: DataTypes.STRING, // Cambiado a STRING para mejor consistencia de datos
            allowNull: false,
            validate: {
                isEmail: true, // Validación de correo electrónico
            },
        },
        telefono: {
            type: DataTypes.STRING, // Cambiado a STRING para permitir diferentes formatos de teléfono
            allowNull: false,
        },
        tipoanimal: {
            type: DataTypes.STRING, // Cambiado a STRING para mejor consistencia de datos
            allowNull: false,
        },
        tipoconsulta: {
            type: DataTypes.STRING, // Añadido tipoconsulta
            allowNull: false,
        },
        mensaje: {
            type: DataTypes.TEXT, // Añadido mensaje
            allowNull: false,
        },
    }, {
        timestamps: true, // Añadido para que Sequelize maneje automáticamente createdAt y updatedAt
    });
  
    return contactos;
  };
  