"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function GsapFrom() {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 300,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div id="green-box" className="size-20 bg-green-400 rounded-lg "></div>
  );
}
