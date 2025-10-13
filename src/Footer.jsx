import React from "react";

class Footer extends React.Component {
  render() {
    return (
      // CLASES MODIFICADAS: Se añadieron 'border-t-4' y 'border-red-600'
      <footer className="bg-white-800 py-6 px-4 shadow-inner border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-white">

          <div className="flex items-center space-x-3">
            <span className="text-sm font-semibold tracking-wide text-blue-700">BARÇA DIGITAL NOTÍCIES</span>
          </div>

          <div className="flex space-x-4 text-xl">
            <a href="https://twitter.com/FCBarcelona" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="Twitter">
                <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/FCBarcelona" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="Instagram">
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/company/fcbarcelona" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="LinkedIn">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>

             <a href="https://www.twitch.tv/FCBarcelona" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="Twitch">
                <img src="/twitch.svg" alt="Twitch" className="w-6 h-6" />
            </a>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;