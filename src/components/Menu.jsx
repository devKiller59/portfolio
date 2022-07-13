import { useState } from "react";
import '../assets/styles/menu.css';
import { useTheme } from "../context/ThemeProvider";
import { Link } from "react-scroll";

const Menu = () => {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("nav__menu transform");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler")

  const navToggle = () => {
    active === "nav__menu transform"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu transform");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Services",
    },
    {
      id: 6,
      link: "Contact",
    },
  ];


  return (
    <div>
      <nav className="nav-bar" style={{ backgroundColor: theme.navBackground, color: theme.navTextColor, transition: ".2s" }} >
        {links.map(({ id, link }) => (
          <ul>
            <li key={id} className="section">
              <Link to={link} smooth duration={500}>
                <p>{link}</p>
              </Link>
            </li>
          </ul>
        ))}
      </nav>
      <nav className="nav" style={{ backgroundColor: theme.navBackground, color: theme.navTextColor, transition: ".2s" }} >
        <ul className={active} style={{ backgroundColor: theme.menuBackground, color: theme.menuTextColor, transition: ".2s" }} >
          <li className="nav__item">
            <a className="nav__link" href="#home" onClick={() => navToggle()}>Inicio</a>
            <a className="nav__link" href="#about" onClick={() => navToggle()}>Sobre mi</a>
            <a className="nav__link" href="#projects" onClick={() => navToggle()}>Proyectos</a>
            <a className="nav__link" href="#skills" onClick={() => navToggle()}>Habilidades</a>
            <a className="nav__link" href="#services" onClick={() => navToggle()}>Servicios</a>
            <a className="nav__link" href="#contact" onClick={() => navToggle()}>Contacto</a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>


      <label className="switch" onChange={() => toggleTheme()}>
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Menu;