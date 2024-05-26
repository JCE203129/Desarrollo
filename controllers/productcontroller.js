const db = require('../models/productModel');

const Contacto = db.Comercio;

// Crea contacto
module.exports = {
    create: async function(req, res) {
        try {
            console.log('Received data:', req.body); // Log para verificar los datos recibidos
            const { nombres, apellidos, correoelectronico, telefono, tipoanimal, tipoconsulta, mensaje } = req.body;
            const contacto = await Contacto.create({ nombres, apellidos, correoelectronico, telefono, tipoanimal, tipoconsulta, mensaje });
            console.log('Contact created:', contacto); // Log para verificar que el contacto se creó
            res.send('Registro guardado exitosamente');
        } catch (error) {
            console.error('Error creating contact:', error); // Log para ver detalles del error
            res.status(500).send('Error creating contact');
        }
    },
};

