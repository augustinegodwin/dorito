"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
export default function Footer() {
    const splitTextToSpans = (element: HTMLElement) => {
        const text = element.innerText;
        element.innerHTML = "";

        text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char === " " ? "\u00A0" : char;
        span.classList.add("text-gradient");
        element.appendChild(span);
        });
    };
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (!textRef.current) return;

        splitTextToSpans(textRef.current);

        const chars = gsap.utils.toArray<HTMLElement>(textRef.current.children);
        const mid = Math.floor(chars.length / 2);

        gsap.set(chars, { y: (i) => 80 * Math.abs(i - mid) });

        gsap.to(chars, {
            y: 0,
            ease: "none",
            stagger: {
                amount: 0.6,
                from: "center",
            },
            scrollTrigger: {
                trigger: "#footer-L",
                start: "top bottom", // when footer enters
                end: "bottom bottom", // when footer leaves
                scrub: true, // TRUE 1:1
                invalidateOnRefresh: true,
            },
        });
    }, []);

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
        {/* Main large text */}
        <div id="footer-L" className="px-6 py-24 md:py-38 flex justify-center">
            <h2
                ref={textRef}
                id="footer-title"
                className="text-[25vw] flex-center flex leading-[0.9] font-bold tracking-[-10]"
            >
                ODORITO
            </h2>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 text-sm text-white/70">
            <span>© {new Date().getFullYear()} DORITO</span>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition">
                    Privacy
                </a>
                <a href="#" className="hover:text-white transition">
                    Terms
                </a>
                <a href="#" className="hover:text-white transition">
                    Contact
                </a>
            </div>
        </div>
    </footer>
  );
}
