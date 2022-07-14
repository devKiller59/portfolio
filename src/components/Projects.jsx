import '../assets/styles/projects.css'
import project1 from "../assets/images/projects/project1.png";
import project2 from "../assets/images/projects/project2.png";
import project3 from "../assets/images/projects/project3.png";
import project4 from "../assets/images/projects/project4.png";
import project5 from "../assets/images/projects/project5.png";
import project6 from "../assets/images/projects/project6.jpg";
// import projectLand from "../assets/images/projects/projectLand.jpg";
import { useTheme } from "../context/ThemeProvider";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("global");

  const projects = [
    {
      id: 1,
      src: project1,
      title: (t("projects.card.title1")),
      description: (t("projects.card.description1")),
      technologies: "HTML, CSS",
      demo: "https://instaprices.netlify.app",
      code: "https://github.com/TheKiller1959/InstaPrices"
    },
    {
      id: 2,
      src: project2,
      title: (t("projects.card.title2")),
      description: (t("projects.card.description2")),
      technologies: "HTML, CSS, JavaScript",
      demo: "https://randomquotes-thekiller1959.netlify.app",
      code: "https://github.com/TheKiller1959/random-quotes"
    },
    {
      id: 3,
      src: project3,
      title: (t("projects.card.title3")),
      description: (t("projects.card.description3")),
      technologies: "HTML, CSS, JavaScript, React.js, Axios",
      demo: "https://collab-rick-and-morty.netlify.app",
      code: "https://github.com/TheKiller1959/rick-y-morty",
    },
    {
      id: 4,
      src: project4,
      title: (t("projects.card.title4")),
      description: (t("projects.card.description4")),
      technologies: "HTML, CSS, JavaScript, React.js, Axios",
      demo: "https://thekiller1959-weather-app.netlify.app",
      code: "https://github.com/TheKiller1959/weather-app",
    },
    {
      id: 5,
      src: project5,
      title: (t("projects.card.title5")),
      description: (t("projects.card.description5")),
      technologies: "HTML, CSS, JavaScript, React.js, Axios",
      demo: "https://thkdev-crud.netlify.app",
      code: "https://github.com/TheKiller1959/crud",
    },
    {
      id: 6,
      src: project6,
      title: (t("projects.card.title6")),
      description: (t("projects.card.description6")),
      technologies: "HTML, CSS, JavaScript, React.js, Node.js, Express, Sequelize, MongoDB",
      demo: "https://infinite-caverns-17893.herokuapp.com",
      code: "https://github.com/TheKiller1959/heroku-prueba",
    }
  ]



  return (
    <div id='projects' name="Proyectos" className="projects" style={{ backgroundColor: theme.projectBackground, color: theme.projectTextColor, transition: ".2s" }} >
      <h1>{t("projects.title")}</h1>
      <h2>{t("projects.description")}</h2>
      <div className='grid'>
        {projects.map(({ id, src, title, description, technologies, demo, code }) => (
          <div className="card" key={id}>
            <div className="face front">
              <h3>{title}</h3>
              <img src={src} alt={title} />
            </div>
            <div className="face back">
              <h3>{title}</h3>
              <p>{description}</p>
              <p>{t("projects.technologies")}<b>{technologies}</b></p>
              <div className="link">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button>{t("projects.button")}</button>
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button>{t("projects.button2")}</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
};


export default Projects;