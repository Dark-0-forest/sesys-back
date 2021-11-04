const db = require("../db/index");
const common = require("../common/index");

exports.list = (id) => {
    return new Promise((resolve, reject) => {
        let sql = "select id, content, score from evaluate where sup_id = ?";

        db.query(sql, id,(err, data) => {
            if(err) {
                reject(common.ResponseBody.dbInterlError());
            } else {
                resolve(data);
            }
        })
    })
}

exports.add = (evaluate) => {
    return new Promise((resolve, reject) => {
        let sql = "insert into evaluate(sup_id, content, score) values(?,?,?);";

        db.query(sql, [evaluate["sup_id"], evaluate["content"], evaluate["score"]], (err, data) => {
            if(err) {
                reject(common.ResponseBody.dbInterlError());
            } else {
                resolve(data);
            }
        })
    })
}

exports.del = (id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from evaluate where id = ?";

        db.query(sql, id, (err, data) => {
            if(err) {
                reject(common.ResponseBody.dbInterlError());
            } else {
                resolve(data);
            }
        })
    })
}