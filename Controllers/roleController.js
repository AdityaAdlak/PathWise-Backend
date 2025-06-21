import axios from 'axios'
const rolePrediction = async(req,res)=>{

const userData = req.body;
console.log("Printing the user data ",userData);

try {
    const response = await axios.post('http://localhost:5000/predict', userData);
    const predictedRole = response.data.predicted_role;
    res.status(200).json({ predictedRole });

} catch (error) {
    console.error('Prediction Error:', error.message);
    res.status(500).json({ error: 'Prediction failed' });
}
}

export {rolePrediction};