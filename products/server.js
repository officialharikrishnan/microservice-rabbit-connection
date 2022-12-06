const express = require('express')
const app = express()
const port=8082
var db=require('./connection')

db.connect((err)=>{
    if(err) console.log("Connection error",err);
    else console.log("Database connected successfully");
  })
const helper=require('./helper')

app.get('/',(req,res)=>{
     helper.getData().then((data)=>{
        console.log(data,"called");
        res.json({data})
        // res.json({data})
    })
})

app.listen(port,()=>{
    console.log(`product server started on ${port}`);

})