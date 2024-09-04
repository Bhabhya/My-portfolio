import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technology from './components/Technology'
import Contact from './components/Contact'

function App() {

  return (
    <div className='text-neutral-300 antialiased'>
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div className="absolute top-0 left-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
     
      <Navbar />
      <Hero />
      <About></About>
      <Technology></Technology>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
