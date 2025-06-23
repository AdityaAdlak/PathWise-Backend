


import mongoose from "mongoose";
import {pathResources} from "../Seed/pathResources.js";
import dotenv from "dotenv";
import {RoleGuide} from "../Models/RoleGuide.js";
dotenv.config();

const insertGuides = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        await RoleGuide.deleteMany();
        await RoleGuide.insertMany(pathResources);

        console.log("Path Guide updated successfully...");
        process.exit();
    } catch (error) {
        console.error("Failed to insert path guide...",error);
        process.exit(1);
    }
}

insertGuides();

