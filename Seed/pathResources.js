const pathResources = [
  {
    role: "Backend Developer",
    requiredSkills: ["node.js", "express", "mongodb", "jwt", "rest api"],
    guidedPath: [
      {
        step: "Learn Node.js basics",
        resource: { title: "Node.js Crash Course", url: "https://youtu.be/EfWlJ9-1fVw?si=5TbtsWu2WKDpp1yx" }
      },
      {
        step: "Implement JWT authentication",
        resource: { title: "JWT Auth Tutorial", url: "https://youtu.be/2pn2Bspt6EM?si=p1-Fc7lx3-WhAGAJ" }
      },
      {
        step: "Understand Express framework",
        resource: { title: "Express.js Tutorial", url: "https://youtu.be/pKJ4GGyDgJo?si=E0LB635uLxD0OomM" }
      },
      {
        step: "Build RESTful APIs",
        resource: { title: "REST API Tutorial", url: "https://youtu.be/uNCrMvkPUAE?si=h6UWh8vgYMb_VWjv" }
      },
      {
        step: "Integrate MongoDB",
        resource: { title: "MongoDB Crash Course", url: "https://youtu.be/QPFlGswpyJY?si=ACNSCKDACFf10LvC" }
      }
    ]
  },
  {
    role: "Frontend Developer",
    requiredSkills: ["html", "css", "javascript", "react", "git"],
    guidedPath: [
      {
        step: "Learn HTML & CSS",
        resource: { title: "HTML Full Course", url: "https://youtu.be/HBqWsrqK89U?si=DB4dH8iujZB2EGf1" }
      },
      {
        step: "Master JavaScript (ES6+)",
        resource: { title: "JavaScript ES6 Tutorial", url: "https://youtu.be/nZ1DMMsyVyI?si=exC8_BQoNC-psIs6" }
      },
      {
        step: "Learn React basics",
        resource: { title: "React Docs", url: "https://youtu.be/eILUmCJhl64?si=Hl1ftKcld5cvlD6Q" }
      },
      {
        step: "Build frontend projects",
        resource: { title: "React Projects Tutorial", url: "https://youtu.be/5ZdHfJVAY-s?si=2El4MS4Sj4xT4w0F" }
      },
      {
        step: "Understand Git & GitHub",
        resource: { title: "Git & GitHub Crash Course", url: "https://youtu.be/Ez8F0nW6S-w?si=GsiydGImkeGS-xhW" }
      }
    ]
  },
  {
    role: "Full Stack Developer",
    requiredSkills: ["html", "css", "javascript", "react", "node.js", "express", "mongodb"],
    guidedPath: [
      {
        step: "Master frontend with HTML, CSS, JS, React",
        resource: { title: "Frontend Web Dev Bootcamp", url: "https://youtu.be/jgfq8OybWZQ?si=-UyKbEAqVwl4b0eB" }
      },
      {
        step: "Learn backend with Node.js and Express",
        resource: { title: "MERN Stack Tutorial", url: "https://youtu.be/EfWlJ9-1fVw?si=5TbtsWu2WKDpp1yx" }
      },
      {
        step: "Connect frontend and backend",
        resource: { title: "React + Node Integration", url: "https://youtu.be/yKB9OyM-ao4?si=KfCD3bULSzj40EE1" }
      },
      {
        step: "Build full-stack projects",
        resource: { title: "Full Stack Projects", url: "https://youtu.be/eRTTlS0zaW8?si=CiMcru1KA90gaSsh" }
      },
      {
        step: "Deploy apps using Render/Netlify",
        resource: { title: "Deploy Full Stack App", url: "https://youtu.be/mhQWPV8GUDw?si=9cAb16IeABzTPgH0" }
      }
    ]
  },
  {
    role: "ML Engineer",
    requiredSkills: ["python", "pandas", "numpy", "scikit-learn", "tensorflow"],
    guidedPath: [
      {
        step: "Learn Python and Numpy/Pandas",
        resource: { title: "Python for Data Science", url: "https://youtu.be/LHBE6Q9XlzI?si=sr2QsqfssLyUQj_x" }
      },
      {
        step: "Master ML algorithms (scikit-learn)",
        resource: { title: "ML Crash Course", url: "https://youtu.be/NWONeJKn6kc?si=6teGCIrtX04HoEdM" }
      },
      {
        step: "Build ML projects and evaluate models",
        resource: { title: "End-to-End ML Project", url: "https://youtu.be/o6vbe5G7xNo?si=JUXeouT1CLv56zd1" }
      },
      {
        step: "Explore Deep Learning with TensorFlow/Keras",
        resource: { title: "TensorFlow Tutorial", url: "https://youtu.be/tPYj3fFJGjk?si=RUqjq0pMMQlB5rJc" }
      },
      {
        step: "Work on real datasets (Kaggle/UCI)",
        resource: { title: "Kaggle Data Analysis", url: "https://youtu.be/fFi_TBw27is?si=sl6NMpkILx6P3y1M" }
      }
    ]
  },
  {
    role: "Data Analyst",
    requiredSkills: ["python", "excel", "sql", "power bi", "tableau"],
    guidedPath: [
      {
        step: "Master Excel for data cleaning",
        resource: { title: "Excel for Data Analysis", url: "https://youtu.be/7QNgqq154gE?si=rfzm-vQqtoPzcyZt" }
      },
      {
        step: "Learn SQL for querying data",
        resource: { title: "SQL Tutorial", url: "https://youtu.be/hlGoQC332VM?si=gUet6luURah6yZbZ" }
      },
      {
        step: "Use Python for data analysis",
        resource: { title: "Python Data Analysis", url: "https://youtu.be/GPVsHOlRBBI?si=QBRl6sWybQJss6vF" }
      },
      {
        step: "Build dashboards using Power BI/Tableau",
        resource: { title: "Power BI Full Course", url: "https://youtu.be/e6QD8lP-m6E?si=eggrdAP4jL-zKeQg" }
      },
      {
        step: "Interpret data and generate reports",
        resource: { title: "Storytelling with Data", url: "https://www.youtube.com/live/IfKlOC5HSHI?si=bIXin8Gbqa00H_78" }
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
        resource: { title: "Figma UI Design Tutorial", url: "https://www.youtube.com/live/ZWYyiPwCi54?si=Abbt1OKMOKyneGzs" }
      },
      {
        step: "Create wireframes and mockups",
        resource: { title: "Figma Wireframe Tutorial", url: "https://youtu.be/mHoux2jITnE?si=gtUFORkeNX-XU6uF" }
      },
      {
        step: "Conduct user research and testing",
        resource: { title: "UX Research Basics", url: "https://youtu.be/Qeb5gC6El0g" }
      },
      {
        step: "Build a UI/UX design portfolio",
        resource: { title: "Design Portfolio Guide", url: "https://youtu.be/PNG0Qvl-PdQ?si=gKNG1ua44hiVtOch" }
      }
    ]
  },
  {
    role: "Cybersecurity Analyst",
    requiredSkills: ["networking", "linux", "firewalls", "siem", "cryptography"],
    guidedPath: [
      {
        step: "Learn networking basics and OSI model",
        resource: { title: "Networking for Beginners", url: "https://youtu.be/RY32wSQDekE?si=Wws1PywPSwZ8zGy8" }
      },
      {
        step: "Understand Linux CLI and file systems",
        resource: { title: "Linux for Hackers", url: "https://youtu.be/IyKWSc7s760?si=j432QdtZBYXdsJCj" }
      },
      {
        step: "Study firewalls and intrusion detection",
        resource: { title: "Firewall & IDS Tutorial", url: "https://youtu.be/l7FeR1MIRFY?si=TW6_GjUPcZkQY0KU" }
      },
      {
        step: "Use SIEM tools (Splunk, ELK)",
        resource: { title: "SIEM Introduction", url: "https://youtu.be/zrgBrpv4azs?si=IeScwbvqop3ZV4S-" }
      },
      {
        step: "Learn ethical hacking and encryption",
        resource: { title: "Cybersecurity Full Course", url: "https://youtu.be/hXSFdwIOfnE?si=1Hm8RQkuKgObvERh" }
      }
    ]
  },
  {
    role: "Cloud Engineer",
    requiredSkills: ["aws", "docker", "kubernetes", "linux", "ci/cd"],
    guidedPath: [
      {
        step: "Learn Cloud Fundamentals (AWS/Azure)",
        resource: { title: "AWS Crash Course", url: "https://youtu.be/B8i49C8fC3E?si=2vmlZgERDFZU7-V6" }
      },
      {
        step: "Understand Linux and Shell Scripting",
        resource: { title: "Linux Shell Scripting", url: "https://youtu.be/TtGM9GfBuok?si=7FAd38t41FGlWFGw" }
      },
      {
        step: "Use Docker for containerization",
        resource: { title: "Docker Tutorial", url: "https://youtu.be/exmSJpJvIPs?si=B_-FM3dIE2Wcy610" }
      },
      {
        step: "Deploy with Kubernetes",
        resource: { title: "Kubernetes Crash Course", url: "https://youtu.be/XuSQU5Grv1g?si=ujBO_P3TUHEpMvdH" }
      },
      {
        step: "Automate with CI/CD pipelines",
        resource: { title: "CI/CD with GitHub Actions", url: "https://youtu.be/ciqWMIf7Pz0?si=6bLS08sWTFFIY4Bm" }
      }
    ]
  }
];

export { pathResources };
