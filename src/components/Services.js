import '../assets/styles/services.css';
import web from '../assets/icons/web.png';
import database from '../assets/icons/database.png';
import api from '../assets/icons/api.png';

const Services = () => {

  const service = [
    {
      title: 'Web Development',
      description: 'We build web applications that are user-friendly, responsive, and fast. We use the latest technologies to create a great user experience.',
      src: web
    },
    {
      title: 'Database Development',
      description: 'We build databases that are user-friendly, responsive, and fast. We use the latest technologies to create a great user experience.',
      src: database
    },
    {
      title: 'API Development',
      description: 'We build APIs that are user-friendly, responsive, and fast. We use the latest technologies to create a great user experience.',
      src: api
    }
  ];

  return (
    <div name="Services" className="services">
      <h1>Services</h1>
      <div className="services-container">
        {service.map(({ title, description, src }) => (
          <div className="service" key={title}>
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