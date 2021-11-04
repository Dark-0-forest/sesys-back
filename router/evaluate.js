const express = require("express");

const evaluateHandler = require("../router_handler/evaluate");
const evaluateValidation = require("../validation/evaluate");
const router = express.Router();

router.get("/list", evaluateValidation.list, evaluateHandler.list);

router.post("/add", evaluateValidation.add, evaluateHandler.add);

router.post("/del", evaluateValidation.del, evaluateHandler.del);

module.exports = router;