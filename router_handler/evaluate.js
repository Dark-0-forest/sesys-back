const { body, validationResult } = require('express-validator');

const common = require("../common/index");
const supplierDB = require("../router_db/supplier");
const evaluateDB = require("../router_db/evaluate");

exports.list = async (req, res) => {
    // 处理参数校验产生的错误
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    	return res.json(common.ResponseBody.paramsError());
    }
    // 查询供应商的id是否存在
    let id = req.body["id"];
    let sup;
    try {
        sup = await supplierDB.getById(id);
    } catch (error) {
        res.send(error);
    }
    if(sup.length == 0) {
        res.send(common.ResponseBody.supplierIsNotExist());
    } else {
        // 根据供应商id查询评价
        let data;
        try {
            data = await evaluateDB.list(id);
        } catch (error) {
            res.send(error);
        }
        if(data.length == 0){
            res.send(common.ResponseBody.success(null));
        } else {
            res.send(common.ResponseBody.success(data));
        }
    }
}

exports.add = async (req, res) => {
    // 处理参数校验产生的错误
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    	return res.json(common.ResponseBody.paramsError());
    }
    // 查询供应商的id是否存在
    let eva = req.body;
    let sup;
    try {
        sup = await supplierDB.getById(eva["sup_id"]);
    } catch (error) {
        res.send(error);
    }
    if(sup.length == 0) {
        res.send(common.ResponseBody.supplierIsNotExist());
    } else {
        // 给供应商添加评价
        try {
            await evaluateDB.add(eva);
        } catch (error) {
            res.send(error);
        }
        res.send(common.ResponseBody.success(null, "插入成功"));
    }
}

exports.del = async (req, res) => {
    // 处理参数校验产生的错误
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    	return res.json(common.ResponseBody.paramsError());
    }
    // 查询供应商的id是否存在
    let id = req.body["id"];
    // 删除这条评价
    try {
        await evaluateDB.del(id);
    } catch (error) {
        res.send(error);
    }
    res.send(common.ResponseBody.success(null, "删除成功"));
}