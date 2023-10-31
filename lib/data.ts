import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaravel, FaPhp } from "react-icons/fa6"
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import relaxo from "@/public/relaxo.png";
import donear from "@/public/donear.png";
import eicher from "@/public/eicher.png";
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "PHP Industrial Training",
        location: "Xperia Technologies Pvt. Ltd., New Delhi, India",
        description:
            "Successfully completed Industrial Training in PHP.",
        icon: React.createElement(LuGraduationCap),
        date: "2014 - 2015",
    },
    {
        title: "Internship Trainee",
        location: "Om Educational Society, Prayagraj, UP, India",
        description:
            "Successfully completed customized training under Computer Course Series on modules Web Development, MS-Office, Internet, C-Language, C++ and Java.",
        icon: React.createElement(LuGraduationCap),
        date: "2016 - 2018",
    },
    {
        title: "Computer Instructor",
        location: "Kendriya Vidyalaya, Prayagraj, UP, India",
        description:
            "Received positive feedback from students, parents, and administrators for teaching programming.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2020",
    },
    {
        title: "PHP Developer",
        location: "Tneos, New Delhi, India",
        description:
            "Received positive feedback from clients and users for PHP development work, demonstrating the value of your contributions to the team and the company.",
        icon: React.createElement(FaLaravel),
        date: "2020 - 2021",
    },
    {
        title: "PHP Developer",
        location: "SISL Infotech, New Delhi, India",
        description:
            "Worked with a team of PHP developers to implement a new continuous integration and continuous delivery (CI/CD) pipeline, which reduced the time it takes to deploy new features to production by 50%.",
        icon: React.createElement(FaPhp),
        date: "2020 - 2021",
    },
    {
        title: "PHP Developer",
        location: "SISL Infotech, New Delhi, India",
        description:
            "Worked with a team of PHP developers to implement a new continuous integration and continuous delivery (CI/CD) pipeline, which reduced the time it takes to deploy new features to production by 50%.",
        icon: React.createElement(FaPhp),
        date: "2021",
    },
    {
        title: "PHP Developer",
        location: "DIAM RESOURCES PRIVATE LIMITED, New Delhi, India",
        description:
            "Migrated a legacy PHP application to a cloud-based platform, resulting in significant cost savings and performance improvements.",
        icon: React.createElement(FaReact),
        date: "2021 - 2022",
    },
    {
        title: "Laravel Developer",
        location: "Grapes, New Delhi, India",
        description:
            "Created and maintained 3 dynamic web applications built on Laravel, resulting in 40% increase in user engagement in 8 months.",
        icon: React.createElement(FaLaravel),
        date: "2022 - 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Donear",
        description:
            "I worked as a backend-stack developer The Donear website. It is also integrated with a number of other systems, such as ERP systems, CRM systems, and logistics systems. This integration allows Donear to provide a seamless experience for its customers, from product search and discovery to order fulfillment",
        tags: ["Laravel", "MySQL", "REST API"],
        imageUrl: donear,
    },
    {
        title: "Eicher Truck and Buses",
        description:
            "The website is designed with a clean and modern layout that is easy to navigate. It uses high-quality images and videos to showcase Eicher's products and services.",
        tags: ["React", "TypeScript", "Next.js", "REST APIs", "Redux"],
        imageUrl: eicher,
    },
    {
        title: "Relaxo Footwear",
        description:
            "The website is a complex e-commerce platform with a wide range of features, and it is important to build the website that is both user-friendly and scalable.",
        tags: ["Laravel", "Payment Gateway", "MySQL", "CMS", "3rd Party Integration"],
        imageUrl: relaxo,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "PHP",
    "Laravel",
    "Codeigniter",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;