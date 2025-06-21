import express from "express";
const app = express();

import {connection} from "./Config/dbConnectivity.js"
connection();

app.get("/",(req,res)=>{
    res.send("This is start bro");
})

app.listen(3000 , ()=>{
    console.log("App is listening on port : ",3000);
})