const express = require("express");
const supplierHandler = require("../router_handler/supplier");
const router = express.Router();

router.get("/list", supplierHandler.list);

router.get("/score", supplierHandler.score);

router.post("/add", supplierHandler.add);

router.post("/del", supplierHandler.del);

module.exports = router;