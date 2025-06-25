import express from 'express';
import {analyzeUser} from "../Controllers/userDataController.js"
import {upload} from "../Middlewares/uploadResume.js"
import {signup} from "../Controllers/userAuth.js";
import {login}from "../Controllers/userAuth.js";
import {logout} from "../Controllers/userAuth.js";
import {auth} from "../Middlewares/AuthnAndAuthz.js";
import {getAvailableOptions} from "../Controllers/getAvailableOptions.js"




const router = express.Router();


router.get('/options' ,(req,res)=> {
    getAvailableOptions(req,res);
})
router.post('/analyze',upload.single('resume'),(req,res)=>{
    analyzeUser(req,res);
    // remember key name shold be resume
})

router.post("/signup",(req,res)=>{
    signup(req,res);
});

router.post("/login",(req,res)=>{
    login(req,res);
});

router.post("/logout",(req,res)=>{
    login(req,res);
});

router.get("/test",auth , (req,res)=>{
    res.status(200).json({
        success : true,
        message : "Logged in successfully..."
    });
});
export {router};
