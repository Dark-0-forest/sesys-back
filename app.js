const express = require("express");
const cors = require("cors");
const url = require("url")

url.parse

const supplierRouter = require("./router/supplier");
const evaluateRouter = require("./router/evaluate");

const app = express();

// 设置跨域
app.use(cors());
// 设置请求体解析
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 设置路由
app.use("/sup", supplierRouter);
app.use("/evaluate", evaluateRouter);


app.listen(8001);