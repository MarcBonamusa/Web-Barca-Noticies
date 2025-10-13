import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';  

class App extends React.Component{
  render() {
    return (
      <div>
        <Header/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App