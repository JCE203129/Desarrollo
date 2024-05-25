const express = require('express');
const app = express();
const path = require('path');


const contactosRouter = require("./routes/contactosRouter");
const helpRouter = require("./routes/helpRouter"); 
const perrosRouter = require("./routes/perrosRouter");
const gatosRouter = require("./routes/gatosRouter");
const galeriaRouter = require("./routes/galeriaRouter");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(contactosRouter);
app.use(helpRouter);
app.use(galeriaRouter);
app.use(gatosRouter);
app.use(perrosRouter);

app.get('/', function(req, res) {
    res.render('index'); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Servidor {PORT}');
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
