import React from 'react';

const playersData = [
  { name: "Marc-André ter Stegen", number: 1, position: "Porter", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrErHwU0jT1wlGpDy_pHaOfp1ZsXxIQEDGQ&s" },
  { name: "Ronald Araújo", number: 4, position: "Defensa", image: "https://www.fcbarcelona.com/photo-resources/2025/09/09/072afc10-1ec9-483e-a4a5-8775cb6cea23/04-Araujo.png?width=670&height=790" },
  { name: "Gavi", number: 6, position: "Migcampista", image: "https://assets.laliga.com/squad/2025/t178/p500046/2048x2225/p500046_t178_2025_0_001_000.png" },
  { name: "Robert Lewandowski", number: 9, position: "Davanter", image: "https://assets.laliga.com/squad/2025/t178/p56764/2048x2048/p56764_t178_2025_1_003_000.png" },
];

const PlayerCard = ({ name, number, position, image }) => (
  <div className="group bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-blue-900 transition-all duration-300 transform hover:scale-[1.02] flex flex-col items-center text-center">
    <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-red-600 shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="text-4xl font-black text-red-600 mb-2">{number}</div>
    <h2 className="text-xl font-bold text-blue-900 tracking-tight leading-tight mb-1">
      {name}
    </h2>
    <p className="text-sm font-semibold text-gray-600 mb-3">
      {position}
    </p>
    <button className="flex items-center space-x-2 px-6 py-2 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md uppercase text-xs">
      Veure Perfil
    </button>
  </div>
);

function SectionJugadors() {
  return (
    <div className="py-12 bg-blue-800 to-blue-900 font-sans w-full min-h-screen">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8"> 
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            Plantilla del FC Barcelona
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
          {playersData.map((player, index) => (
            <PlayerCard
              key={index}
              name={player.name}
              number={player.number}
              position={player.position}
              image={player.image}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default SectionJugadors;