const mysql = require("mysql");

const db = mysql.createPool({
    host:"xxx",
    user:"xxx",
    password:"xxx",
    database:"xxx",
    port:xxx
})

module.exports = db;
