const db = require('../database/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwt');
const TOKEN = process.env.TOKEN;





// This array is temporal because it isn't a good option for store the refresh tokens in production.
// What we need to use here is Redis Cache but Redis is only available for Linux.
// This must change when we use Redis °°°.
let teamRefreshTokenArray = [];





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
    
            if(!isValidUser) return res.status(403).json({ message: 'Invalid Credentials' });
            else if(isValidUser) {
                const userDB = isValidUser.dataValues;
    
                const isValidPassword = await bcrypt.compare(passForm, userDB.contraseña);
    
                if(!isValidPassword) return res.status(403).json({ message: 'Invalid Credentials'});
    
                // From here
                const teamAccessToken = generateAccessToken(userDB);
                const teamRefreshToken = generateRefreshToken(userDB);

                // This must change when we use Redis °°°.
                teamRefreshTokenArray.push(teamRefreshToken);

                // res.cookie("teamRefreshToken", teamRefreshToken, {
                //     httpOnly: true,
                //     maxAge: 7 * 24 * 60 * 60 * 1000 // 7days
                // });

                console.log(teamRefreshTokenArray);

                return res.json({
                    teamAccessToken,
                    teamRefreshToken,
                    userId: userDB.id,
                    userName: userDB.nombre,
                    isAuthenticated: true,
                });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    




    teamVerifyToken: async(req, res) => {
        return res.json({
            success: true,
            message: "Token Válido",
            user: req.user,
        });
    },





    teamRefreshToken: (req, res) => {

        // take the refresh token from the user
        const teamRefreshToken = req.body.teamRefreshToken;

        console.log(teamRefreshToken);

        // send an error if there is no token or it's invalid
        if(!teamRefreshToken) return res.status(401).json({ message: "No autorizado (no esta llegando el refreshToken)" });


        // This must change when we use Redis °°°.
        if(!teamRefreshTokenArray.includes(teamRefreshToken)) return res.status(403).json({ message: "Refresh Token is not valid!"})


        // if everything is ok, create new access token, refresh token and send to user
        jwt.verify(teamRefreshToken, process.env.REFRESH_TOKEN, (err, user) => {
            err && console.log(err);

            // This must change when we use Redis °°°.
            teamRefreshTokenArray = teamRefreshTokenArray.filter((token) => token !== teamRefreshToken);

            // This must change when we use Redis °°°.
            const newTeamAccessToken = generateAccessToken(user);

            // This must change when we use Redis °°°.
            const newTeamRefreshToken = generateRefreshToken(user);

            // This must change when use Redis °°°.
            teamRefreshTokenArray.push(newTeamRefreshToken);

            res.json({

                // This must change when we use Redis °°°.
                teamAccessToken: newTeamAccessToken,

                // This must change when we use Redis °°°.
                teamRefreshToken: newTeamRefreshToken,

                // This must change when we use Redis °°°.
                userId: user.id,

                // This must change when we use Redis °°°.
                userName: user.username,

                isAuthenticated: true,
            });
        });
    },





    teamLogout: (req, res) => {
        const teamRefreshToken = req.body.teamRefreshToken;

        // This must change when we use Redis °°°.
        teamRefreshTokenArray = teamRefreshTokenArray.filter((token) => token !== teamRefreshToken);

        res.status(200).json({ message: "You logged out successfully."});
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