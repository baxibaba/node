var fs = require('fs')

fs.open('./input.txt',"a+",function(err,data){
    if(err){
        return console.error(err)
    }
    console.log("文件打开啦")

    fs.writeFile('./input.txt',"bb",function(err,data){
        if(err){
            return console.error("err",err)
        }
    })
})