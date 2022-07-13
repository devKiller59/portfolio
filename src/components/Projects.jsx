import '../assets/styles/projects.css'
import project1 from "../assets/images/projects/project1.png";
import project2 from "../assets/images/projects/project2.png";
import project3 from "../assets/images/projects/project3.png";
import project4 from "../assets/images/projects/project4.png";
import project5 from "../assets/images/projects/project5.png";
import projectLand from "../assets/images/projects/projectLand.jpg";
import { useTheme } from "../context/ThemeProvider";

const Projects = () => {
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      src: project1,
      title: "InstaPrices",
      description: "Imitación de Instagram dirigido a empresas para que ofrezcan sus productos y servicios",
      technologies: "HTML, CSS",
      demo: "https://instaprices.netlify.app",
      code: "https://github.com/TheKiller1959/InstaPrices"
    },
    {
      id: 2,
      src: project2,
      title: "Random Quotes",
      description: "Generador de citas aleatorias, con opciones de color y compartir en Twitter",
      technologies: "HTML, CSS, JavaScript",
      demo: "https://randomquotes-thekiller1959.netlify.app",
      code: "https://github.com/TheKiller1959/random-quotes"
    },
    {
      id: 3,
      src: project3,
      title: "Rick and Morty App",
      description: "Proyecto inspirado en la popular serie de TV, basado en la API de Rick and Morty",
      technologies: "HTML, CSS, JavaScript, React.js, Axios",
      demo: "https://collab-rick-and-morty.netlify.app",
      code: "https://github.com/TheKiller1959/rick-y-morty",
    },
    {
      id: 4,
      src: project4,
      title: "Weather App",
      description: "App que muestra informacion del clima basado en la API de OpenWeatherMap",
      technologies: "HTML, CSS, JavaScript, React.js, Axios",
      demo: "https://thekiller1959-weather-app.netlify.app",
      code: "https://github.com/TheKiller1959/weather-app",
    },
    {
      id: 5,
      src: project5,
      title: "CRUD de usuarios",
      description: "Proyecto de CRUD de usuarios, con opciones de crear, editar, eliminar y ver todos los usuarios",
      technologies: "HTML, CSS, JavaScript, React.js, Axios",
      demo: "https://thkdev-crud.netlify.app",
      code: "https://github.com/TheKiller1959/crud",
    },
    {
      id: 6,
      src: projectLand,
      title: "Proyecto-6",
      description: "/* Proyecto en desarrollo */",
      technologies: "GitHub, Netlify",
      demo: "https://thekiller1959dev.netlify.app",
      code: "https://github.com/TheKiller1959",
    }
  ]



  return (
    <div id='projects' name="Projects" className="projects" style={{ backgroundColor: theme.projectBackground, color: theme.projectTextColor, transition: ".2s" }} >
      <h1>Proyectos</h1>
      <h2>En esta seccion se muestran algunos de mis proyectos, puedes visitar cada uno a través del botón "Demo", tambien puedes ver el código de cada uno con el botón "Código"</h2>
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
              <p>Tecnologías Utilizadas: <b>{technologies}</b></p>
              <div className="link">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button>Demo</button>
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button>Código</button>
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