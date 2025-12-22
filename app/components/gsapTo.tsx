"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
export default function GsapTo() {
    useGSAP(() => {
        gsap.to("#blue-box", {
            x: 300, 
            repeat: -1, 
            yoyo: true,
            rotation: 360, 
            duration: 2,
            ease:"elastic"
        });
    }, []);
    return (
        <div id="blue-box" className="size-20 bg-blue-400 rounded-lg "></div>
    )
}
