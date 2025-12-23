import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import NavBar from "../components/navBar"
import Hero from "../components/hero"
import CockTails from "../components/cockTail"
gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Lander() {
  return (
    <main className="col-center w-full overflow-x-hidden min-h-screen ">
        <NavBar />
        <Hero/>
        <CockTails/>
    </main>
  )
}
