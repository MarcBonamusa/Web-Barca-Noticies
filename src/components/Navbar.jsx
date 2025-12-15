import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-md py-3 md:py-4 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
            <div className="flex items-center space-x-8">
              <Link 
                to="/" 
                className="rounded-full flex items-center justify-center w-[150px] h-[100px] outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-150"
                aria-label="Anar a la pàgina principal de Notícies Barça"
              >
              <img
                src="/barca.png"
                alt="Noticias Barça Logo"
                className="w-[150px] h-[150px] object-contain"
              />
              </Link>
        </div>

        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-6 lg:space-x-8">
            <li>
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'border-b-2 border-red-600 font-semibold' : ''
                } text-red-600 hover:border-b-2 border-red-600 font-semibold text-base pb-1 transition-colors duration-300`}
              >
                NOTÍCIES
              </Link>
            </li>
            <li>
              <Link
                to="/partits"
                className={`${
                  isActive('/partits') ? 'border-b-2 border-blue-600 font-semibold' : ''
                } text-blue-700 hover:border-b-2 border-blue-600 font-semibold text-base pb-1 transition-colors duration-300`}
              >
                PARTITS
              </Link>
            </li>
            <li>
              <Link
                to="/jugadors"
                className={`${
                  isActive('/jugadors') ? 'border-b-2 border-red-600 font-semibold' : ''
                } text-red-600 hover:border-b-2 border-red-600 font-semibold text-base pb-1 transition-colors duration-300`}
              >
                JUGADORS
              </Link>
            </li>
            <li>
              <Link
                to="/historia"
                className={`${
                  isActive('/historia') ? 'border-b-2 border-blue-600 font-semibold' : ''
                } text-blue-700 hover:border-b-2 border-blue-600 font-semibold text-base pb-1 transition-colors duration-300`}
              >
                HISTÒRIA
              </Link>
            </li>
            <li>
              <Link
                to="/contacte"
                className={`${
                  isActive('/contacte') ? 'border-b-2 border-red-600 font-semibold' : ''
                } text-red-600 hover:border-b-2 border-red-600 font-semibold text-base pb-1 transition-colors duration-300`}
              >
                CONTACTE
              </Link>
            </li>
          </ul>
        </nav>

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
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
