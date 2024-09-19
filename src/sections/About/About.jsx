import {Wrapper} from "../../shared/Wrapper"
import React, { useState } from "react";
import Horeca from "../../../public/images/companies/horeca.png";
import CC from "../../../public/images/companies/CC.png";
import Daraz from "../../../public/images/companies/Daraz.png";
import manhattan from "../../../public/images/companies/manhattan.png";
import softtech from "../../../public/images/companies/softect.png";
import cipher from "../../../public/images/companies/cipher.png";
import Slider from "react-slick"

export const About = () => {
  const experience = [
    {
      id: 1,
      name: "Horeca Store",
      startDate: "March 2024",
      endDate: "Present",
      position: "Senior Frontend Developer",
      imgSrc: Horeca,
      description: "Worked on advanced frontend features and optimized performance across web apps."
    },
    {
      id: 2,
      name: "Daraz",
      startDate: "June 2023",
      endDate: "March 2024",
      position: "Frontend Developer",
      imgSrc: Daraz,
      description: "Developed e-commerce solutions and implemented frontend features for Daraz platform."
    },
    {
      id: 3,
      name: "Cooperative Computing",
      startDate: "June 2022",
      endDate: "June 2023",
      position: "Software Engineer - Frontend Developer",
      imgSrc: CC,
      description: "Led frontend development for various client projects, improving scalability and performance."
    },
    {
      id: 4,
      name: "Manhattan Communication Pvt. Ltd",
      startDate: "March 2021",
      endDate: "June 2022",
      position: "Frontend Developer",
      imgSrc: manhattan,
      description: "Implemented responsive designs and built interactive user experiences for marketing campaigns."
    },
    {
      id: 5,
      name: "Softtech Worldwide",
      startDate: "Dec 2020",
      endDate: "March 2021",
      position: "Frontend Developer (Intern)",
      imgSrc: softtech,
      description: "Internship focused on learning and implementing modern frontend frameworks and tools."
    },
    {
      id: 6,
      name: "Cipher Labs",
      startDate: "June 2020",
      endDate: "Aug 2020",
      position: "Frontend Developer (Intern)",
      imgSrc: cipher,
      description: "Worked on small-scale web projects as part of a team, gaining valuable industry experience."
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };  

  return (
    <Wrapper>
  <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </Wrapper>
    // <div className="py-10 px-6 bg-gray-50">
    //   <h2 className="text-4xl text-center font-bold mb-10">Professional Experience Timeline</h2>

    //   <div className="relative flex items-center justify-between w-full max-w-screen-xl mx-auto">
    //     {/* Horizontal Timeline Line */}
    //     <div className="absolute w-full h-1 bg-gray-300 top-1/2 left-0 transform -translate-y-1/2 z-0"></div>

    //     {/* Timeline Items */}
    //     {experience.map((exp, index) => (
    //       <div key={exp.id} className="relative z-10 flex flex-col items-center text-center w-1/6">
    //         {/* Circle Icon with Colors */}
    //         <div
    //           className={`w-12 h-12 rounded-full mb-3 ${index % 2 === 0 ? 'bg-yellow-500' : 'bg-red-500'} flex items-center justify-center shadow-lg`}
    //         >
    //           <img className="w-8 h-8 rounded-full" src={exp.imgSrc} alt={exp.name} />
    //         </div>

    //         {/* Experience Details */}
    //         <div className="bg-white p-4 rounded-lg shadow-md">
    //           <h3 className="font-semibold text-lg">{exp.name}</h3>
    //           <p className="text-xs text-gray-500 mb-2">{exp.startDate} - {exp.endDate}</p>
    //           <p className="text-sm text-gray-600">{exp.position}</p>
    //           <p className="text-xs text-gray-400 mt-2">{exp.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};
