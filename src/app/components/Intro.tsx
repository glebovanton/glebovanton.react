"use client";

import {MouseEvent} from "react";
import IconTelegram from "@/app/components/icons/IconTelegram";
import IconGithub from "@/app/components/icons/IconGithub";
import IconLinkedIn from "@/app/components/icons/IconLinkedIn";


export default function Intro() {
    const downloadCv = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
        };
    const experienceYears = new Date().getFullYear() - 2015;

    return (
        <section
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <div style={{opacity: 1, transform: 'none'}}>
                        <img
                            alt="Anton portrait"
                            fetchPriority="high"
                            width="368"
                            height="368"
                            decoding="async"
                            data-nimg="1"
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                            style={{color: 'transparent'}}
                            src={"./ava.jpg"}
                        />
                    </div>
                    <span
                        className="absolute bottom-0 right-0 text-4xl"
                        style={{opacity: 0.8, transform: 'none'}}
                    >👋</span
                    >
                </div>
            </div>
            <h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                style={{opacity: 1, transform: 'none'}}
            >
                <span className="font-bold">Hello, I'm Anton.</span> I'm a
                <span className="font-bold"> FE developer</span> with
                <span className="font-bold"> {experienceYears} years</span> of experience.
                I enjoy building <span className="italic">sites &amp; apps</span>. My focus is
                <span className="underline"> Vue (Node.js as BE)</span>.
            </h1>
            <div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                style={{opacity: 1, transform: 'none'}}
            >
                <a
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    href="#contact"
                >Contact me here
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="opacity-70 group-hover:translate-x-1 transition"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                    </svg></a
                >
                <button
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    onClick={downloadCv}>Download CV
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="opacity-60 group-hover:translate-y-1 transition"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg></button
            >
            <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/anton-glebov/"
                target="_blank"
            >
                <IconLinkedIn/>
            </a>
            <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/glebovanton/"
                target="_blank"
            >
                <IconGithub/>
            </a>
            <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://t.me/workglebov"
                target="_blank"
            >
                <IconTelegram/>
            </a>
        </div>
</section>
)
    ;
}