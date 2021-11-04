const db = require("../db/index");
const ResponseBody = require("../Response/index");

exports.list = (req, res) => {
    const sql = "select id, `code`, `name` from supplier;"

    db.query(sql, (err, data) => {
        if(err){
            res.send(ResponseBody.error(410, "内部错误"));
        } else {
            res.send(ResponseBody.success("sucess", data));
        }
    })
}

exports.score = (req, res) => {

}

exports.add = (req, res) => {

}

exports.del = (req, res) => {

}
