const jwt = require("jsonwebtoken");


function authenticateToken(req, res, next) {
    const authCookie = req.cookies['jwt'];
    const secretKey = Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64').toString('utf-8');
    if(authCookie == null) return res.sendStatus(401);
    jwt.verify(authCookie, secretKey,  { algorithms: ['HS256'] }, (err, user) => {
        if(err) {
            console.log("Error in token : " + err);
            return res.sendStatus(403);
        }
        req.user = user;
        next();
        // res
    })
}

module.exports = {
    authenticateToken: authenticateToken
}