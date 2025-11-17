import React from 'react';

const historyData = [
  { 
    title: "Fundació del Club", 
    year: "1899", 
    description: "Joan Gamper funda el club amb els colors blaugrana.", 
    image: "https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/13/25545ed2-dcb7-47be-96b1-71585ba820b2/16070442.jpg"
  },
  { 
    title: "Inauguració del Camp Nou", 
    year: "1957", 
    description: "El club es trasllada al nou i icònic estadi.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFhnnnYZDNTevWVDq52VPDZLIg-0U440vmg&s" 
  },
  { 
    title: "La Copa d'Europa (Cruyff)", 
    year: "1992", 
    description: "El Dream Team guanya la primera Copa d'Europa a Wembley.", 
    image: "https://www.fcbarcelona.com/photo-resources/2020/04/25/44b8c5ae-2cd0-4d06-91c5-dd485726c5f7/15-Final-Champions-1992-min.jpg?width=469&height=750" 
  },
  { 
    title: "El Sextet (Guardiola)", 
    year: "2009", 
    description: "L'equip aconsegueix guanyar sis títols en un mateix any natural.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFcot8fo5PnCt1CHOXwwTnUo1JDzB3DRMqg&s" 
  },
];

const HitoCard = ({ title, year, description, image }) => (
  <div className="group flex-1 min-w-0 bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 border-2 border-red-600 rounded-2xl shadow-lg hover:shadow-2xl text-center flex flex-col items-center justify-start space-y-4 transform hover:-translate-y-1 transition-all duration-300 h-full">
    <div className="w-24 h-24 rounded-full overflow-hidden mb-2 shadow-lg border-2 border-blue-900">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h2 className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight leading-tight">
      {title}
    </h2>
    <p className="text-lg md:text-xl font-bold text-red-600">
      Any: {year}
    </p>
    <p className="text-sm md:text-base text-gray-700 font-semibold flex-grow">
      {description}
    </p>
    <button className="flex items-center space-x-2 px-6 py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-md uppercase text-xs">
      Més detalls
    </button>
  </div>
);

function SectionHistoria() {

  const featuredHito = historyData[3];

  return (
    <section className="py-12 bg-blue-800 to-blue-900 font-sans w-full min-h-screen">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8"> 
        
        <div className="relative mb-12 overflow-hidden rounded-3xl shadow-2xl">
            <div className="relative h-64 md:h-96">
              <div 
                className="w-full h-full"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${featuredHito.image})`,
                  backgroundSize: 'cover', 
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center', 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-6 left-6 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  FITA DESTACADA
                </div>
                
                <div className="absolute bottom-6 left-6 text-white font-bold text-lg md:text-3xl shadow-lg">
                  {featuredHito.title} ({featuredHito.year})
                </div>
                
                <div className="absolute bottom-6 right-6 text-white text-base md:text-xl text-right max-w-sm">
                   {featuredHito.description}
                </div>
              </div>
            </div>
            
            
        </div>
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            Grans Moments del Barça
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {historyData.map((hito, idx) => (
            <HitoCard
              key={idx}
              title={hito.title}
              year={hito.year}
              description={hito.description}
              image={hito.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SectionHistoria;