const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../database/models');

const schoolUserLoginValidations = [
    body("schoolUser")
        .notEmpty().withMessage("Debes ingresar tu usuario")
        .bail()
        .custom(async (value) => {
            const isValidUser = await db.Usuario_Form.findOne({ where: { cueanexo: value } });
            if(!isValidUser) throw new Error("El usuario ingresado no existe");
            return true;
        }),
    body("schoolPassword")
        .notEmpty().withMessage("Debes ingresar tu contraseña")
        .bail()
        .custom(async (value, { req }) => {
            const isValidUser = await db.Usuario_Form.findOne({ where: { cueanexo: req.body.schoolUser } });
            if(isValidUser) {
                const isValidPassword = bcrypt.compareSync(value, isValidUser.contraseña);
                if(!isValidPassword) throw new Error("La contraseña ingresada es incorrecta");
                return true;
            };
        }),
];

module.exports = schoolUserLoginValidations;