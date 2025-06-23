import express from 'express';
import {analyzeUser} from "../Controllers/userDataController.js"
import {upload} from "../Middlewares/uploadResume.js"
const router = express.Router();


router.post('/analyze',upload.single('resume'),(req,res)=>{
    analyzeUser(req,res);
    // remember key name shold be resume
})

export {router};
