import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import NavBar from "../components/navBar"
import Hero from "../components/hero"
gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Lander() {
  return (
    <main className="col-center w-full overflow-x-hidden min-h-screen ">
        <NavBar />
        <Hero/>
        <div className="h-screen bg-white dark:bg-black"></div>
    </main>
  )
}
