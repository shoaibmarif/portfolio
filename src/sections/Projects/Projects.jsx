import React from "react";
import { ContentWrapper } from "../../shared/ContentWrapper";
import { TopHeading } from "../../shared/TopHeading";
import RelveLanding from "../../../public/images/projects/relve-landing.png";
import RelveApp from "../../../public/images/projects/relve-app.png";
import mcDonald from "../../../public/images/projects/mcdonald.png";
import worter from "../../../public/images/projects/worter.png";
import daraz from "../../../public/images/projects/daraz.png";
import omi from "../../../public/images/projects/omi.png";
import { Link } from "react-router-dom";
export const Projects = () => {
    const projects = [{
        imgLink: RelveLanding,
        title: "Relve Website",
        urlLink:"https://relvehq.com/",
        description: "A modern and responsive landing page for Relve, a cutting-edge app that revolutionizes the way you manage your tasks and boost productivity.",
        techStack: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
        imgLink: RelveApp,
        title: "Relve App",
        urlLink:"https://app.relvehq.com/",
        description: "A sleek and user-friendly app for Relve that helps you stay organized, track your progress, and achieve your goals with ease.",
        techStack: ["React Native", "Redux", "Firebase"]
    },
    {
        imgLink: mcDonald,
        title: "McDonald's",
        urlLink:"https://mcdonalds.com.pk/",
        description: "A vibrant and engaging website for McDonald's that showcases their delicious menu, promotions, and brand story.",
        techStack: ["HTML", "CSS", "JavaScript"]
    }, {
        imgLink: worter,
        title: "Worter",
        urlLink:"https://app.worter.io/",
        description: "A dynamic and interactive website for Worter, a language learning platform that offers engaging courses and resources for learners of all levels.",
        techStack: ["Vue.js", "Vuetify", "Node.js"]
    }, {
        imgLink: daraz,
        title: "Daraz",
        urlLink:"https://www.daraz.pk/",
        description: "A user-friendly and feature-rich website for Daraz, a popular e-commerce platform that connects buyers and sellers across South Asia.",
        techStack: ["Angular", "TypeScript", "MongoDB"]
    }, {
        imgLink: omi,
        title: "Omi",
        urlLink:"https://www.omihospital.com/",
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
                    <Link to={project.urlLink} key={index} 
                              data-aos="zoom-in"
                              data-aos-duration="700"
                              data-aos-delay={(index + 1) * 100}
           className="relative col-span-1 h-[300px] z-50 p-4">
                        <div className="bg-violet-950 absolute h-full w-full opacity-80 bg-black left-0 top-0   "></div>
                        {/* <div className="absolute w-[90%] h-[85%] border-4 border-violet-700 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}
                        <img src={project.imgLink} alt={project.title} className="w-full h-full object-stretch " />
                        <div className="text-white text-center absolute top-20 left-1/2 -translate-x-1/2  px-4  min-w-[350px]">
                            <h3 className="text-white uppercase font-semibold text-2xl">{project.title}</h3>
                            <p className="text-sm mt-4">{project.description}</p>
                            {/* <p className="text-sm mt-4 ">{project.techStack}</p> */}
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}