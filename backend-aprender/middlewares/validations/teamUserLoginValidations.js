const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('#models');

const teamUserLoginValidations = [
    body("teamUser")
        .notEmpty().withMessage("Debes ingresar tu usuario")
        .bail()
        .custom(async (value) => {
            const isValidUser = await db.Usuario.findOne({ where: { nombre: value } });
            if(!isValidUser) throw new Error("El usuario ingresado no existe");
            return true;
        }),
    
    body("teamPassword")
        .notEmpty().withMessage("Debes ingresar tu contraseña")
        .bail()
        .custom(async (value, { req }) => {
            const isValidUser = await db.Usuario.findOne({ where: { nombre: req.body.teamUser } });
            if(isValidUser) {
                const password = isValidUser.contraseña;
                const isValidPassword = bcrypt.compareSync(value, password);
                if(!isValidPassword) throw new Error("La contraseña ingresada es incorrecta");
                return true;
            };
        }),
];

module.exports = teamUserLoginValidations;