const express = require('express');
const gateway = require('fast-gateway')
// const app=express()

const server = gateway({
    routes: [
        {
            prefix: '/users',
            target: 'http://localhost:8081/'
        },
        {
            prefix: '/products',
            target: 'http://localhost:8082/'
        }
    ]
})

const port = 3000;

server.get('/', (req, res) => {
    res.send('gateway')
})

server.start(port).then(() => {
    console.log("gateway running ");
})