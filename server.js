const express = require('express');
const mysqlUtil = require('./app/utils/mysqlConnectionUtil');
const routes = require('./app/routes/main');
require('dotenv').config();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// Middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser());

mysqlUtil.connectMysql();
routes.includeRoutes(app);


app.listen(process.env.PORT, () => {
    console.log("HMS core started running ...");
})