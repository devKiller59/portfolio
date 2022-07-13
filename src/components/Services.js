import '../assets/styles/services.css';
import web from '../assets/icons/web.png';
import database from '../assets/icons/database.png';
import api from '../assets/icons/api.png';
import { useTheme } from "../context/ThemeProvider";

const Services = () => {
  const { theme } = useTheme();

  const service = [
    {
      title: 'Desarrollo Web',
      description: 'Diseño y desarrollo de paginas y aplicaciones web, desde una idea hasta una aplicación completa, con un diseño responsivo y optimizado para todos los dispositivos.',
      src: web
    },
    {
      title: 'Base de Datos relacional y NoSQL',
      description: 'Desarrollo y mantenimiento de bases de datos SQL y NoSQL, con una arquitectura de software, optimización de consultas y procesos.',
      src: database
    },
    {
      title: 'Desarrollo de API',
      description: 'Diseño, desarrollo y consumo de API Rest usando NodeJS, Express y MongoDB según las necesidades del cliente.',
      src: api
    }
  ];

  return (
    <div name="Services" className="services" style={{ backgroundColor: theme.serviceBackground, color: theme.serviceTextColor, transition: ".2s" }} >
      <h1>Servicios</h1>
      <div className="services-container">
        {service.map(({ title, description, src }) => (
          <div className="service" key={title}  style={{ backgroundColor: theme.serviceCardBackground, color: theme.serviceCardTextColor, transition: ".2s" }} >
            <div className="service-icon">
              <img src={src} alt={title} />
            </div>
            <div className="service-description">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};


export default Services;