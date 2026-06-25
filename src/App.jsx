import './assets/styles/App.css'
import { useState, useLayoutEffect, useEffect } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Loader from './components/Loader';
import ThemeProvider from './context/ThemeProvider';
import Menu from './components/Menu';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  
  useLayoutEffect(() => {
    document.body.style.backgroundColor = '#2d1d47';

    // Detect if the app is being pre-rendered by a Node.js server
    const isBot =
      window.__PRERENDER_INJECTED || 
      navigator.userAgent.includes('ReactSnap') || 
      navigator.userAgent.includes('NetlifyPrerender');
      /bot|googlebot|crawler/i.test(navigator.userAgent);

    if (isBot) {
      setIsLoading(false);
      return;
    }
  }, []);

  // For real users, we'll want to wait for the page to load before rendering the app
  useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3600);
  }, []);

  return (
      <ThemeProvider>
        {isLoading ? (
         <Loader />
         ) : (
          <div>
            <Menu />
            <main>
              <Home />
              <About />
              <Projects />
              <Skills />
              <Services />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </ThemeProvider>
  )
};


export default App;