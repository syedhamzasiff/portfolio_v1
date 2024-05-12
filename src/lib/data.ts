import nqueenzAiPNG from "../../public/nqueenAi.png"
import tspGAPNG from "../../public/tspGa.png"
import portfolioWebsitePNG from '../../public/portfolioWebsite.png'
import incogMemosPNG from "../../public/incogMemosPNG.png"


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
      title: "IncogMemos",
      description:
        "Developed an anonymous messaging platform with user authentication, personalized dashboards, promoting intuitive messaging experiences.",
      tags: ["ReactJS", "Next.js", "MongoDB","Typescript", "TailwindCSS", "React Hook Form", "NextAuth"],
      imageUrl: incogMemosPNG,
      githubUrl: "https://github.com/syedhamzasiff/IncogMemo",
      demoUrl: "https://incogmemos.vercel.app/"
    },
    {
      title: "Personal Portfolio Website",
      description:
        "",
      tags: ["Nextjs", "ReactJS", "Typescript", "Tailwindcss", "Resend", "Shadcn-ui"],
      imageUrl: portfolioWebsitePNG,
      githubUrl: "https://github.com/syedhamzasiff/portfolio_v1",
      demoUrl: "#home"
    },
    {
      title: "nqueenzAI",
      description:
        "A Flask web app solving the N-Queens problem using various algorithms. Features adjustable board size, real-time visualization, and intuitive interface for puzzle enthusiasts.",
      tags: ["python", "html", "css", "javascript", "flask"],
      imageUrl: nqueenzAiPNG,
      githubUrl: "https://github.com/syedhamzasiff/ai-nqueen",
      demoUrl: "https://nqueenzai.vercel.app/"
    },
    {
      title: "TSP-GA",
      description:
        "Found near optimal solutions to the Traveling Salesman Problem by leveraging the Genetic Algorithm. Made use of custom data structures, tailored to efficiently represent the problem's elements.",
      tags: ["Java"],
      imageUrl: tspGAPNG,
      githubUrl: "https://github.com/rzn1337/tsp_ga_v1.1",
      demoUrl: "https://www.youtube.com/watch?v=ybFS29x4DGY"
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