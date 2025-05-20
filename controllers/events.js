const Evento = require('../models/Evento');
const { response } = require('express')

const getEventos = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'crearEventos'
    });
};

const crearEvento = async (req, res = response) => {
    const evento = new Evento(req.body);

    try {
        evento.user = req.uid; 
        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        });

    } catch (error) {
        console.error('Error al crear evento:', error.message);
        res.status(500).json({
            ok: false,
            msg: "Error al crear evento",
            error: error.message  // Solo durante desarrollo, quítalo en producción
        });
    }
};


const actualizarEvento = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'actualiarEvento'
    });
}

const eliminarEvento = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'eliminarEvento'
    });
}



module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
};