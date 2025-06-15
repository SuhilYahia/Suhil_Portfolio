import './App.css'
import { Routes, Route } from 'react-router-dom'
import Projects from './myproject/Projects'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import ForsaJadiduhDetails from './myproject/details_project/forsahjadiduh/forsahjadiduh'
import CoffeeDetails from './myproject/details_project/coffee/Coffee'
import ELearningDetails from './myproject/details_project/E-Learing/E-Learning'
import Header from './components/sections/Header'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100 dark:bg-[#181824] transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <div id="skills"><Skills /></div>
              <div id="services"><Services /></div>
              <div id="projects"><Projects /></div>
              <div id="contact"><Contact /></div>
            </>
          } />
          <Route path="/details_project/forsahjadiduh" element={<ForsaJadiduhDetails />} />
          <Route path="/details_project/coffee" element={<CoffeeDetails />} />
          <Route path="/details_project/e-learning" element={<ELearningDetails />} />        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
