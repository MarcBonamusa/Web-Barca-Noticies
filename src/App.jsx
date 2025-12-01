import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SectionInici from './components/Section.jsx'
import SectionPartits from './components/Section2.jsx'
import SectionHistoria from './components/Section3'
import SectionJugadors from './components/Section4'
import SectionContacte from './components/Section5'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar/>
      <main className="flex-grow"> 
        <Routes>
          <Route path="/" element={<SectionInici />} />
          <Route path="/partits" element={<SectionPartits />} />
          <Route path="/jugadors" element={<SectionJugadors />} />
          <Route path="/historia" element={<SectionHistoria />} />
          <Route path="/contacte" element={<SectionContacte />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App