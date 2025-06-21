import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async() =>{
    const DB_URL = process.env.DB_URL;
    mongoose.connect(DB_URL).then(()=>{
        console.log("DataBase connected Successfully...")
    }).catch(()=>{
        console.log("Error in connecting to DataBase...")
        process.exit(1);
    })
}

export {connection};