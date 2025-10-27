import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="bg-white shadow-md py-3 md:py-4 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="rounded-full flex items-center justify-center w-[150px] h-[100px]">
              <img
                src="/barca.png"
                alt="Noticias Barça Logo"
                className="w-[150px] h-[150px] object-contain"
              />
            </div>

            <nav className="hidden md:block">
              <ul className="flex space-x-6 lg:space-x-8">
                <li>
                  <a
                    href="#"
                    className="text-red-600 hover:border-b-2 border-red-600 font-semibold text-base pb-1 transition-colors duration-300"
                  >
                    NOTÍCIES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-700 hover:border-b-2 border-blue-600 font-semibold text-base pb-1 transition-colors duration-300"
                  >
                    PARTITS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-red-600 hover:border-b-2 border-red-600 font-semibold text-base pb-1 transition-colors duration-300"
                  >
                    JUGADORS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-700 hover:border-b-2 border-blue-600 font-semibold text-base pb-1 transition-colors duration-300"
                  >
                    HISTÒRIA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-red-600 hover:border-b-2 border-red-600 font-semibold text-base pb-1 transition-colors duration-300"
                  >
                    CONTACTE
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
              aria-label="Perfil d'usuari"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;