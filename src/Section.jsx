import React from "react";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      '/alexia.jpeg',
      '/lamine.jpg',
      '/ferran.jpeg',
      '/lamine2.png'
    ];
    this.state = {
      currentIndex: 0,
    };
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
  }

  goToNext() {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.images.length,
    }));
  }

  goToPrev() {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + this.images.length) % this.images.length,
    }));
  }

  render() {
    const { currentIndex } = this.state;
    const currentImageUrl = this.images[currentIndex];

    const NewsCard = ({ title }) => {
        return (
            <div className="flex-1 min-w-0 bg-white p-6 md:p-12 border-4 border-red-600 rounded-lg shadow-md text-center flex flex-col items-center justify-center space-y-8">
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
      <div className="py-10 bg-blue-900 font-sans w-full"> 
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            
            <div className="relative mb-8 overflow-hidden rounded-lg shadow-2xl"> 
            
            <div className="flex">
                
                <div key={currentIndex} className="w-full h-52 md:h-80 relative"> 
                    <div 
                        className="w-full h-full flex items-center justify-center relative transition-opacity duration-700 opacity-100"
                        style={{ 
                            backgroundImage: `url(${currentImageUrl})`,
                            backgroundSize: 'contain', 
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center', 
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-20"></div>
                    </div>
                </div>
            </div>

            <button 
                onClick={this.goToPrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 m-3 bg-red-600 bg-opacity-70 text-white rounded-full hover:bg-opacity-90 transition-all z-20 shadow-md flex items-center justify-center"
                aria-label="Noticia anterior"
            >
                <img src="/arrow-left.svg" alt="Anterior" className="w-6 h-6 filter invert" />
            </button>

            <button 
                onClick={this.goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 m-3 bg-red-600 bg-opacity-70 text-white rounded-full hover:bg-opacity-90 transition-all z-20 shadow-md flex items-center justify-center"
                aria-label="Siguiente noticia"
            >
                <img src="/arrow-right.svg" alt="Siguiente" className="w-6 h-6 filter invert" />
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