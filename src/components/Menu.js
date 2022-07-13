import { useState } from "react";
import { Link } from "react-scroll";
import '../assets/styles/menu.css';
import { useTheme } from "../context/ThemeProvider";

const Menu = () => {
  const [nav, setNav] = useState(false);
  const { theme, toggleTheme } = useTheme();



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
      <nav>
        <ul className="nav-bar" style={{ backgroundColor: theme.navBackground, color: theme.navTextColor, transition: ".2s" }} >
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link to={link} smooth duration={500}>
                <p>{link}</p>
              </Link>
            </li>
          ))}
        </ul>

        {nav && (
          <ul>
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <label className="switch" onChange={() => toggleTheme()}>
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </nav>
    </div>
  );
};

export default Menu;