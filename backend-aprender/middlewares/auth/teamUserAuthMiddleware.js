const jwt = require('jsonwebtoken');

const verifyTeamToken = (req, res, next) => {
    const teamToken = req.headers.authorization?.split(" ")[1];
    if(!teamToken) return res.status(403).json({ message: "No Autorizado" });

    jwt.verify(teamToken, process.env.TOKEN, (err, user) => {
        if(err) return res.status(403).json({ message: "Token Inválido" });

        req.user = user;
        next();
    });
};


module.exports = verifyTeamToken;