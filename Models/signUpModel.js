import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }
});

const SignUp = mongoose.model("SignUp",signUpSchema);
export {SignUp};

