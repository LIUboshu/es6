// 引入fs模块
const fs = require("fs");
// 回调地狱
/* 
fs.readFile('./json/1.txt',(err,data1)=>{
    fs.readFile('./json/2.txt',(err,data2)=>{
        fs.readFile('./json/3.txt',(err,data3)=>{
            let result = data1 +'\r\n'+ data2 +'\r\n'+ data3;
            console.log(result);
        })
    });
});
 */

 // 使用promise实现
 const p = new Promise((resolve,reject)=>{
    fs.readFile('./json/1.txt',(err,data1)=>{
        resolve(data1);
    });
 })
 p.then(value=>{// 这里的value是第一个文件的结果
    return new Promise((resolve,reject)=>{
        fs.readFile('./json/2.txt',(err,data)=>{
            resolve([value,data]);
        });
    });
 }).then(value=>{// 此时的value 是  第一个文件和第二个文件的数组
    return new Promise((resolve,reject)=>{
        fs.readFile('./json/3.txt',(err,data)=>{
            // 压入
            value.push(data);
            resolve(value);
        });
    });
 }).then(value => {
    console.log(value.join('\r\n'));// 三个文件形成的数组
 })