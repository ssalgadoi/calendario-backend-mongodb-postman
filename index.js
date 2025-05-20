const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');
const app = express();


// Habilitar CORS
app.use(cors());


dbConnection();
// Directorio público
app.use(express.static('public'));

// Lectura parseo del body
app.use(express.json()); 

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
