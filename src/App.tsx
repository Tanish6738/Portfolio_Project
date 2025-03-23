import About from "./Sections/About"
import Education from "./Sections/Education"
import Hero from "./Sections/Hero"
import Projects from "./Sections/Projects"
import Technologies from "./Sections/Technologies"
import Contact from "./Sections/Contact"
import Navbar from "./Sections/Navbar"
import Footer from "./Sections/Footer"

const App = () => {
  return (
    <>
    <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App