const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log(' Conectado a la base de datos de MongoDB');
        
    } catch (error) {
        console.error(' Error al conectar a la base de datos');
        console.error(error);
        throw new Error('Error al iniciar la base de datos');
    }
};

module.exports = {
    dbConnection
};
