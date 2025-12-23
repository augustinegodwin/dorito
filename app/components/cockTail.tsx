"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { cocktailLists, mockTailLists } from "../data/constants"
export default function CockTails() {
    useGSAP(()=>{
        const parallaxTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:"#cocktails",
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
            
        })
        parallaxTimeline
        .from('#c-left-leaf', {
            x: -100, y: 100
        })
        .from('#c-right-leaf', {
            x: 100, y: 100
        })
    },[])
    return (
        <section id="cocktails" className="noisy">
            <Image
                src="/images/cocktail-left-leaf.png" 
                alt="l-leaf" 
                id="c-left-leaf"
                width={294}
                height={332}
            />
            <Image
                src="/images/cocktail-right-leaf.png" 
                alt="r-leaf" 
                id="c-right-leaf"
                width={315}
                height={332 }
            />
            <div className="list">
                <div className="popular box">
                    <h2>Most Popular CockTails:</h2>
                    <ul>
                        {
                            cocktailLists.map(({name,country,detail,price})=>(
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="loved box">
                    <h2>Most Loved CockTails:</h2>
                    <ul>
                        {
                            mockTailLists.map(({name,country,detail,price})=>(
                                <li key={name}>
                                    <div className="me-28">
                                        <h3>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
