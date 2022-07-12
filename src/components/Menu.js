import { useState } from "react";
import { Link } from "react-scroll";
import '../assets/styles/menu.css';

const Menu = () => {
  const [nav, setNav] = useState(false);

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
    <nav>
      <ul className="nav-bar" >
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth duration={500}>
              {link}
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
    </nav>
  );
};

export default Menu;