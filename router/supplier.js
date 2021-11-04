const express = require("express");

const supplierHandler = require("../router_handler/supplier");
const supplierValidation = require("../validation/supplier");
const router = express.Router();

router.get("/list", supplierHandler.list);

router.get("/score", supplierHandler.score);

router.post("/add", supplierValidation.add, supplierHandler.add);

router.post("/del", supplierValidation.del, supplierHandler.del);

// 错误处理
router.use((err, req, res, next) => {
    res.send(err);
})

module.exports = router;