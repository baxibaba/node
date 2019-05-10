const express = require('express')
const  app = express()


app.use(express.static('public'))
// 主页输出
app.get('/',function(req,res){
 
    res.send("hello get")
})

// //  POST 请求
// app.post('/', function (req, res) {
//     console.log("主页 POST 请求");
//     res.send('Hello POST');
//  })

app.get('/hello/*',function(req,res){
    res.send("get hello ")
})
app.listen(3001)