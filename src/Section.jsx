import React from "react";

class Section extends React.Component {
  render() {
    const NewsCard = ({ title }) => {
        return (
            <div className="flex-1 min-w-0 bg-white p-6 md:p-12 border-4 border-blue-800 rounded-lg shadow-md text-center flex flex-col items-center justify-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-wider">
                    {title}
                </h2>
                <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg uppercase text-sm">
                    <span>ANAR-HI</span>
                </button>
            </div>
        );
    }
    
    return (
      <div className="py-16 bg-blue-900 font-sans w-full"> 
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            
            <div className="relative mb-8 overflow-hidden rounded-lg shadow-xl border-4 border-white">
            
            <div className="flex transition-transform duration-500 ease-in-out">
                
                <div 
                className="w-full h-40 md:h-64 flex items-center justify-center relative"
                style={{ 
                    backgroundImage: 'url(/alexia.jpeg), url(/lamine.jpg), url(/ferran.jpeg)',
                    backgroundSize: '33.33% 100%, 33.33% 100%, 33.33% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left center, center center, right center', 
                    border: '1px solid black'
                }}
                >
                <div className="absolute inset-0 bg-black opacity-10"></div>
                </div>
            </div>

            <button 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 m-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all z-10"
                aria-label="Noticia anterior"
            >
                <span className="text-xl">←</span>
            </button>

            <button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 m-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all z-10"
                aria-label="Siguiente noticia"
            >
                <span className="text-xl">→</span>
            </button>
            </div>

            
            <div className="flex flex-col md:flex-row gap-6">
            
            <NewsCard title="NOTÍCIA 1" />
            
            <NewsCard title="NOTÍCIA 2" />
            
            </div>
        </div>
      </div>
    );
  }
}

export default Section;