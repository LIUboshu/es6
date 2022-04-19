// 入口文件
import * as m1

// 模块引入 
from "./19-2m1.js";
import * as m2 from "./19-2m2.js";
import * as m3 from "./19-2m3.js";
console.log(m1);
console.log(m2);
console.log(m3);
m1.teach();
m2.findJob();
m3.default.change();

// 修改背景颜色  为粉色
import $ from 'jquery';// const $ = require("jquery")
$('body').css("background","pink");// 重新转换和打包