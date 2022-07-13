import { createContext, useState, useContext } from "react";

const themeStyles = {
  dark: {
    navBackground: '#1b1b1b',
    navTextColor: '#ECEBEB',
    homeBackground: '#181D7E',
    homeTextColor: '#ECEBEB',
    aboutBackground: '#1b1b1b',
    aboutTextColor: '#ECEBEB',
    projectBackground: '#616161',
    projectTextColor: '#ECEBEB',
    skillsBackground: '#1b1b1b',
    skillsTextColor: '#ECEBEB',
    skillCardBackground: '#ECEBEB',
    skillCardTextColor: '#1b1b1b',
    serviceBackground: '#616161',
    serviceTextColor: '#ECEBEB',
    serviceCardBackground: '#CECDCD',
    serviceCardTextColor: '#1b1b1b',
    contactBackground: '#1b1b1b',
    contactTextColor: '#ECEBEB',
    socialBackground: '#454545',
    socialTextColor: '#ECEBEB',
  },
  light: {
    navBackground: '#f5f5f5',
    navTextColor: '#1b1b1b',
    homeBackground: '#4e54c8',
    homeTextColor: '#ECEBEB',
    aboutBackground: '#ECEBEB',
    aboutTextColor: '#1b1b1b',
    projectBackground: '#fff',
    projectTextColor: '#1b1b1b',
    skillsBackground: '#ECEBEB',
    skillsTextColor: '#1b1b1b',
    skillCardBackground: '#ECEBEB',
    skillCardTextColor: '#1b1b1b',
    serviceBackground: '#fff',
    serviceTextColor: '#1b1b1b',
    serviceCardBackground: '#2e978e',
    serviceCardTextColor: '#ECEBEB',
    contactBackground: '#ECEBEB',
    contactTextColor: '#1b1b1b',
    socialBackground: '#3C36DE',
    socialTextColor: '#1b1b1b',
  }

}

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');
  const value = { theme: themeStyles[theme], toggleTheme, themeName: theme };
  return <ThemeContext.Provider value={value} {...props} />;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme };