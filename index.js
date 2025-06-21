import express from "express";
const app = express();
import bodyParser from 'body-parser';
import {router} from "./Routes/router.js";

import {connection} from "./Config/dbConnectivity.js"
connection();

import cors from "cors";
app.use(cors());
app.use(bodyParser.json());
app.use("/Api",router);



app.get("/",(req,res)=>{
    res.send("This is start bro");
})

app.listen(3000 , ()=>{
    console.log("App is listening on port : ",3000);
})