import GsapFrom from "@/app/components/gsapFrom";
import GsapFromTo from "@/app/components/gsapFromTo";
import GsapScrollTrigger from "@/app/components/gsapScrollTrigger";
import GsapStagger from "@/app/components/gsapStagger";
import GsapText from "@/app/components/gsapText";
import GsapTimeLine from "@/app/components/gsapTimeLine";

import GsapTo from "@/app/components/gsapTo";
GsapTimeLine
import { courses } from "@/app/data/courses";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: courses[0].title,
  description: courses[0].description,
};
export default function gsapTo() {
  return (
    <>
      <div className="flex flex-col gap-6 items-start text-left">
        <h1 className="max-w-xs text-3xl  font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          GSAP To
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          The <i>gsap.to()</i> method is used to animate element from their current state to a new state.
          <br /><br />
          The <i>gsap.to()</i> method is similar to the <i>gsap.from()</i> method, but the difference is that the <i>gsap.to()</i> method animates element from their current state to a new state, while the <i>gsap.from()</i> method animates element from a new state to a current state
          <br />
          <br />
          Read more about the <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            <i>gsap.to()</i>
          </a>{" "}method          
        </p>
      </div>
      <div className="dark:bg-white/5 flex-col gap-4 justify-center  rounded-xl flex items-center bg-gray-200 min-h-75 w-full">
        <GsapText/>
      </div>
      <div className="flex gap-4 text-base font-medium flex-row w-full">
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
                      className="dark:invert"
                      src="/vercel.svg"
                      alt="Vercel logomark"
                      width={16}
                      height={16}
                    /> */}
          Explore
        </a>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next
        </a>
      </div>
    </>
  );
}
