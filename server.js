import express, { response } from "express";
import "dotenv/config.js"
import "./Config/datbase.js"

const server= express ()
const PORT= process.env.PORT
const Ready= ()=> console.log("El servidor esta listo en el puerto:"+PORT);

server.get('/',(request, response)=>{
    response.send("Hola mundo")
})
server.get('/saludo',(request, response)=>{
    response.send("Hola, bienvenidos al mundo de express")
})
server.listen(PORT, Ready)