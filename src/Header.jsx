import React from "react";

class Header extends React.Component {
  render() {
    return (
      // Contenedor principal del header: fondo blanco, sombra inferior, padding vertical
      <header className="bg-white shadow-md py-3 md:py-4">
        {/* Contenido del header: centrado, con ancho máximo, padding horizontal, flex para distribución */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Sección del Logo */}
          <div className="flex items-center">
            {/* Contenedor del icono/imagen del logo (círculo azul con fondo blanco para la imagen) */}
            <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center mr-2">
              {/* Ruta ajustada para recursos en la carpeta public de Vite */}
              <img
                src="/barca.png"
                alt="Noticias Barça Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            {/* Texto del logo: azul oscuro, negrita, tamaño grande. Oculto en móviles, visible desde sm */}
            <span className="text-blue-800 font-bold text-lg hidden sm:block">
              BARÇA DIGITAL NOTÍCIES
            </span>
          </div>

          {/* Menú de Navegación Principal */}
          {/* Oculto en móviles, visible desde md (se puede añadir un botón para menú móvil) */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8">
              {" "}
              {/* Espacio entre ítems del menú */}
              <li>
                {/* Elemento de menú activo: texto rojo, subrayado rojo */}
                <a
                  href="#"
                  className="text-red-600 border-b-2 border-red-600 font-semibold text-base pb-1 transition-colors duration-300"
                >
                  NOTÍCIES
                </a>
              </li>
              <li>
                {/* Elementos de menú normales: texto gris, hover a rojo */}
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-600 font-semibold text-base pb-1 transition-colors duration-300"
                >
                  PARTITS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-600 font-semibold text-base pb-1 transition-colors duration-300"
                >
                  JUGADORS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-600 font-semibold text-base pb-1 transition-colors duration-300"
                >
                  HISTÒRIA
                </a>
              </li>
            </ul>
          </nav>

          {/* Acciones de Usuario (Búsqueda y Perfil) */}
          <div className="flex items-center space-x-4">
            {/* Botón de búsqueda: icono azul oscuro, hover a rojo, tamaño grande */}
            <button
              className="text-blue-800 hover:text-red-600 text-xl md:text-2xl transition-colors duration-300"
              aria-label="Cerca"
            >
              <i className="fa fa-search"></i>
            </button>
            {/* Botón de perfil de usuario: círculo rojo, icono blanco, tamaño y hover */}
            <button
              className="bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg md:text-xl hover:bg-red-700 transition-colors duration-300"
              aria-label="Perfil d'usuari"
            >
              <i className="fa fa-user"></i>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
