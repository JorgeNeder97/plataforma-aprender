const express = require('express');
const router = express.Router();
const adminController = require('#controllers/adminController');
const operativoController = require('#controllers/operativoController');
const localidadController = require('#controllers/localidadController');
const escuelaController = require('#controllers/escuelaController');
const seccionController = require('#controllers/seccionController');
const cabeceraController = require('#controllers/cabeceraController');
const coordinadorController = require('#controllers/coordinadorController');
const datosEstadisticosController = require('#controllers/datosEstadisticosController');



// Usuarios
router.get('/obtenerUsuario/:id', adminController.obtenerUsuario);
router.get('/obtenerUsuarios', adminController.obtenerUsuarios);
router.post('/crearUsuario', adminController.crearUsuario);
router.patch('/modificarUsuario/:id', adminController.modificarUsuario);
router.delete('/eliminarUsuario/:id', adminController.eliminarUsuario);


// Operativos
router.get('/obtenerOperativo/:id', operativoController.obtenerOperativo);
router.get('/obtenerOperativos', operativoController.obtenerOperativos);
router.post('/crearOperativo', operativoController.crearOperativo);
router.patch('/modificarOperativo/:id', operativoController.modificarOperativo);
router.delete('/eliminarOperativo/:id', operativoController.eliminarOperativo);

// Localidades
router.get('/obtenerLocalidad/:id', localidadController.obtenerLocalidad);
router.get('/obtenerLocalidades', localidadController.obtenerLocalidades);
router.post('/crearLocalidad', localidadController.crearLocalidad);
router.patch('/modificarLocalidad/:id', localidadController.modificarLocalidad);
router.delete('/eliminarLocalidad/:id', localidadController.eliminarLocalidad);

// Escuelas
router.get('/obtenerEscuela/:id', escuelaController.obtenerEscuela);
router.get('/obtenerEscuelas', escuelaController.obtenerEscuelas);
router.post('/crearEscuela', escuelaController.crearEscuela);
router.patch('/modificarEscuela/:id', escuelaController.modificarEscuela);
router.delete('/eliminarEscuela/:id', escuelaController.eliminarEscuela);

// Secciones
router.get('/obtenerSeccion/:id', seccionController.obtenerSeccion);
router.get('/obtenerSecciones', seccionController.obtenerSecciones);
router.post('/crearSeccion', seccionController.crearSeccion);
router.patch('/modificarSeccion/:id', seccionController.modificarSeccion);
router.delete('/eliminarSeccion/:id', seccionController.eliminarSeccion);

// Cabeceras
router.get('/obtenerCabecera/:id', cabeceraController.obtenerCabecera);
router.get('/obtenerCabeceras', cabeceraController.obtenerCabeceras);
router.post('/crearCabecera', cabeceraController.crearCabecera);
router.patch('/modificarCabeceras/:id', cabeceraController.modificarCabecera);
router.delete('/eliminarCabecera/:id', cabeceraController.eliminarCabecera);


// Coordinadores
router.get('/obtenerCoordinador/:id', coordinadorController.obtenerCoordinador);
router.get('/obtenerCoordinadores', coordinadorController.obtenerCoordinadores);
router.post('/crearCoordinador', coordinadorController.crearCoordinador);
router.patch('/modificarCoordinador/:id', coordinadorController.modificarCoordinador);
router.delete('/eliminarCoordinador/:id', coordinadorController.eliminarCoordinador);


// Datos Estadísticos
router.get('/obtenerDatosEstadisticos', datosEstadisticosController.obtenerDatosEstadisticos);
router.post('/crearDatosEstadisticos', datosEstadisticosController.crearDatosEstadisticos);
router.patch('/modificarDatosEstadisticos/:id', datosEstadisticosController.modificarDatosEstadisticos);
router.delete('/eliminarDatosEstadisticos/:id', datosEstadisticosController.eliminarDatosEstadisticos);




module.exports = router;
