const { body, validationResult } = require('express-validator');

exports.list = [
    body("id").isInt({gt: 0})
]

exports.add = [
    body("sup_id").isInt({gt: 0}),
    body("content").isString(),
    body("score").isInt({gt: 0, lt:101})
]

exports.del = [
    body("id").isInt({gt: 0})
]