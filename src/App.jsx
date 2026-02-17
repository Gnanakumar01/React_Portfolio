import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Projects'
import './App.css'
import './components/About/About.css'
import './components/Navbar/Navbar.css'
import './components/Home/Home.css'
import './components/Skills/Skills.css'
import './components/Projects/Projects.css'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    </>
  )
}

export default App
