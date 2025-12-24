import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import NavBar from "../components/navBar"
import Hero from "../components/hero"
import CockTails from "../components/cockTail"
import About from "../components/about"
import Art from "../components/art"
import Menu from "../components/menu"
import Footer from "../components/footer"
import Contact from "../components/contact"

gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Lander() {
  return (
    <main className="overflow-hidden">
        <NavBar />
        <Hero/>
        <CockTails/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
        <Footer/>
    </main>
  )
}
