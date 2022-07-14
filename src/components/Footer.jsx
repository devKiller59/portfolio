import '../assets/styles/footer.css';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import { useTheme } from "../context/ThemeProvider";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("global");

  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/TheKiller1959',
      icon: github
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thekiller1959',
      icon: linkedin
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/thekiller1959',
      icon: twitter
    },
    {
      name: 'WhatsApp',
      url: (t("footer.whatsapp")),
      icon: whatsapp
    }
  ];

  return (
    <footer className="footer" style={{ backgroundColor: theme.navBackground, color: theme.navTextColor, transition: ".2s" }} >
      <div className="footer-container" style={{ backgroundColor: theme.socialBackground, color: theme.socialTextColor, transition: ".2s" }} >
        {socialLinks.map(({ name, url, icon }) => (
          <div className="social-links" key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt={name} width={30} />
            </a>
          </div>
        ))}
      </div>
      <div className="copyright">
        <p>&copy; {t("footer.text")}</p>
        <br />
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
};


export default Footer;