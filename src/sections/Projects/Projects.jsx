import React from "react";
import { ContentWrapper } from "../../shared/ContentWrapper";
import { TopHeading } from "../../shared/TopHeading";
import RelveLanding from "../../../public/images/projects/relve-landing.png";
import RelveApp from "../../../public/images/projects/relve-app.png";
import mcDonald from "../../../public/images/projects/mcdonald.png";
import tawkeel from "../../../public/images/projects/tawkeel.png";
import worter from "../../../public/images/projects/worter.png";
import daraz from "../../../public/images/projects/daraz.png";
import omi from "../../../public/images/projects/omi.png";
import duhs from "../../../public/images/projects/duhs.png";
import { Link } from "react-router-dom";
export const Projects = () => {
    const projects = [{
        imgLink: RelveLanding,
        title: "Relve Landing Page",
        description: "A modern and responsive landing page for Relve, a cutting-edge app that revolutionizes the way you manage your tasks and boost productivity.",
        techStack: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
        imgLink: RelveApp,
        title: "Relve App",
        description: "A sleek and user-friendly app for Relve that helps you stay organized, track your progress, and achieve your goals with ease.",
        techStack: ["React Native", "Redux", "Firebase"]
    },
    {
        imgLink: mcDonald,
        title: "McDonald's Website",
        description: "A vibrant and engaging website for McDonald's that showcases their delicious menu, promotions, and brand story.",
        techStack: ["HTML", "CSS", "JavaScript"]
    }, {
        imgLink: worter,
        title: "Worter Website",
        description: "A dynamic and interactive website for Worter, a language learning platform that offers engaging courses and resources for learners of all levels.",
        techStack: ["Vue.js", "Vuetify", "Node.js"]
    }, {
        imgLink: daraz,
        title: "Daraz Website",
        description: "A user-friendly and feature-rich website for Daraz, a popular e-commerce platform that connects buyers and sellers across South Asia.",
        techStack: ["Angular", "TypeScript", "MongoDB"]
    }, {
        imgLink: omi,
        title: "Omi Website",
        description: "A sleek and modern website for Omi, a cutting-edge technology company that specializes in AI and machine learning solutions.",
        techStack: ["Django", "Python", "PostgreSQL"]
    }
    ]
    return (
        <div className="py-16 bg-[#1b1b1b] relative z-50">

            <ContentWrapper
                innerClass={"relative"}>
                <TopHeading title="Projects" />
            </ContentWrapper>
            <div className="grid grid-cols-3  gap-8">
                {projects.map((project, index) => (
                    <Link to={"#"} key={index} className="col-span-1 h-[300px] z-50">
                        <div className="bg-black absolute w-full bg-orange-300 left-0 top-0"></div>
                        <img src={project.imgLink} alt={project.title} className="w-full h-full object-stretch " />
                    </Link>
                ))}

            </div>
        </div>
    )
}