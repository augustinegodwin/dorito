"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function GsapStagger() {
    useGSAP(()=>{
        gsap.to(".stagger-box", {
            y: 250,
            rotation: 360,  
            borderRadius:'100%',
            repeat:-1,
            yoyo:true,
            stagger:{
                amount:1.5,
                grid:[2,1],
                axis:"y",
                ease:"circ.inOut",
                from:"center"
            }
        })
    },[])
  return (
    <div className="flex gap-5">
        <div className="size-20 stagger-box bg-indigo-200 rounded-lg "/>
        <div className="size-20 stagger-box bg-indigo-300 rounded-lg "/>
        <div className="size-20 stagger-box bg-indigo-400 rounded-lg "/>
        <div className="size-20 stagger-box bg-indigo-500 rounded-lg "/>
        <div className="size-20 stagger-box bg-indigo-600 rounded-lg "/>
        <div className="size-20 stagger-box bg-indigo-700 rounded-lg "/>
        <div className="size-20 stagger-box bg-indigo-800 rounded-lg "/>
    </div>
  )
}
