const express = require('express');
const router = express.Router();
const formController = require('#controllers/formController');
const aplicadorController = require('#controllers/aplicadorController');
const veedorController = require('#controllers/veedorController');



// Formulario Estadistico
router.patch('/estadistico', formController.modificarEscuelaSecciones);

// Formulario de Veedores y Aplicadores
router.post('/crearAplicadoresVeedor', formController.crearAplicadoresVeedor);
router.patch('/modificarAplicadoresVeedor', formController.modificarAplicadoresVeedor);

// Rutas Para Correcciones
router.post('/crearAplicador', aplicadorController.crearAplicador);
router.patch('/modificarAplicador/:id', aplicadorController.modificarAplicador);
router.delete('/eliminarAplicador/:id', aplicadorController.eliminarAplicador);

router.post('/crearVeedor', veedorController.crearVeedor);
router.patch('/modificarVeedor/:id', veedorController.modificarVeedor);
router.delete('/eliminarVeedor/:id', veedorController.eliminarVeedor);


module.exports = router;
