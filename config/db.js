const mysql = require('mysql');


// MySQL connection
const getMySQlConfig = () => {
    return {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_DB_USER || 'root',
        password: process.env.MYSQL_DB_PASSWORD || 'password',
        database: process.env.MYSQL_DB_NAME || 'hospital_management',
        port: process.env.MYSQL_PORT || '3306'
    };
}

const getMongoConfig = () => {
    
    return {};
}

module.exports = {
    getMongoConfig: getMongoConfig,
    getMySQlConfig: getMySQlConfig
}