const dbConfig = require('../../config/db');
const mysql = require('mysql');
const _ = require('lodash');

let mysqlConnection = null;

connectMysql = async () => {
    mysqlConnection = await mysql.createConnection(dbConfig.getMySQlConfig()).connect(err => {
        if(!_.isEmpty(err)) {
            console.log('Database connection failed: ', err.stack);
            return;
        }
        console.log("Connected to MySQL databse.");
    });
}

getMysqlConnection = () => {
    return mysqlConnection;
}

module.exports = {
    getMysqlConnection: getMysqlConnection,
    connectMysql: connectMysql
}