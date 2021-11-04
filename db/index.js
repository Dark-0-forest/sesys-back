const mysql = require("mysql");

const db = mysql.createPool({
    host:"xxx",
    user:"xxx",
    password:"xxx",
    database:"xxx",
    port:3306
})

module.exports = db;
