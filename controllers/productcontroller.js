const db = require('../models');


const Producto = db.productos;
//crea producto

module.exports = {
    create : async function(req,res) {
        try{ 
            const {nombres, apellidos, correo, telefono, tipo_animal, tipo_consulta, mensaje} = req.body;
            await Producto.create({nombre, descripcion, precio });

             res.send('Resgistro guardado exitosamente');
        }
        catch (error){
            console.error(error);
            res.status(500).send('error creating usar');
        }
    },
};
