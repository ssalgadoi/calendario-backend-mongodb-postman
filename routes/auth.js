/* 
    Rutas de Usuarios / Auth
    host + /api/auth

*/
const { Router } = require('express');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJwt');



// Crear nuevo usuario
router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio y debe tener 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario);

// Login del usuario
router.post(
    '/',
    [
        check('email', 'El email es obligatorio y debe ser válido').isEmail(),
        check('password', 'El password es obligatorio y debe tener mínimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);

// Revalidar token
router.get('/renew', validarJWT, revalidarToken);





module.exports = router;