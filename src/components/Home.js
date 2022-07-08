import cv from '../assets/files/cv.pdf';

const Home = () => {
  return (
    <div name="Home" className='home'>
      <div>
        <h1>WILMAR RODRIGUEZ</h1>
        <h3>Desarrolador Web Front-End</h3>
      </div>
      <div>
        <button className='down-btn'>
          <a href={cv} download target="_blank" rel="noopener noreferrer">
            Descarga mi CV 📑
          </a>
        </button>
      </div>
    </div>
  )
};


export default Home;