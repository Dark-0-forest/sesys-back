const mysql = require("mysql");

const db = mysql.createPool({
    host:"www.darkforest.work",
    user:"sesys_rw",
    password:"sesys_rw",
    database:"sesys",
    port:3306
})

module.exports = db;