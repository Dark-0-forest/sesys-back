const db = require("../db/index");
const common = require("../common/index");

exports.list = () => {
    return new Promise((resolve, reject) => {
        let sql = "select id, `code`, `name` from supplier;"

        db.query(sql, (err, data) => {
            if(err){
                reject(common.ResponseBody.dbInterlError());
            } else {
                resolve(data);
            }
        })
    })
}

exports.score = () => {
    return new Promise((resolve, reject) => {
        let sql = `
        select s.id, s.code, s.name, es.avg_score, e.id as e_id, e.content, e.score
        from supplier as s 
        left join (select sup_id, avg(score) as avg_score from evaluate group by sup_id) as es on s.id = es.sup_id
        left join evaluate as e on s.id = e.sup_id;`;

        db.query(sql, (err, data) => {
            if(err){
                reject(common.ResponseBody.dbInterlError());
            } else {
                resolve(data);
            }
        })
    })
}

exports.getByCode = (code) => {
    return new Promise((resolve, reject) => {
        let sql = "select id, `code`, `name` from supplier where `code` = ?;";

        db.query(sql, code, (err, data) => {
            if(err){
                reject(common.ResponseBody.dbInterlError());
            } else {
                resolve(data);
            }
        })
    })
}

exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = "select id, `code`, `name` from supplier where `id` = ?;";

        db.query(sql, id, (err, data) => {
            if(err){
                reject(common.ResponseBody.dbInterlError());
            } else {
                resolve(data);
            }
        })
    })
}

exports.add = (supplier) => {
    return new Promise((resolve, reject) => {
        let sql = "insert into supplier(`code`,`name`) values(?,?);";

        db.query(sql, [supplier["code"], supplier["name"]], (err, data) => {
            if(err){
                reject(common.ResponseBody.dbInterlError());
            } else {
                resolve();
            }
        })
    })
}

exports.del = (id) => {
    return new Promise((resolve, reject) => {
        let sql = "delete from supplier where id = ?;";

        db.query(sql, id, (err, data) => {
            if(err){
                reject(common.ResponseBody.dbInterlError());
            } else {
                resolve();
            }
        })
    })
}