"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function GsapFromTo() {
  useGSAP(() => {
    gsap.fromTo("#red-box", 
    {
        x: 0,
        rotation:0,
        borderRadius:'0%'
    },
    {
      x: 300,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      borderRadius:'100%',
      duration: 2,
      ease: "bounce.out",
    });
  }, []);
  return (
    <div id="red-box" className="size-20 bg-red-400 rounded-lg "></div>
  );
}
