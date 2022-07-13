import '../assets/styles/about.css';
import photo from '../assets/images/photo.jpg';
import { useTheme } from "../context/ThemeProvider";

const About = () => {

  const { theme } = useTheme();

  return (
    <div id='about' name="About" className="about" style={{ backgroundColor: theme.aboutBackground, color: theme.aboutTextColor, transition: ".2s" }} >
      <h1>Sobre mí</h1>
      <div className="about-container">
        <img src={photo} alt="" />
        <div className="description">
          <p>Mi nombre es Wilmar Rodriguez, tengo 27 años, soy originario de Colombia y soy
            programador Web Full-Stack titulado de Academlo
          </p>
          <p>Desde muy pequeño me he interesado en las nuevas tecnologías y su estructura esencial,
            tanto hardware como software, así como la funcionalidad de los programas y aplicaciones de computadoras y dispositivos móviles
          </p>
          <p>Principalmente me dedico a crear proyectos audiovisuales en PC, me gusta jugar videojuegos,
            leer artículos de internet de cultura general, noticias relevantes y me gusta mucho la música electrónica
          </p>
        </div>
      </div>
    </div>
  )
};


export default About;