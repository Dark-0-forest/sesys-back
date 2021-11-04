const { body, validationResult } = require('express-validator');

exports.add = [
    body("code").isString(),
    body("name").isString()
]

exports.del = [
    body("id").isInt({gt: 0})
]