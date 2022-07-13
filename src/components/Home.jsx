import '../assets/styles/home.css';
import '../assets/styles/background.css';
import cv from '../assets/files/cv.pdf';
import { useTheme } from "../context/ThemeProvider";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div name="Home" className='home' id='home' style={{ backgroundColor: theme.homeBackground, color: theme.hometextColor, transition: ".2s" }} >
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
        <h3>Desarrollador Web</h3>
      </div>
      <div>
        <a href={cv} download target="_blank" rel="noopener noreferrer">
          <button className='down-btn'>Descarga mi CV 📃</button>
        </a>
      </div>
    </div >
  )
};


export default Home;