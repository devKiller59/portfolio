import '../assets/styles/home.css';
import cv from '../assets/files/cv.pdf';

const Home = () => {
  return (
    <div name="Home" className='home' id='home'>
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
      <div>
        <h1>WILMAR RODRIGUEZ</h1>
        <h3>Desarrolador Web Front-End</h3>
      </div>
      <div>
        <a href={cv} download target="_blank" rel="noopener noreferrer">
          <button className='down-btn'>Descarga mi CV 📃</button>
        </a>
      </div>
    </div>
  )
};


export default Home;