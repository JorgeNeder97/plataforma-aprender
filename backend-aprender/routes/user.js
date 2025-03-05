const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cruceController = require('../controllers/cruceController');
const materialController = require('../controllers/materialController');
const teamUserLoginValidations = require('../middlewares/validations/teamUserLoginValidations');
const schoolUserLoginValidations = require('../middlewares/validations/schoolUserLoginValidations');
const verifyTeamToken = require('../middlewares/auth/teamUserAuthMiddleware');


// Logins
router.post('/teamLogin', teamUserLoginValidations, userController.teamLogin);
router.post('/teamRefresh', userController.teamRefreshToken); // teamRefresh should not have any auth middleware.
router.post('/teamLogout', verifyTeamToken, userController.teamLogout);

router.post('/schoolLogin', schoolUserLoginValidations, userController.schoolLogin);
router.get('/schoolRefresh', userController.schoolRefreshToken);
router.post('/schoolLogout', userController.schoolLogout);

// Datos del usuario
router.post('/cambiarContraseña', userController.cambiarContraseña);



// Cruces
router.get('/obtenerCruce/:id', cruceController.obtenerCruce);
router.get('/obtenerCruces', cruceController.obtenerCruces);
router.post('/crearCruce', cruceController.crearCruce);
router.patch('/modificarCruce/:id', cruceController.modificarCruce);
router.delete('/eliminarCruce/:id', cruceController.eliminarCruce);



//      Material: Aqui se requiere de Multer (no esta agregado aun en las rutas)

// Asistencia
router.get('/obtenerAsistencia', materialController.obtenerAsistencia);

// CRUD (aqui tambien se obtiene la planilla de recorridos ya que no la creamos, solo la subimos)
router.get('/obtenerMaterial/:id', materialController.obtenerMaterial);
router.post('/crearMaterial', materialController.crearMaterial);
router.patch('/modificarMaterial/:id', materialController.modificarMaterial);
router.delete('/eliminarMaterial/:id', materialController.eliminarMaterial);

// Fotos
router.get('/obtenerFoto/:id', materialController.obtenerFoto);
router.post('/crearFoto', materialController.crearFoto);
router.patch('/modificarFoto/:id', materialController.modificarFoto);
router.delete('/eliminarFoto/:id', materialController.eliminarFoto);

// Planilla de Coordinador
router.get('/obtenerPlanillaCoord', materialController.obtenerPlanillaCoord);


// Listado de Aplicadores, Veedores y Coordinadores
router.get('/obtenerAplicadoresVeedoresCoordinadores', materialController.obtenerAplicadoresVeedoresCoordinadores);



module.exports = router;