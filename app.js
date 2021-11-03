const express = require("express");
const cors = require("cors");

const app = express();

// 设置跨域
app.use(cors());
// 设置请求体解析
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.listen(80);