import React from 'react';

function SectionContacte() {
  return (
    <div className="py-12 bg-blue-800 to-blue-900 font-sans w-full min-h-screen flex justify-center items-start">
      
      <div className="max-w-xl w-full mx-auto px-4 md:px-8"> 
        
        <div className="mb-8 text-center mt-4">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            Contacta amb Nosaltres
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 mb-6 text-center">
            Envia'ns un missatge i ens posarem en contacte el més aviat possible.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-semibold text-blue-900 mb-1">
                Nom Complet
              </label>
              <input
                type="text"
                id="nom"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-150"
                placeholder="El teu nom"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-1">
                Correu Electrònic
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-150"
                placeholder="el.teu@correu.com"
                required
              />
            </div>

            <div>
              <label htmlFor="missatge" className="block text-sm font-semibold text-blue-900 mb-1">
                Missatge
              </label>
              <textarea
                id="missatge"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-150"
                placeholder="Escriu el teu missatge aquí..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 active:scale-[0.98] transition-all duration-200 shadow-lg uppercase"
            >
              <span>Enviar Missatge</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default SectionContacte;