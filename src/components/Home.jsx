import '../assets/styles/home.css';
import '../assets/styles/background.css';
import cv from '../assets/docs/cv.pdf';
import { useTheme } from "../context/ThemeProvider";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("global");

  return (
    <div name="Inicio" className='home' id='home' style={{ backgroundColor: theme.homeBackground, color: theme.hometextColor, transition: ".2s" }} >
      {/* background animation */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/* title */}
      <div className="home-container">
        <h1>WILMAR RODRIGUEZ</h1>
        <h3>{t("description.title")}</h3>
      </div>
      <div>
        <a href={cv} download target="_blank" rel="noopener noreferrer">
          <button className='down-btn'>{t("description.button")} 📃</button>
        </a>
      </div>
    </div >
  )
};


export default Home;