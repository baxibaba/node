const express = require('express')
const app = express()
const badyParser = require('body-parser')


const urlencodedParser = badyParser.urlencoded({extended:false})
app.use(express.static('public'))
// 主页输出
app.get('/index.post.htm',function(req,res){
 res.sendFile(__dirname+'/'+'index.post.htm')
})

//  POST 请求
app.post('/process_post',urlencodedParser, function (req, res) {
    console.log("主页 POST 请求");

    var response ={
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    }
  console.log(response)
  res.end(JSON.stringify(response))
 })


app.listen(3001)