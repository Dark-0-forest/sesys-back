const mysql = require("mysql");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"252597248",
    database:"sesys",
    port:3306
})

module.exports = db;