import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaTwitch } from 'react-icons/fa';
import '../assets/css/footer.scss';

class Footer extends React.Component {
  render() {
    const socialLinksData = [
      { href: "https://twitter.com/FCBarcelona", ariaLabel: "Twitter", Icon: FaTwitter, type: "twitter" },
      { href: "https://instagram.com/FCBarcelona", ariaLabel: "Instagram", Icon: FaInstagram, type: "instagram" },
      { href: "https://linkedin.com/company/fcbarcelona", ariaLabel: "LinkedIn", Icon: FaLinkedinIn, type: "linkedin" },
      { href: "https://www.twitch.tv/FCBarcelona", ariaLabel: "Twitch", Icon: FaTwitch, type: "twitch" },
    ];
    
    return (
      <footer className="footer-container">
        <div className="footer-content">

          <div className="footer-header">
            <div className="logo-text">
              <span className="blau">BARÇA</span>{" "}
              <span className="vermell">DIGITAL</span>{" "}
              <span className="blau">NOTÍCIES</span>
            </div>

            <div className="social-links">
              {socialLinksData.map((link, index) => (
                <SocialLink 
                  key={index}
                  href={link.href}
                  ariaLabel={link.ariaLabel}
                  Icon={link.Icon}
                  type={link.type}
                />
              ))}
            </div>
          </div>

          <div className="links-grid">
            <FooterLinks title="Notícies" links={['Últimes', 'Futbol', 'Bàsquet', 'Altres Seccions']} />
            <FooterLinks title="Club" links={['Història', 'Valors', 'Estadi', 'Socis']} />
            <FooterLinks title="Legal" links={['Política de Privacitat', 'Termes d\'Ús', 'Cookies']} />
            <FooterLinks title="Contacte" links={['Treballa amb nosaltres', 'Suport', 'Premsa']} />
          </div>

          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Barça Digital Notícies. Tots els drets reservats.
          </div>
        </div>
      </footer>
    );
  }
}

const SocialLink = ({ href, ariaLabel, Icon, type }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className={`social-icon ${type}`}
  >
    <Icon className="icon-svg" />
  </a>
);

const FooterLinks = ({ title, links }) => (
  <div className="footer-column">
    <h3 className="column-title">{title}</h3>
    <ul className="column-list">
      {links.map((link, index) => (
        <li key={index}>
          <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;