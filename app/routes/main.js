
const {authenticateToken} = require('./middlewares/authentication');
const { createUser } = require("../controllers/userController");

const includeRoutes = (app) => {

    const appointmentRoutes = require('./appointmentRoutes');
    const userRoutes = require('./userRoutes');


    // appointmentRoutes(app);
    // userRoutes(app);
    app.post('/user', createUser);
    app.get('/health', (req, res) => res.send("HMS core is up"));

    app.get('/auth/me', authenticateToken, (req, res) => {
        res.json(req.user);
    })
}

module.exports = {
    includeRoutes: includeRoutes
}