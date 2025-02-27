const db = require('../database/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwt');
const TOKEN = process.env.TOKEN;


const userController = {
    
    cambiarContraseña: (req, res) => {

    },

    teamLogin: async (req, res) => {
        // This variable contains the errors that can occur in validations (middlewares).
        let errors = validationResult(req);

        // If the variable errors isn't empty, it sends the errors and stops the execution of the method.
        if(!errors.isEmpty()) return res.json({ errors: errors.mapped() });

        // In these two variables we save the username and password that sends the form.
        const userForm = req.body.teamUser;
        const passForm = req.body.teamPassword;

        // Try/Cath to perform asynchronous operations.
        try {

            const isValidUser = await db.Usuario.findOne({ where: { nombre: userForm } });
    
            if(!isValidUser) return res.status(400).json({ message: 'Invalid Credentials' });
            else if(isValidUser) {
                const userDB = isValidUser.dataValues;
    
                const isValidPassword = await bcrypt.compare(passForm, userDB.contraseña);
    
                if(!isValidPassword) return res.status(400).json({ message: 'Invalid Credentials'});
    
                const teamAccessToken = generateAccessToken(userDB);
                const teamRefreshToken = generateRefreshToken(userDB);

                res.cookie("teamRefreshToken", teamRefreshToken, {
                    httpOnly: true,
                    maxAge: 7 * 24 * 60 * 60 * 1000 // 7days
                });

                return res.json({
                    teamAccessToken,
                    isAuthenticated: true,
                });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    teamRefreshToken: (req, res) => {
        const teamRefreshToken = req.cookies.teamRefreshToken;
        if(!teamRefreshToken) return res.status(403).json({ message: "No autorizado" });

        jwt.verify(teamRefreshToken, process.env.REFRESH_TOKEN, (err, user) => {
            if(err) return res.status(403).json({ message: "Token invalido" });

            const teamAccessToken = generateAccessToken(user);
            res.json({
                teamAccessToken,
                isAuthenticated: true,
            });
        });
    },

    teamLogout: (req, res) => {
        res.clearCookie("teamRefreshToken");
        res.json({ message: "Sesión cerrada correctamente " });
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
    
                const schoolAccessToken = generateAccessToken(userDB);
                const schoolRefreshToken = generateRefreshToken(userDB);

                res.cookie("schoolRefreshToken", schoolRefreshToken, {
                    httpOnly: true,
                    maxAge: 7 * 24 * 60 * 60 * 1000 // 7days
                });

                return res.json({
                    schoolAccessToken,
                    isAuthenticated: true,
                });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    schoolRefreshToken: (req, res) => {
        const schoolRefreshToken = req.cookies.schoolRefreshToken;
        if(!schoolRefreshToken) return res.status(403).json({ message: "No autorizado" });

        jwt.verify(schoolRefreshToken, process.env.REFRESH_TOKEN, (err, user) => {
            if(err) return res.status(403).json({ message: "Token invalido" });

            const schoolAccessToken = generateAccessToken(user);
            res.json({
                schoolAccessToken,
                isAuthenticated: true,
            });
        });
    },

    schoolLogout: (req, res) => {
        res.clearCookie("schoolRefreshToken");
        res.json({ message: "Sesión cerrada correctamente " });
    },

}


module.exports = userController;