import '../assets/styles/menu.css';
import usFlag from "../assets/icons/usFlag.png";
import colFlag from "../assets/icons/colFlag.png";
import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("nav__menu transform");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const { t, i18n } = useTranslation("global");

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
      link: "Inicio",
      name: (t("menu.home")),
    },
    {
      id: 2,
      link: "Sobre mí",
      name: (t("menu.about")),
    },
    {
      id: 3,
      link: "Proyectos",
      name: (t("menu.projects")),
    },
    {
      id: 4,
      link: "Habilidades",
      name: (t("menu.skills")),
    },
    {
      id: 5,
      link: "Servicios",
      name: (t("menu.services")),
    },
    {
      id: 6,
      link: "Contacto",
      name: (t("menu.contact")),
    },
  ];


  return (
    <div>
      <nav className="nav-bar" style={{ backgroundColor: theme.navBackground, color: theme.navTextColor, transition: ".2s" }} >
        {links.map(({ id, link, name }) => (
          <ul key={id}>
            <li className="section">
              <p>
                <Link to={link} smooth duration={500}>
                  {name}
                </Link>
              </p>
            </li>
          </ul>
        ))}
        <div className="buttons">
          <button onClick={() => i18n.changeLanguage("en")}>
            <img src={usFlag} alt="" />
          </button>
          <button onClick={() => i18n.changeLanguage("es")}>
            <img src={colFlag} alt="" />
          </button>
        </div>
      </nav>
      <nav className="nav" style={{ backgroundColor: theme.navBackground, color: theme.navTextColor, transition: ".2s" }} >
        <div className="buttons-res">
          <button onClick={() => i18n.changeLanguage("en")}>
            <img src={usFlag} alt="" />
          </button>
          <button onClick={() => i18n.changeLanguage("es")}>
            <img src={colFlag} alt="" />
          </button>
        </div>
        <ul className={active} style={{ backgroundColor: theme.menuBackground, color: theme.menuTextColor, transition: ".2s" }} >
          <li className="nav__item">
            <a className="nav__link" href="#home" onClick={() => navToggle()}>
              {t("menu.home")}
            </a>
            <a className="nav__link" href="#about" onClick={() => navToggle()}>
              {t("menu.about")}
            </a>
            <a className="nav__link" href="#projects" onClick={() => navToggle()}>
              {t("menu.projects")}
            </a>
            <a className="nav__link" href="#skills" onClick={() => navToggle()}>
              {t("menu.skills")}
            </a>
            <a className="nav__link" href="#services" onClick={() => navToggle()}>
              {t("menu.services")}
            </a>
            <a className="nav__link" href="#contact" onClick={() => navToggle()}>
              {t("menu.contact")}
            </a>
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