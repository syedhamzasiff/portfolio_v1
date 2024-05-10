
export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;
  
  export const projectsData = [
    {
      title: "nqueenzAI",
      description:
        "A Flask web app solving the N-Queens problem using various algorithms. Features adjustable board size, real-time visualization, and intuitive interface for puzzle enthusiasts.",
      tags: ["python", "html", "css", "javascript", "flask"],
      imageUrl: "",
      githubUrl: "https://github.com/syedhamzasiff/ai-nqueen",
      demoUrl: "https://nqueenzai.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a personal portfolio showcasing projects, skills, and contact form. ",
      tags: ["reactjs", "tailwindcss", "Nextjs", "resend", "javascript", "framer motion"],
      imageUrl: "",
      githubUrl: "https://github.com/syedhamzasiff/portfolio_v1",
      demoUrl: ""
    },
    {
      title: "Music Academy",
      description:
        "Developed an engaging front-end landing page for a music academy, featuring a modern design and user-friendly UI.",
      tags: ["Java"],
      imageUrl: "",
      githubUrl: "https://github.com/rzn1337/tsp_ga_v1.1",
      demoUrl: ""
    },
    {
      title: "TSP-GA",
      description:
        "Found near optimal solutions to the Traveling Salesman Problem by leveraging the Genetic Algorithm. Made use of custom data structures, tailored to efficiently represent the problem's elements.",
      tags: ["Java"],
      imageUrl: "",
      githubUrl: "https://github.com/rzn1337/tsp_ga_v1.1",
      demoUrl: ""
    },
    
  ] as const;
  
  export const skillsData = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
  ] as const;