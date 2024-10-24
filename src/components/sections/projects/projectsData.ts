import multiStepFormImage from "../../../assets/images/projects/Multi-Step-Form.png";
import restCountriesApiImage from "../../../assets/images/projects/Rest-Countries-API-light.png";
import todoImage from "../../../assets/images/projects/To-Do.png";
import ageCalcAge from "../../../assets/images/projects/Age-Calculator.png";
import quizAppImage from "../../../assets/images/projects/Quiz.png";
import spaceTourismImage from "../../../assets/images/projects/Destination-Space-Tourism.png";
import climaticImage from "../../../assets/images/projects/Climatic-project.png";
import reactImage from "../../../assets/images/React.png";
import tailwindImage from "../../../assets/images/Tailwind CSS.png";
import typScriptImage from "../../../assets/images/TypeScript.png";
import shadcnImage from "../../../assets/images/shadcn-ui.svg";
import htmlImage from "../../../assets/images/HTML5.png";
import cssImage from "../../../assets/images/CSS3.png";
import jsImage from "../../../assets/images/JavaScript.png";

export const projects = [
  {
    id: 8,
    image: climaticImage,
    title: "Climatic App",
    description:
      "A responsive weather app with real-time forecasts, dynamic themes, and animations. Built with Next.js, React, TypeScript, and Tailwind CSS.",
    techs: [
      {
        techName: "React",
        techImage: reactImage,
      },
      {
        techName: "Next.js",
        techImage: "https://devicon-website.vercel.app/api/nextjs/original.svg",
      },
      {
        techName: "TypeScript",
        techImage: typScriptImage,
      },
      {
        techName: "TailwindCSS",
        techImage: tailwindImage,
      },
      {
        techName: "Framer Motion",
        techImage:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
      {
        techName: "Shadcn UI",
        techImage: shadcnImage,
      },
    ],
    previewLink: "https://climatic-app.netlify.app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/next.js-weather-app",
  },
  {
    id: 7,
    image: spaceTourismImage,
    title: "Space Tourism",
    description:
      "An immersive, multi-page space tourism website designed to give users a glimpse into the cosmos. Built with Next.js, Ant Design, Tailwind CSS, and Framer Motion for a smooth and dynamic user experience. 🌍✨",
    techs: [
      {
        techName: "React",
        techImage: reactImage,
      },
      {
        techName: "Next.js",
        techImage: "https://devicon-website.vercel.app/api/nextjs/original.svg",
      },
      {
        techName: "TypeScript",
        techImage: typScriptImage,
      },
      {
        techName: "TailwindCSS",
        techImage: tailwindImage,
      },
      {
        techName: "Framer Motion",
        techImage:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
      {
        techName: "Ant Design",
        techImage:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
      },
    ],
    previewLink: "https://space-tourism-mpw.netlify.app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/Space-Tourism-MPW",
  },
  {
    id: 1,
    image: multiStepFormImage,
    title: "Multi Step Form",
    description:
      "This project is a multi-step form built with React and Tailwind CSS. The form allows users to navigate through different steps, select a pricing plan, choose add-ons, and view a summary of their selections before submission.",
    techs: [
      {
        techName: "React",
        techImage: reactImage,
      },
      {
        techName: "TailwindCSS",
        techImage: tailwindImage,
      },
      {
        techName: "TypeScript",
        techImage: typScriptImage,
      },
      {
        techName: "Framer Motion",
        techImage:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
      {
        techName: "DaisyUI",
        techImage:
          "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png",
      },
    ],
    previewLink: "https://multi-step-form-3.netlify.app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/Multi-Step-Form",
  },
  {
    id: 2,
    image: restCountriesApiImage,
    title: "Rest Countries API",
    description:
      "A comprehensive React application showcasing world countries with interactive features and stunning visuals. Built with TypeScript for type safety, Tailwind CSS for rapid UI development, and Framer Motion for dynamic animations.",
    techs: [
      {
        techName: "React",
        techImage: reactImage,
      },
      {
        techName: "TailwindCSS",
        techImage: tailwindImage,
      },
      {
        techName: "TypeScript",
        techImage: typScriptImage,
      },
    ],

    previewLink: "https://rest-countries-api-app2.netlify.app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/Rest-Countries-API",
  },
  {
    id: 3,
    image: todoImage,
    title: "To-Do App",
    description:
      "A task management app built with React and TypeScript, featuring drag-and-drop functionality and dark mode.",
    techs: [
      {
        techName: "React",
        techImage: reactImage,
      },
      {
        techName: "TailwindCSS",
        techImage: tailwindImage,
      },
      {
        techName: "TypeScript",
        techImage: typScriptImage,
      },
      {
        techName: "Framer Motion",
        techImage:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
    ],

    previewLink: "https://react-do-app.netlify.app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/React-to-do-app",
  },
  {
    id: 4,
    image: ageCalcAge,
    title: "Age Calculator App",
    description:
      "This application allows you to know your current age by entering you date of birth.",
    techs: [
      {
        techName: "HTML",
        techImage: htmlImage,
      },
      {
        techName: "CSS",
        techImage: cssImage,
      },
      {
        techName: "JavaScript",
        techImage: jsImage,
      },
    ],

    previewLink: "https://mahmoud-elagamy.github.io/Age-calculator-app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/Age-calculator-app",
  },
  {
    id: 6,
    image: quizAppImage,
    title: "Quiz App",
    description:
      "This HTML, CSS, and JavaScript quiz app tests users' knowledge about the life of Prophet Muhammad (peace be upon him). It features multiple-choice questions, instant feedback, and aims to be an engaging learning tool.",
    techs: [
      {
        techName: "HTML",
        techImage: htmlImage,
      },
      {
        techName: "CSS",
        techImage: cssImage,
      },
      {
        techName: "JavaScript",
        techImage: jsImage,
      },
    ],

    previewLink: "https://mahmoud-elagamy.github.io/Quiz-App/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/Quiz-App",
  },
];
