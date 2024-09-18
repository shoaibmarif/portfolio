import React from 'react';
import { Wrapper } from "../../shared/Wrapper"
import Project1 from "../../../public/images/projects/Project-1.png"
import Project2 from "../../../public/images/projects/Project-2.png"
import Project3 from "../../../public/images/projects/Project-3.png"
import Project4 from "../../../public/images/projects/Project-4.png"
import Project5 from "../../../public/images/projects/Project-5.png"
import Project6 from "../../../public/images/projects/Project-6.png"
import Project7 from "../../../public/images/projects/Project-7.png"

export const Project = () => {
    // const projectType = [
    //     "All",
    //     "React JS",
    //     "Open Source",
    //     "Tailwind",
    //     "Next JS",
    //     "Chrome Extensions",
    //     "Vanilla Javascript"
    // ]

    // const projects = [
    //     {
    //         name: "Daraz",
    //         type: "React JS",
    //         liveLink: "https://www.daraz.pk/",
    //         projectimage: "",
    //         projectDescription: ""

    //     }
    // ]
    return (
        <div className='text-white'>
            <h1>Project Heading</h1>

            {/* Portfolio Showcase  */}
            {/* <ul className='flex items-center justify-center'>
                    {projectType.map((item) => {
                        return (
                            <li className='inline-block min-w-36 border-2 mx-3 px-3 py-1 rounded-md text-center'>{item}</li>
                        )
                    })}
                </ul> */}

            <div className="grid grid-cols-4">
                <div className='relative col-span-1 max-h-[400px] overflow-hidden group' >
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                    <img src={Project1} alt="" className='absolute top-[0px] group-hover:top-[-100px]' />
                </div>
                <div className='relative col-span-1 max-h-[400px] overflow-hidden ' >
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                    <img src={Project2} alt="" className='' />
                </div>
                <div className='relative col-span-1 max-h-[400px] overflow-hidden ' >
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                    <img src={Project3} alt="" className='' />
                </div>
                <div className='relative col-span-1 max-h-[400px] overflow-hidden ' >
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                    <img src={Project4} alt="" className='' />
                </div>
                <div className='relative col-span-1 max-h-[400px] overflow-hidden ' >
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                    <img src={Project5} alt="" className='' />
                </div>
                <div className='relative col-span-1 max-h-[400px] overflow-hidden ' >
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                    <img src={Project6} alt="" className='' />
                </div>
                <div className='relative col-span-1 max-h-[400px] overflow-hidden ' >
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                    <img src={Project7} alt="" className='' />
                </div>
                <div className='relative col-span-1 max-h-[400px] overflow-hidden ' >
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                    <img src={Project1} alt="" className='' />
                </div>
            </div>

        </div>
    )
}