import '../assets/styles/about.css';
import photo from '../assets/images/photo.jpg';
import { useTheme } from "../context/ThemeProvider";
import { useTranslation } from "react-i18next";

const About = () => {

  const { theme } = useTheme();
  const { t } = useTranslation("global");

  return (
    <div id='about' name="Sobre mí" className="about" style={{ backgroundColor: theme.aboutBackground, color: theme.aboutTextColor, transition: ".2s" }} >
      <h1>{t("about.title")}</h1>
      <div className="about-container">
        <img src={photo} alt="" />
        <div className="description">
          <p>
            {t("about.text1")}
          </p>
          <p>
            {t("about.text2")}
          </p>
          <p>
            {t("about.text3")}
          </p>
        </div>
      </div>
    </div>
  )
};


export default About;