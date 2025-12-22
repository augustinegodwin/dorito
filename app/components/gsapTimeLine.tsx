"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function GsapTimeLine() {
  const timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  });
//   Note this happems one after the other
  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 300,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotation: 360,
    });

    timeline.to("#yellow-box", {
      x: 600,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      scale: 1,
      ease: "back.inOut",
    });
  }, []);
  return (
    <>
        <button className="space-y-10 bg-amber-400 px-3 py-2 rounded-md cursor-pointer focus:opacity-85" onClick={()=>{
            if(timeline.paused()){
                timeline.play()
            }else{
                timeline.pause()
            }
        }}>Play/Pause</button>
        <div id="yellow-box" className="size-20 bg-yellow-400 rounded-lg " ></div>
    </>
  );
}
