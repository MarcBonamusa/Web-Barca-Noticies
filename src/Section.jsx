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
      isTransitioning: false,
    };
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.autoPlayInterval = null;
  }

  componentDidMount() {
    this.autoPlayInterval = setInterval(this.goToNext, 5000);
  }

  componentWillUnmount() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  goToNext() {
    if (this.state.isTransitioning) return;
    this.setState({ isTransitioning: true });
    setTimeout(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.images.length,
        isTransitioning: false,
      }));
    }, 300);
  }

  goToPrev() {
    if (this.state.isTransitioning) return;
    this.setState({ isTransitioning: true });
    setTimeout(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex - 1 + this.images.length) % this.images.length,
        isTransitioning: false,
      }));
    }, 300);
  }

  render() {
    const { currentIndex, isTransitioning } = this.state;
    const currentImageUrl = this.images[currentIndex];

    const NewsCard = ({ title, icon }) => {
      return (
        <div className="group flex-1 min-w-0 bg-gradient-to-br from-white to-gray-50 p-8 md:p-10 border-2 border-red-600 rounded-2xl shadow-lg hover:shadow-2xl text-center flex flex-col items-center justify-center space-y-6 transform hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">{icon}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight leading-tight">
            {title}
          </h2>
          <button className="flex items-center space-x-2 px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-md group-hover:shadow-xl uppercase text-sm">
            <span>ANAR-HI</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      );
    };
    
    return (
      <div className="py-12 bg-blue-800 to-blue-900 font-sans w-full min-h-screen"> 
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="relative mb-12 overflow-hidden rounded-3xl shadow-2xl group">
            <div className="relative h-64 md:h-96">
              <div 
                className={`w-full h-full transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${currentImageUrl})`,
                  backgroundSize: 'cover', 
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center', 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-6 left-6 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  DESTACAT
                </div>
              </div>
            </div>

            <button 
              onClick={this.goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-white bg-opacity-90 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 z-20 shadow-xl opacity-0 group-hover:opacity-100 active:scale-90"
              aria-label="Noticia anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={this.goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-white bg-opacity-90 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 z-20 shadow-xl opacity-0 group-hover:opacity-100 active:scale-90"
              aria-label="Siguiente noticia"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {this.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => this.setState({ currentIndex: index })}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
              Últimes Notícies
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NewsCard 
              title="Sessió prèvia al Olympiakos"
              icon="⚽"
            />
            <NewsCard 
              title="Flick: Aquest club m'ha canviat per complet"
              icon="🎙️"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Section;