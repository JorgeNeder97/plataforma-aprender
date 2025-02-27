const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign({ id:user.id, username:user.nombre}, process.env.TOKEN, {
        expiresIn: process.env.ACCESS_EXPIRATION,
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id:user.id }, process.env.REFRESH_TOKEN, {
        expiresIn: process.env.REFRESH_EXPIRATION,
    });
};

module.exports = { generateAccessToken, generateRefreshToken };