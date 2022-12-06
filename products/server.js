const express = require('express')
const app = express()
const amqp=require('amqplib')
const port=8082
var db=require('./connection')

var channel;
var connection;

connect()

async function connect(){
    try{
    const amqpServer="amqp://localhost:5672";
    connection = await amqp.connect(amqpServer)
    channel = await connection.createChannel()
    await channel.assertQueue("rabbit")
    channel.consume("rabbit",(data)=>{
        console.log(`got data ${Buffer.from(data.content)}`);
    })
    }catch(err){
        console.log(err);
    }
}


db.connect((err)=>{
    if(err) console.log("Connection error",err);
    else console.log("Database connected successfully");
  })
const helper=require('./helper')

app.get('/',(req,res)=>{





    //  helper.getData().then((data)=>{
    //     console.log(data,"called");
    //     res.json({data})
    //     // res.json({data})
    // })
})

app.listen(port,()=>{
    console.log(`product server started on ${port}`);

})