const pathResources = [
  {
    role: "Backend Developer",
    requiredSkills: ["node.js", "express", "mongodb", "jwt", "rest api"],
    guidedPath: [
      {
        step: "Learn Node.js basics",
        resource: { title: "Node.js Crash Course", url: "https://youtu.be/fBNz5xF-Kx4" }
      },
      {
        step: "Implement JWT authentication",
        resource: { title: "JWT Auth Tutorial", url: "https://youtu.be/mbsmsi7l3r4" }
      },
      {
        step: "Understand Express framework",
        resource: { title: "Express.js Tutorial", url: "https://youtu.be/L72fhGm1tfE" }
      },
      {
        step: "Build RESTful APIs",
        resource: { title: "REST API Tutorial", url: "https://youtu.be/qwfE7fSVaZM" }
      },
      {
        step: "Integrate MongoDB",
        resource: { title: "MongoDB Crash Course", url: "https://youtu.be/ofme2o29ngU" }
      }
    ]
  },
  {
    role: "Frontend Developer",
    requiredSkills: ["html", "css", "javascript", "react", "git"],
    guidedPath: [
      {
        step: "Learn HTML & CSS",
        resource: { title: "HTML Full Course", url: "https://youtu.be/pQN-pnXPaVg" }
      },
      {
        step: "Master JavaScript (ES6+)",
        resource: { title: "JavaScript ES6 Tutorial", url: "https://youtu.be/NCwa_xi0Uuc" }
      },
      {
        step: "Learn React basics",
        resource: { title: "React Docs", url: "https://react.dev/" }
      },
      {
        step: "Build frontend projects",
        resource: { title: "React Projects Tutorial", url: "https://youtu.be/a_7Z7C_JCyo" }
      },
      {
        step: "Understand Git & GitHub",
        resource: { title: "Git & GitHub Crash Course", url: "https://youtu.be/RGOj5yH7evk" }
      }
    ]
  },
  {
    role: "Full Stack Developer",
    requiredSkills: ["html", "css", "javascript", "react", "node.js", "express", "mongodb"],
    guidedPath: [
      {
        step: "Master frontend with HTML, CSS, JS, React",
        resource: { title: "Frontend Web Dev Bootcamp", url: "https://youtu.be/zJSY8tbf_ys" }
      },
      {
        step: "Learn backend with Node.js and Express",
        resource: { title: "MERN Stack Tutorial", url: "https://youtu.be/7CqJlxBYj-M" }
      },
      {
        step: "Connect frontend and backend",
        resource: { title: "React + Node Integration", url: "https://youtu.be/vjf774RKrLc" }
      },
      {
        step: "Build full-stack projects",
        resource: { title: "Full Stack Projects", url: "https://youtu.be/mxM0x4EOj4I" }
      },
      {
        step: "Deploy apps using Render/Netlify",
        resource: { title: "Deploy Full Stack App", url: "https://youtu.be/1wZw7Rv_QdM" }
      }
    ]
  },
  {
    role: "ML Engineer",
    requiredSkills: ["python", "pandas", "numpy", "scikit-learn", "tensorflow"],
    guidedPath: [
      {
        step: "Learn Python and Numpy/Pandas",
        resource: { title: "Python for Data Science", url: "https://youtu.be/rfscVS0vtbw" }
      },
      {
        step: "Master ML algorithms (scikit-learn)",
        resource: { title: "ML Crash Course", url: "https://youtu.be/GwIo3gDZCVQ" }
      },
      {
        step: "Build ML projects and evaluate models",
        resource: { title: "End-to-End ML Project", url: "https://youtu.be/7eh4d6sabA0" }
      },
      {
        step: "Explore Deep Learning with TensorFlow/Keras",
        resource: { title: "TensorFlow Tutorial", url: "https://youtu.be/tPYj3fFJGjk" }
      },
      {
        step: "Work on real datasets (Kaggle/UCI)",
        resource: { title: "Kaggle Data Analysis", url: "https://youtu.be/1i0zu9jHN6U" }
      }
    ]
  },
  {
    role: "Data Analyst",
    requiredSkills: ["python", "excel", "sql", "power bi", "tableau"],
    guidedPath: [
      {
        step: "Master Excel for data cleaning",
        resource: { title: "Excel for Data Analysis", url: "https://youtu.be/ukzFI9rgwfU" }
      },
      {
        step: "Learn SQL for querying data",
        resource: { title: "SQL Tutorial", url: "https://youtu.be/27axs9dO7AE" }
      },
      {
        step: "Use Python for data analysis",
        resource: { title: "Python Data Analysis", url: "https://youtu.be/r-uOLxNrNk8" }
      },
      {
        step: "Build dashboards using Power BI/Tableau",
        resource: { title: "Power BI Full Course", url: "https://youtu.be/AGrl-H87pRU" }
      },
      {
        step: "Interpret data and generate reports",
        resource: { title: "Storytelling with Data", url: "https://youtu.be/S9G9wWZxht8" }
      }
    ]
  },
  {
    role: "UI/UX Designer",
    requiredSkills: ["figma", "wireframing", "prototyping", "design thinking", "user research"],
    guidedPath: [
      {
        step: "Understand design thinking process",
        resource: { title: "Design Thinking Explained", url: "https://youtu.be/a7sEoEvT8l8" }
      },
      {
        step: "Learn Figma and prototyping tools",
        resource: { title: "Figma UI Design Tutorial", url: "https://youtu.be/jwCmIBJ8Jtc" }
      },
      {
        step: "Create wireframes and mockups",
        resource: { title: "Figma Wireframe Tutorial", url: "https://youtu.be/wR0jg0eQsZA" }
      },
      {
        step: "Conduct user research and testing",
        resource: { title: "UX Research Basics", url: "https://youtu.be/Qeb5gC6El0g" }
      },
      {
        step: "Build a UI/UX design portfolio",
        resource: { title: "Design Portfolio Guide", url: "https://youtu.be/w58TtI9q3jE" }
      }
    ]
  },
  {
    role: "Cybersecurity Analyst",
    requiredSkills: ["networking", "linux", "firewalls", "siem", "cryptography"],
    guidedPath: [
      {
        step: "Learn networking basics and OSI model",
        resource: { title: "Networking for Beginners", url: "https://youtu.be/qz2XNfV75yE" }
      },
      {
        step: "Understand Linux CLI and file systems",
        resource: { title: "Linux for Hackers", url: "https://youtu.be/ivwRB7I0M14" }
      },
      {
        step: "Study firewalls and intrusion detection",
        resource: { title: "Firewall & IDS Tutorial", url: "https://youtu.be/Ry4rExR0FlY" }
      },
      {
        step: "Use SIEM tools (Splunk, ELK)",
        resource: { title: "SIEM Introduction", url: "https://youtu.be/5MQS0vyYfYc" }
      },
      {
        step: "Learn ethical hacking and encryption",
        resource: { title: "Cybersecurity Full Course", url: "https://youtu.be/inWWhr5tnEA" }
      }
    ]
  },
  {
    role: "Cloud Engineer",
    requiredSkills: ["aws", "docker", "kubernetes", "linux", "ci/cd"],
    guidedPath: [
      {
        step: "Learn Cloud Fundamentals (AWS/Azure)",
        resource: { title: "AWS Crash Course", url: "https://youtu.be/ulprqHHWlng" }
      },
      {
        step: "Understand Linux and Shell Scripting",
        resource: { title: "Linux Shell Scripting", url: "https://youtu.be/v-F3YLd6oMw" }
      },
      {
        step: "Use Docker for containerization",
        resource: { title: "Docker Tutorial", url: "https://youtu.be/3c-iBn73dDE" }
      },
      {
        step: "Deploy with Kubernetes",
        resource: { title: "Kubernetes Crash Course", url: "https://youtu.be/X48VuDVv0do" }
      },
      {
        step: "Automate with CI/CD pipelines",
        resource: { title: "CI/CD with GitHub Actions", url: "https://youtu.be/eB0nUzAI7M8" }
      }
    ]
  }
];

export { pathResources };
