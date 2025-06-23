import mongoose from "mongoose"

const guidedStepSchema = new mongoose.Schema({
    step: {type : String , required : true},
  resource: {
    title: String,
    url: String
  }
});

const roleGuideSchema = new mongoose.Schema({
    role : {
        type : String,
        required : true
    },
    requiredSkills : [String],
    guidedPath: [guidedStepSchema],
});

const RoleGuide = mongoose.model("RoleGuide",roleGuideSchema);
export {RoleGuide};


