import React, { useRef, useEffect, useState } from "react";

function SectionContacte() {
  const nomInputRef = useRef(null);
  const [enviat, setEnviat] = useState(false);

  useEffect(() => {
    if (nomInputRef.current && !enviat) {
      nomInputRef.current.focus();
    }
  }, [enviat]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviat(true);
  };

  return (
    <main className="py-12 bg-blue-800 to-blue-900 font-sans w-full min-h-screen flex justify-center items-start">
      <section className="max-w-xl w-full mx-auto px-4 md:px-8">
        <section className="mb-8 text-center mt-4">
          <h1 id="titol-contacte" className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            Contacta amb Nosaltres
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </section>

        <article className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
          {enviat ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 flex flex-col items-center">
                <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h2 className="text-2xl font-bold">Missatge enviat!</h2>
                <p>Ens posarem en contacte amb tu molt aviat.</p>
              </div>
              <button 
                onClick={() => setEnviat(false)}
                className="text-blue-900 font-semibold hover:underline"
              >
                ← Enviar un altre missatge
              </button>
            </div>
          ) : (
            <>
              <p className="text-lg text-gray-700 mb-6 text-center">
                Envia'ns un missatge i ens posarem en contacte el més aviat possible.
              </p>

              <form role="form" aria-labelledby="titol-contacte" className="space-y-6" onSubmit={handleSubmit}>
                <section>
                  <label htmlFor="nom" className="block text-sm font-semibold text-blue-900 mb-1">Nom Complet</label>
                  <input type="text" id="nom" ref={nomInputRef} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-150" placeholder="El teu nom" required />
                </section>
                
                <section>
                  <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-1">Correu Electrònic</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-150" placeholder="el.teu@correu.com" required />
                </section>

                <section>
                  <label htmlFor="missatge" className="block text-sm font-semibold text-blue-900 mb-1">Missatge</label>
                  <textarea id="missatge" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-150" placeholder="Escriu el teu missatge aquí..." required></textarea>
                </section>

                <button type="submit" className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 active:scale-[0.98] transition-all duration-200 shadow-lg uppercase">
                  <span>Enviar Missatge</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </>
          )}
        </article>
      </section>
    </main>
  );
}

export default SectionContacte;