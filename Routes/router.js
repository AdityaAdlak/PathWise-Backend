import express from 'express';
import {rolePrediction} from "../Controllers/roleController.js"
const router = express.Router();

router.post('/predict-role', async (req, res) => {
    rolePrediction(req,res);
});

export {router};
