import React, { useState } from "react";

const playersData = [
  {
    name: "Marc-André ter Stegen",
    number: 1,
    position: "Porter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrErHwU0jT1wlGpDy_pHaOfp1ZsXxIQEDGQ&s",
  },
  {
    name: "Iñaki Peña",
    number: 13,
    position: "Porter",
    image:
      "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/I%C3%91AKI%20PE%C3%91A-min.jpg",
  },
  {
    name: "Ronald Araújo",
    number: 4,
    position: "Defensa",
    image:
      "https://www.fcbarcelona.com/photo-resources/2025/09/09/072afc10-1ec9-483e-a4a5-8775cb6cea23/04-Araujo.png?width=670&height=790",
  },
  {
    name: "Jules Koundé",
    number: 23,
    position: "Defensa",
    image:
      "https://www.fcbarcelona.com/photo-resources/2025/09/09/089a6980-e8be-46fe-900c-4202293ef729/23-Kounde.png?width=670&height=790",
  },
  {
    name: "Alejandro Balde",
    number: 3,
    position: "Defensa",
    image:
      "https://www.fcbarcelona.com/photo-resources/2025/09/09/0d332686-2eee-4297-a099-bab75c7c35bb/03-Balde.png?width=670&height=790",
  },
  {
    name: "Gavi",
    number: 6,
    position: "Migcampista",
    image:
      "https://assets.laliga.com/squad/2025/t178/p500046/2048x2225/p500046_t178_2025_0_001_000.png",
  },
  {
    name: "Frenkie de Jong",
    number: 21,
    position: "Migcampista",
    image:
      "https://www.fcbarcelona.com/photo-resources/2025/09/09/b62d13a8-5712-4823-b627-18dcce921378/21-De_Jong.png?width=670&height=790",
  },
  {
    name: "Pedri",
    number: 8,
    position: "Migcampista",
    image:
      "https://www.fcbarcelona.com/photo-resources/2025/09/09/3dd2346c-01bb-4ad9-9b62-ed5cbf8d8b06/08-Pedri.png?width=670&height=790",
  },
  {
    name: "Robert Lewandowski",
    number: 9,
    position: "Davanter",
    image:
      "https://assets.laliga.com/squad/2025/t178/p56764/2048x2048/p56764_t178_2025_1_003_000.png",
  },
  {
    name: "Lamine Yamal",
    number: 27,
    position: "Davanter",
    image:
      "https://assets.laliga.com/squad/2025/t178/p593109/2048x2225/p593109_t178_2025_1_001_000.png",
  },
];

const PlayerCard = ({ name, number, position, image }) => (
  <article className="group bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-blue-900 transition-all duration-300 transform hover:scale-[1.02] flex flex-col items-center text-center">
    <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-red-600 shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <hgroup>
      <h2 className="text-4xl font-black text-red-600 mb-2">{number}</h2>
      <h3 className="text-xl font-bold text-blue-900 tracking-tight leading-tight mb-1">
        {name}
      </h3>
      <p className="text-sm font-semibold text-gray-600 mb-3">{position}</p>
    </hgroup>
    <button className="flex items-center space-x-2 px-6 py-2 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md uppercase text-xs">
      Veure Perfil
    </button>
  </article>
);

const FeaturedPlayer = ({ player }) => (
  <section
    className="relative bg-white rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-red-600"
    aria-label="Jugador Destacat"
  >
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-1/3 bg-blue-900 flex items-end justify-center overflow-hidden h-64 md:h-auto">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover object-top transform scale-110 md:scale-100 opacity-80 md:opacity-100"
        />
      </div>

      <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center bg-gray-50">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
          Jugador Destacat
        </span>
        <hgroup>
          <h2 className="text-5xl md:text-7xl font-black text-blue-900 leading-none">
            {player.name}
          </h2>
          <p className="text-2xl font-bold text-gray-700 uppercase mt-2">
            {player.position}
          </p>
        </hgroup>
        <div className="flex items-center space-x-4 mt-4 mb-6">
          <span className="text-6xl font-extrabold text-red-600 border-r-4 border-gray-300 pr-4">
            {player.number}
          </span>
        </div>
        <p className="text-gray-600 text-lg max-w-lg mb-6">
          Líder a la defensa i capità. Ronald Araújo representa la força, el
          compromís i el futur del FC Barcelona. La seva presència al camp és
          sinònim de seguretat.
        </p>
        <button className="self-start flex items-center space-x-3 px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-200 shadow-lg uppercase text-base">
          Veure Detall Complet
        </button>
      </div>

      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <span className="text-[150px] font-black text-blue-900 leading-none">
          {player.number}
        </span>
      </div>
    </div>
  </section>
);

function SectionJugadors() {
  const allPositions = [
    "Totes",
    ...new Set(playersData.map((p) => p.position)),
  ];
  const [selectedPosition, setSelectedPosition] = useState("Totes");

  const filteredPlayers = playersData.filter(
    (player) =>
      selectedPosition === "Totes" || player.position === selectedPosition
  );

  const featuredPlayer =
    playersData.find((p) => p.name === "Ronald Araújo") || playersData[0];

  return (
    <section
      className="py-12 bg-blue-800 to-blue-900 font-sans w-full min-h-screen"
      aria-label="Plantilla del FC Barcelona"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            Plantilla del FC Barcelona
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </section>

        <FeaturedPlayer player={featuredPlayer} />

        <section
          className="mb-10 flex flex-wrap justify-center space-x-2 md:space-x-4"
          aria-label="Filtrat per posició"
        >
          {allPositions.map((position) => (
            <button
              key={position}
              onClick={() => setSelectedPosition(position)}
              className={`px-5 py-2 mt-2 font-bold rounded-full transition-all duration-200 text-sm md:text-base 
                ${
                  selectedPosition === position
                    ? "bg-red-600 text-white shadow-lg border-2 border-red-600"
                    : "bg-white text-blue-900 hover:bg-red-50 hover:text-red-600 border-2 border-transparent"
                }`}
            >
              {position}
            </button>
          ))}
        </section>

        <section
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pb-10"
          aria-label="Llista de jugadors"
        >
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player, index) => (
              <PlayerCard
                key={player.number}
                name={player.name}
                number={player.number}
                position={player.position}
                image={player.image}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-white font-semibold">
                No hi ha jugadors en aquesta posició.
              </p>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

export default SectionJugadors;
