import '../assets/styles/services.css';
import web from '../assets/icons/web.png';
import database from '../assets/icons/database.png';
import api from '../assets/icons/api.png';
import { useTheme } from "../context/ThemeProvider";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("global");

  const service = [
    {
      title: (t("services.card.title1")),
      description: (t("services.card.description1")),
      src: web
    },
    {
      title: (t("services.card.title2")),
      description: (t("services.card.description2")),
      src: database
    },
    {
      title: (t("services.card.title3")),
      description: (t("services.card.description3")),
      src: api
    }
  ];

  return (
    <div id='services' name="Servicios" className="services" style={{ backgroundColor: theme.serviceBackground, color: theme.serviceTextColor, transition: ".2s" }} >
      <h1>{t("services.title")}</h1>
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