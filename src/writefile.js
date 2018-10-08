var fs = require('fs')
console.log('开始写入了')
fs.writeFile('./input.txt','这部分是被写入的',function (err,data){
    if(err){
        return console.error("报错了",err)
    }
    console.log("数据写入成功")
    console.log("------------我是分割线----------")
    console.log("读取写入数据")

    fs.readFile('./input.txt',function (err,data){
        if(err){
            return console.error("err",err)
        }
        console.log("异步读写 文件数据:"+data.toString())
    })
})