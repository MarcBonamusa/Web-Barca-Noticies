import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaTwitch } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-white-950 py-10 px-6 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-gray-800 space-y-6 md:space-y-0">
            
            <div className="flex items-center">
              <span className="text-3xl font-extrabold tracking-wider uppercase">
                <span className="text-blue-600">BARÇA</span>{" "}
                <span className="text-red-600">DIGITAL</span>{" "}
                <span className="text-blue-600">NOTÍCIES</span>
              </span>
            </div>

            <div className="flex space-x-6">
              <SocialLink href="https://twitter.com/FCBarcelona" ariaLabel="Twitter" Icon={FaTwitter} colorHover="text-blue-600 hover:text-red-400" />
              <SocialLink href="https://instagram.com/FCBarcelona" ariaLabel="Instagram" Icon={FaInstagram} colorHover="text-red-600 hover:text-blue-500" />
              <SocialLink href="https://linkedin.com/company/fcbarcelona" ariaLabel="LinkedIn" Icon={FaLinkedinIn} colorHover="text-blue-600 hover:text-red-600" />
              <SocialLink href="https://www.twitch.tv/FCBarcelona" ariaLabel="Twitch" Icon={FaTwitch} colorHover="text-red-600 hover:text-blue-600" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 py-10 text-sm">
            <FooterLinks title="Notícias" links={['Últimas', 'Fútbol', 'Baloncesto', 'Otras Secciones']} />
            <FooterLinks title="Club" links={['Historia', 'Valores', 'Estadio', 'Socios']} />
            <FooterLinks title="Legal" links={['Política de Privacidad', 'Términos de Uso', 'Cookies']} />
            <FooterLinks title="Contacto" links={['Trabaja con nosotros', 'Soporte', 'Prensa']} />
          </div>

          <div className="pt-6 text-center text-gray-400 text-xs border-t border-gray-800">
            &copy; {new Date().getFullYear()} Barça Digital Notícies. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

const SocialLink = ({ href, ariaLabel, Icon, colorHover }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className={`text-gray-400 transition-transform duration-300 transform hover:scale-110 ${colorHover}`}
  >
    <Icon className="w-6 h-6" />
  </a>
);

const FooterLinks = ({ title, links }) => (
  <div>
    <h3 className="text-base font-semibold mb-5 uppercase tracking-wide text-blue-600">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
            className="text-red-600 hover:text-blue-500 transition-colors duration-200"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
