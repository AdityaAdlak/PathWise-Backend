// Route to provide available interests and skills to the frontend
const getAvailableOptions = async (req, res) => {
  try {
    const options = {
      interests: [
        "AI", "APIs", "Analytics", "Cloud Computing", "Cybersecurity",
        "Data Science", "Design", "DevOps", "ML", "Networking",
        "Software Engineering", "UI/UX", "Web Development"
      ],
      skills: [
        "AWS", "Adobe XD", "CI/CD", "CSS", "Docker", "Excel", "Express",
        "Figma", "HTML", "Java", "JavaScript", "Linux", "MongoDB",
        "Networking", "Node.js", "NumPy", "Pandas", "Python", "React",
        "SQL", "TensorFlow"
      ]
    };

    res.status(200).json(options);
  } catch (error) {
    console.error("Error fetching options:", error);
    res.status(500).json({ error: "Failed to fetch options" });
  }
};

export { getAvailableOptions };
