import express from "express";
const app = express();
import bodyParser from 'body-parser';
import {router} from "./Routes/router.js";
import dotenv from "dotenv";

import {connection} from "./Config/dbConnectivity.js"
connection();

dotenv.config();

import cors from "cors";
app.use(cors());
app.use(bodyParser.json());
app.use("/Api",router);

const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("This is start bro");
})

app.listen(PORT , ()=>{
    console.log("App is listening on port : ",3000);
})