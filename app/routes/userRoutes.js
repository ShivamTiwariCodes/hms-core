// import { createUser } from "../controllers/userController";
const { createUser } = require("../controllers/userController");
const { authenticateToken } = require("./middlewares/authentication");


module.exports = function(app) {
    app.post('/user', createUser);
}