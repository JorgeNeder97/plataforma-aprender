const db = require("../database/models");

const escuelaController = {
    crearEscuela: (req, res) => {

    },
    modificarEscuela: (req, res) => {

    },
    eliminarEscuela: (req, res) => {

    },
    obtenerEscuela: (req, res) => {

    },
    obtenerEscuelas: async (req, res) => {
        const escuelas = await db.Escuela.findAll();
        return res.json({ escuelas });
    },
}



module.exports = escuelaController;