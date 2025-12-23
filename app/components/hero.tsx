"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
    const videoRef=useRef<HTMLVideoElement>(null)
    const isMobile=useMediaQuery({maxWidth:767})
    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "chars, words" });
        const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
        gsap.registerPlugin(ScrollTrigger);
        heroSplit.chars.forEach((char: any) => char.classList.add("text-gradient"));
        gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1,
        ease: "elastic",
        stagger: 0.05,
        });
        gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.5,
        ease: "elastic",
        stagger: 0.05,
        delay: 1,
        });
        gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
            // markers: true, // optional for debugging
        }
        })
        .to(".right-leaf", { y: 200 }, 0)
        .to(".left-leaf", { y: -200 }, 0);

        const startValue = isMobile ? "top 50%" : "center 60%";
	    const endValue = isMobile ? "120% top" : "bottom top";

        const video = videoRef.current;
        if (!video) return;

        // Tie video playback to scroll progress
        let tl=gsap.timeline({
        scrollTrigger: {
            trigger: "video",
            start: startValue,
            end: endValue,
            scrub: true,
            pin:true,
            // markers: true, // optional for debugging 
        },
        }).to(video, {
        currentTime: video.duration || 1, // scrub through entire video
        ease: "none",
        });

        // Refresh after load so ScrollTrigger recalculates correctly
        video.onloadedmetadata = () => {
        tl.to(video, {
            currentTime: video.duration,
        });
	};

    }, []);
    
    return (
        <>
            <section id="hero" className="noisy ">
            <h1 className="title uppercase">Dorito</h1>
            <Image
                src="/images/hero-left-leaf.png"
                alt="left-leaf"
                className="left-leaf"
                width={266}
                height={461}
            />
            <Image
                src="/images/hero-right-leaf.png"
                alt="right-leaf"
                className="right-leaf"
                width={228}
                height={478}
            />
            <div className="body">
                <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>Cool. Crisp. Classic.</p>
                    <p className="subtitle">
                    Sip the Spirit <br /> of Summer
                    </p>
                </div>
                <div className="view-cocktails">
                    <p className="subtitle">
                    Every cocktail on our menu is a blend of premium ingredients,
                    creative flair, and timeless recipes — designed to delight your
                    senses.
                    </p>
                    <a href="#cocktails">View cocktails</a>
                </div>
                </div>
            </div>
            </section>
            <div className="video absolute bottom-0 inset-0 z-[-10]">
                <video
                    ref={videoRef}
                    src="/videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                />
            </div>
        </>
    );
}
