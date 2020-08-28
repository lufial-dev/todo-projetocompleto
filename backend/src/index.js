const express = require('express');
const server = express();
const TaskRouter = require('./router/TaskRouter');

server.use(express.json());
server.use("/task", TaskRouter);



server.get('/teste', (req, res)=>{
    res.send("Helo Word! Bem vindo ao todo ")
});

server.listen(3000, ()=>{
    console.log("API online");
});