"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After earning a degree in{" "}
                <span className="font-medium">Computer Applications</span>, I followed my passion for programming. I completed a coding bootcamp and became proficient in{" "}
                <span className="font-medium">full-stack web development</span>. Solving complex problems is what
                excites me the most in programming. I thrive on the satisfaction of finding solutions. My expertise lies in{" "} <span className="font-medium"> PHP (Laravel, CodeIgniter), MySQL, Node.js, and React (Next.js)
    </span>
                . I'm also skilled in TypeScript and Prisma and constantly seek opportunities to learn new technologies.
                Currently, I'm actively seeking a{" "}
                <span className="font-medium">full-time position</span> as a software developer.
            </p>

            <p>
                <span className="italic">Beyond coding</span>, I indulge in video games, movies, and quality time with
                my dog. I'm passionate about{" "}
                <span className="font-medium">exploring diverse subjects</span>, with a current focus on{" "}
                <span className="font-medium">history, philosophy</span>, and mastering the guitar.
            </p>
        </motion.section>
    );
}