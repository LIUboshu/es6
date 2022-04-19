const fs = require("fs");

function a (){
    return new Promise((resolve,reject)=>{
        fs.readFile("./json/1.txt",(err,data)=>{
            // 如果失败
            if(err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

function b (){
    return new Promise((resolve,reject)=>{
        fs.readFile("./json/2.txt",(err,data)=>{
            // 如果失败
            if(err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

function c (){
    return new Promise((resolve,reject)=>{
        fs.readFile("./json/3.txt",(err,data)=>{
            // 如果失败
            if(err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

async function main(){
    // 获取a的内容
    let a1 = await a();
    let b1 = await b();
    let c1 = await c();
    console.log(a1.toString());
    console.log(b1.toString());
    console.log(c1.toString());
}
main();