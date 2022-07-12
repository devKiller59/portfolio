import '../assets/styles/footer.css';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import whatsapp from '../assets/icons/whatsapp.svg';

const Footer = () => {

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
      url: 'https://api.whatsapp.com/send?phone=573194118623&text=Hola! Me interesaría poder contactar contigo',
      icon: whatsapp
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {socialLinks.map(({ name, url, icon }) => (
          <div className="social-links" key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt={name} width={30} />
            </a>
          </div>
        ))}
      </div>
      <div className="copyright">
        <p>&copy; Wilmar Rodriguez - Todos los derechos reservados</p>
        <br />
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
};


export default Footer;