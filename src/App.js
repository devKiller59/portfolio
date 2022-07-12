import './assets/styles/App.css'
import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Loader from './components/Loader';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3800);
  }, []);

  return (
    <div>
      {isLoading ? <Loader /> :
        <div>
          <Menu />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Services />
          <Contact />
          <Footer />
        </div>
      }
    </div>
    // <div>
    //   <Menu />
    //   <Home />
    //   <About />
    //   <Projects />
    //   <Skills />
    //   <Services />
    //   <Contact />
    //   <Footer />
    // </div>
  )
};


export default App;