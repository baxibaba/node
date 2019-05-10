const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("hello,world")
})


var server = app.listen(3001,function(){
    var address = server.address().address
    var port = server.address().port
    console.log("应该的实例 http://%s:%s",address,port)
})