import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import {ContentWrapper} from "../../shared/ContentWrapper";
import Horeca from "../../../public/images/companies/horeca.png"
import CC from "../../../public/images/companies/CC.png"
import Daraz from "../../../public/images/companies/Daraz.png"
import manhattan from "../../../public/images/companies/manhattan.png"
import softtech from "../../../public/images/companies/softect.png"
import cipher from "../../../public/images/companies/cipher.png"

export const About = () => {
  const experience = [
    {
      name: "Horeca Store",
      redirectLink: "#",
      startDate: "March 2024",
      endDate: "Present",
      position: "Senior Frontend Developer",
      experience: "Full-Time",
      imgSrc:Horeca
    },
    {
      name: "Daraz",
      redirectLink: "#",
      startDate: "June 2023",
      endDate: "March 2024",
      position: "Frontend Developer",
      experience: "Full-Time",
        imgSrc:Daraz
    },
    {
      name: "Cooperative Computing",
      redirectLink: "#",
      startDate: "June 2022",
      endDate: "June 2023",
      position: "Software Engineer - Frontend Developer",
      experience: "Full-Time",
        imgSrc:CC
    },
    {
      name: "Manhattan Communication Pvt. Ltd",
      redirectLink: "#",
      startDate: "March 2021",
      endDate: "June 2022",
      position: "Frontend Developer",
      experience: "Full-Time",
        imgSrc:manhattan
    },
    {
      name: "Softtech Worldwide",
      redirectLink: "#",
      startDate: "Dec 2020",
      endDate: "March 2021",
      position: "Frontend Developer",
      experience: "Internship",
        imgSrc:softtech
    },
    {
      name: "Cipher Labs",
      redirectLink: "#",
      startDate: "June 2020",
      endDate: "Aug 2020",
      position: "Frontend Developer",
      experience: "Internship",
        imgSrc:cipher
    },
  ];

  const education = [
    {
      name: "Karachi Institute of Economics & Technology (KIET)",
      redirectLink: "#",
      startDate: "Aug 2016",
      endDate: "Dec 2020",
      position: "Bechelor's in Computer Sciences",
    },
    {
      name: "Islamia Govt Arts & Commerce College",
      redirectLink: "#",
      startDate: "May 2013",
      endDate: "June 2015",
      position: "Intermediate Qualification",
    },
  ]
  return (
    <ContentWrapper>
    <Wrapper>
      <div className="text-center  uppercase flex flex-col items-center justify-center text-white py-10">
                    <h2 className="text-5xl  font-bold text-stroke" >Service</h2>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <ol class="relative border-s border-white ">
            {experience.map((exp, index) => {
              return (
                <li class="mb-10 ms-4 bg-white max-w-[450px] rounded-md  p-5 ">
                  <div className=" relative left-0 top-0 overflow-hidden">
                    <div className="absolute size-[100px] border-[1.5rem] rounded-full border-[#a37eff] top-[-50px] right-[-50px] opacity-20"></div>
                    <div className="absolute size-[200px] border-[1.5rem] rounded-full border-[#a37eff] top-[-100px] right-[-100px] opacity-20"></div>
                  </div>
                  <div class="absolute w-3 h-3 bg-white rounded-full mt-6 -start-1.5 border border-white "></div>
                   <img className="w-8" src={exp.imgSrc} alt="" />
                  <h5 className="text-xs text-white font-semibold bg-green-500 inline-block px-3 py-1 rounded-md mb-1">{exp.startDate} - {exp.endDate}</h5>
                  <h2 class="mb-1 text-xl dark:text-gray-500 font-bold">
                    {exp.name}
                  </h2>
                  <h3 class=" text-gray-600 text-sm">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600  text-sm ">{exp.experience}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="col-span-1">
          <div className="text-base text-white  leading-8">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis mollitia nam minus accusamus laboriosam, accusantium fugit enim dolorum neque dolores molestiae omnis. Neque dolorem sed eius veniam quae aut non.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut vero nemo dignissimos, harum at quas fuga atque doloribus error, fugiat voluptatem voluptates rem sit? Quia dicta nobis facilis dolorem.</p>
          </div>
          <ol class="relative border-s border-white mt-8">
            {education.map((edu, index) => {
              return (
                <li class="mb-10 ms-4 bg-white max-w-[450px] rounded-md  p-5">
                  <div class="absolute w-3 h-3 bg-white rounded-full mt-6 -start-1.5 border border-white "></div>
                  <h5 className="text-xs text-white font-semibold bg-green-500 inline-block px-3 py-1 rounded-md mb-1">{edu.startDate} - {edu.endDate}</h5>
                  <h2 class="mb-1 text-xl dark:text-gray-500 font-bold">
                    {edu.name}
                  </h2>
                  <h3 class=" text-gray-600 text-sm">
                    {edu.position}
                  </h3>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Wrapper>
    </ContentWrapper>
  );
};
