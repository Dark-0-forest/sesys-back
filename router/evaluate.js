const express = require("express");
const evaluateHandler = require("../router_handler/evaluater");
const router = express.Router();

router.get("/list", evaluateHandler.list);

router.post("/add", evaluateHandler.add);

router.post("/del", evaluateHandler.del);

module.exports = router;