import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Works from "./pages/Works"
import MouseOption from "./utils/MouseOption"
import Footer from "./components/Footer/Footer"

const App = () =>{
  const [mouseEvent, setMouseEvent] = useState(true)
  const mouseEnter = () => setMouseEvent(false);
  const mouseLeave = () => setMouseEvent(true);
  return (
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <MouseOption mouseExist={mouseEvent}/>
    <NavBar/>
     <Home/>
     <About/>
     <Works/>
     <Contact/>
     <Footer developer="Mohammed Mahi" copyright={2024}/>
    </div>
  )
}

export default App
