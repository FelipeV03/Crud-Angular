const express = require('express');
const colors = require('colors');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');

// INICIAR EXPRESS
const app = express();


// SETTINGS
app.set('port', process.env.PORT || 4000);


// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json()); // Para que el servidor entienda los datos que le enviamos en formato JSON desde el FrontEnd

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img'); // Directorio donde se almacenarán las imágenes subidas
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

app.use(multer({
    storage: storage
}).single("image"));


// CORS (Cross Origin Resource Sharing) - Para que el servidor entienda los datos que le enviamos en formato JSON desde el FrontEnd (Angular) en el puerto 4200 (localhost:4200) y no desde el puerto 4000 (localhost:4000) donde se encuentra el servidor (BackEnd)
app.use(cors({ origin: 'http://localhost:4200' }));



// RUTAS
// app.use(require('./routes/rutas.js'));
app.use('/api/clientes', require('./routes/rutas'));


// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static('img'));




// INICIAR EL SERVIDOR
app.listen(app.get('port'), () => {
    console.log("(っ◔◡◔)っ", 'Server on port'.rainbow, `http://localhost:${app.get('port')}`.rainbow, "(ง︡'-'︠)ง");
});