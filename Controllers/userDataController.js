import axios from "axios";
import {RoleGuide} from "../Models/RoleGuide.js";

const analyzeUser = async(req,res)=>{
    try {
    const {interests,
      skills,
      stream,
      education,
      time} = req.body;


    const userData = {
  interests: interests,
  skills: skills,
  stream: stream.trim(),
  education: education.trim(),
  time: time.trim()
}

console.log("logging user data ",userData)

    const mlResponse = await axios.post('http://localhost:5000/predict', userData);
    const predictedRole = mlResponse.data.predicted_role;

    console.log("Printing the role...",predictedRole);
    console.log("Printing ml response...",mlResponse);

    // Extracting skills from resume
    let extractedSkillsFromResume = [];
    if(req.file)
    {
        const pdBuffer = req.file.buffer;
        const resumeResponse = await axios.post('http://localhost:6000/scan-resume',pdBuffer,{
            headers : {
                'Content-Type' : 'application/pdf'
            }
        });
        extractedSkillsFromResume = resumeResponse.data.extracted_skills || [];
    }

    // extracting guided path giving output

    const guide = await RoleGuide.findOne({role : predictedRole});

    if(!guide)
    {
        return res.status(404).json({ error: "Role guide not found" });
    }


    
    const extracted = extractedSkillsFromResume.map(skill => skill.toLowerCase());
    const required = guide.requiredSkills.map(skill => skill.toLowerCase());


    const matchedSkills = required.filter(skill => extracted.includes(skill));
    const missingSkills = required.filter(skill => !extracted.includes(skill));

    const matchScore = Math.round((matchedSkills.length / required.length) * 100);


    const feedback = [];
    if (matchedSkills.length > 0) {
  feedback.push(`Good: You already have ${matchedSkills.map(s => capitalize(s)).join(', ')}.`);
    }
    if (missingSkills.length > 0) {
  feedback.push(`Missing: ${missingSkills.map(s => capitalize(s)).join(', ')}.`);
    }


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


    return res.status(200).json({
    predictedRole,
      extractedSkillsFromResume,
      requiredSkills: guide.requiredSkills,
      guidedPath: guide.guidedPath,
      feedback : feedback,
      matchScore : matchScore,
    })


    } catch (error) {
        console.error("Analyze error ",error);
        return res.status(500).json({ error: "Failed to process analysis" });
    }
}

export {analyzeUser};




