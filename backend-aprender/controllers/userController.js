const db = require('../database/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const TOKEN = process.env.TOKEN;


const userController = {
    
    cambiarContraseña: (req, res) => {

    },

    teamLogin: async (req, res) => {

        let errors = validationResult(req);

        if(!errors.isEmpty()) return res.json({ errors: errors.mapped() });

        const userForm = req.body.teamUser;
        const passForm = req.body.teamPassword;

        try {

            const isValidUser = await db.Usuario.findOne({ where: { nombre: userForm } });
    
            if(!isValidUser) return res.status(400).json({ message: 'Invalid Credentials' });
            else if(isValidUser) {
                const userDB = isValidUser.dataValues;
    
                const isValidPassword = await bcrypt.compare(passForm, userDB.contraseña);
    
                if(!isValidPassword) return res.status(400).json({ message: 'Invalid Credentials'});
    
                const teamUserToken = jwt.sign({ teamUser: userDB.nombre }, TOKEN, { expiresIn: '7d' });
                res.cookie("teamUserToken", teamUserToken, {
                    httpOnly: true,
                });
                return res.json({
                    userName: userDB.nombre,
                    type: 'Team',
                    isAuthenticated: true,
                });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    schoolLogin: async (req, res) => {
        let errors = validationResult(req);

        if(!errors.isEmpty()) return res.json({ errors: errors.mapped() });

        const userForm = req.schoolUser;
        const passForm = req.schoolPassword;

        try {

            const isValidUser = await db.Usuario_Form.findOne({ where: { cueanexo: userForm } });
    
            if(!isValidUser) return res.status(400).json({ message: 'Invalid Credentials' });
            else if(isValidUser) {
                const userDB = isValidUser.dataValues;
    
                const isValidPassword = await bcrypt.compare(passForm, userDB.contraseña);
    
                if(!isValidPassword) return res.status(400).json({ message: 'Invalid Credentials'});
    
                const schoolUserToken = jwt.sign({ schoolUser: userDB.cueanexo }, TOKEN, { expiresIn: '7d' });
                res.cookie("schoolUserToken", schoolUserToken);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

}


module.exports = userController;