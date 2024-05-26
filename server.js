const express = require('express');
const mysql = require("mysql");
const path = require('path');
const app = express();

// Crear conexión a la base de datos
const conexion = mysql.createConnection({
    host: "localhost",
    database: "comercio",
    user: "root",
    password: "",
});

// Manejar la conexión a la base de datos
conexion.connect(error => {
    if (error) {
        console.error('Error conectando a la base de datos:', error.stack);
        return;
    }
    console.log('Conectado a la base de datos con el id:', conexion.threadId);
});

const contactosRouter = require("./routes/contactosRouter");
const helpRouter = require("./routes/helpRouter");
const perrosRouter = require("./routes/perrosRouter");
const gatosRouter = require("./routes/gatosRouter");
const galeriaRouter = require("./routes/galeriaRouter");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(contactosRouter);
app.use(helpRouter);
app.use(galeriaRouter);
app.use(gatosRouter);
app.use(perrosRouter);

app.get('/', function(req, res) {
    res.render('index');
});

app.post("/validar", function(req, res) {
    const datos = req.body;
    let nombres = datos.nom;
    let apellidos = datos.ape;
    let email = datos.ema;
    let telefono = datos.tel;
    let animal = datos.anim;
    let consulta = datos.consul;
    let mensaje = datos.mens;

    // Usar una consulta preparada para evitar inyecciones de SQL
    let enviar = "INSERT INTO comercio (nombres, apellidos, email, telefono, animal, consulta, mensaje) VALUES ('"+nombres+"', '"+apellidos+"', '"+email+"', '"+telefono+"', '"+animal+"', '"+consulta+"', '"+mensaje+"')";
    conexion.query(enviar, [nombres, apellidos, email, telefono, animal, consulta, mensaje], function(error) {
        if (error) {
            console.error('Error al almacenar los datos:', error.stack);
            res.status(500).send('Error al almacenar los datos');
        } else {
            console.log("Datos almacenados correctamente");
            res.send('Datos almacenados correctamente');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


//app.listen(3000); 



    //res.send (__dirname);
    //res.sendFile('index.html',{
       // root:__dirname
//});


/*const express = require('express');
const path = require('path');  

const app = express();

app.get('/', function (req, res) {
    
    const indexPath = path.join(__dirname, '/public/index.html');
    
    res.sendFile(indexPath);
});

app.listen(3000, function () {
    console.log('Servidor Express corriendo en el puerto 3000');
});*/
