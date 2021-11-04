const { body, validationResult } = require('express-validator');

const common = require("../common/index");
const supplierDB = require("../router_db/supplier");

class Supplier{
    constructor(id, code, name, avgScore) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.avgScore = avgScore;
    }
}

class Evaluate{
    constructor(id, content, score) {
        this.id = id;
        this.content = content;
        this.score = score;
    }
}

class SupplierWithScore{
    constructor(id, code, name, avgScore, evaluates) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.avgScore = avgScore;
        this.evaluates = evaluates;
    }
}

exports.list = async (req, res) => {
    let data;
    try {
        data = await supplierDB.list();
    } catch (error) {
        throw error;
    }
    if(data.length == 0){
        res.send(common.ResponseBody.success(null));
    } else {
        res.send(common.ResponseBody.success(data));
    }
}

exports.score = async (req, res) => {
    let array;
    try {
        array = await supplierDB.score();
    } catch (error) {
        res.send(error);
    }
    // 获取所有的供应商集合,使用Map来达到去重的效果
    let supplierMap = new Map();
    for(let supplier of array){
        supplierMap.set(supplier["id"], new Supplier(supplier["id"], supplier["code"], supplier["name"], 
                                                     supplier["avg_score"]));
    }
    // 查找每一个供应商的所有评价,并封装到result中
    let result = [];
    supplierMap.forEach((supplier) => {
        let supplierWithScore;
        if (supplier["avgScore"] == null){
            supplierWithScore = new SupplierWithScore(supplier["id"], supplier["code"], supplier["name"], 
                                                      "暂无评价", null)
        } else {
            let evaluates = [];
            array.forEach(element => {
                if(element["id"] == supplier["id"]){
                    evaluates.push(new Evaluate(element["e_id"], element["content"], element["score"]));
                }
            });
            supplierWithScore = new SupplierWithScore(supplier["id"], supplier["code"], supplier["name"], 
                                                      common.getRank(supplier["avgScore"]), evaluates);
        }
        result.push(supplierWithScore);
    })
    res.send(common.ResponseBody.success(result));
}

exports.add = async (req, res) => {
    // 处理参数校验产生的错误
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    	return res.json(common.ResponseBody.paramsError());
    }
    let supplier = req.body;
    // 查看编号是否以及存在
    let data;
    try {
        data = await supplierDB.getByCode(supplier["code"]);
    } catch (error) {
        res.send(error);
    }
    if(data.length != 0) {
        // 编号已存在
        res.send(common.ResponseBody.supplierCodeDuplicateError());
    } else {
        // 插入数据
        try {
            await supplierDB.add(supplier);
        } catch (error) {
            res.send(error);
        }
        res.send(common.ResponseBody.success(null, "添加成功"));
    }
}

exports.del = async (req, res) => {
    // 处理参数校验产生的错误
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    	return res.json(common.ResponseBody.paramsError());
    }
    // 删除数据
    let id = req.body["id"];
    try {
        await supplierDB.del(id);
    } catch (error) {
        res.send(error);
    }
    res.send(common.ResponseBody.success(null, "删除成功"));
}