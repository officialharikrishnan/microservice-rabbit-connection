const express= require('express');
const helper = require('./helper');
const bodyParser = require("body-parser");
const amqp=require('amqplib')
const app=express()
app.use(bodyParser.json())
const port=8081;
var channel;
var connection;

connect()

async function connect(){
    try{
    const amqpServer="amqp://localhost:5672";
    connection = await amqp.connect(amqpServer)
    channel = await connection.createChannel()
    await channel.assertQueue("rabbit")
    }catch(err){
        console.log(err);
    }
}

app.get("/send",async (req,res)=>{
    var fakeData={
        name:'hari',
        age:25
    }
    await channel.sendToQueue("rabbit",Buffer.from(JSON.stringify(fakeData)))
    res.send("done")
})
app.get('/datas',(req,res)=>{




    // helper.getData()
    // res.send("hi")
    // console.log("data called");
})
app.listen(port,()=>{
    console.log(`user server started on ${port}`);
})