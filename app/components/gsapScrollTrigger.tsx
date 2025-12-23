"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)
export default function GsapScrollTrigger() {
    const scrollRef=useRef<HTMLDivElement>(null)
    useGSAP(()=>{
        if (!scrollRef.current) return;
        const boxes=gsap.utils.toArray(scrollRef.current.children)
        boxes.forEach((box:any)=>{
            gsap.to(box,{
                x:150 * (boxes.indexOf(box) + 5),
                rotation:360,
                borderRadius:'100%',
                scale:1.5,
                scrollTrigger:{
                    trigger:box,
                    start:"bottom bottom",
                    end:"top 10%",
                    scrub:true,
                },
                ease:"power1.inOut",
            })
        })
    },[])
    return (
        <div className="w-full min-h-screen" ref={scrollRef}>
            <div id="scroll-pink" className="size-20 scroll-box bg-pink-400 rounded-lg "></div>
            <div id="scroll-orange" className="size-20 scroll-box bg-orange-400 rounded-lg "></div>
        </div>
    )
}
