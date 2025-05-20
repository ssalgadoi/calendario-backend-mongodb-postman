/*
    Rutas de eventos
    host + /api/events
*/

const { Router } = require('express');
const {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} = require('../controllers/events');
const { validarJWT } = require('../middlewares/validarJwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Todas las rutas deben pasar por la validación del token
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear nuevo evento
router.post('/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;
