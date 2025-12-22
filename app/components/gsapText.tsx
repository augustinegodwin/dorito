"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function GsapText() {
    useGSAP(()=>{
        gsap.to("#text",{
            opacity:1,
            ease:"power1.inOut",
            y:0,
        })
    },[])
    return (
        <h1 className="opacity-0 translate-y-14 text-2xl font-black" id="text">GSAPText</h1>
    )
}
