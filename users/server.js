const express= require('express');
const helper = require('./helper');
const bodyParser = require("body-parser");
const app=express()
app.use(bodyParser.json())
const port=8081;

app.get("/",(req,res)=>{
    res.send('user')
})
app.get('/datas',(req,res)=>{
    helper.getData()
    res.send("hi")
    console.log("data called");
})
app.listen(port,()=>{
    console.log(`user server started on ${port}`);
})