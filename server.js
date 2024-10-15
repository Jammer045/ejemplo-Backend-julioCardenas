import express, { response } from "express";
import "dotenv/config.js"
import "./Config/datbase.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./router/index.js"

const server= express ()
const PORT= process.env.PORT
const Ready= ()=> console.log("El servidor esta listo en el puerto:"+PORT);

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cors())
server.use(morgan('dev'))
server.use("/api", indexRouter)

server.listen(PORT, Ready)