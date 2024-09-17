import React from "react";
import { Wrapper } from "../../shared/Wrapper";

export const About = () => {
  const experience = [
    {
      name: "Horeca Store",
      redirectLink: "#",
      startDate: "March 2024",
      endDate: "Present",
      position: "Senior Frontend Developer",
      experience: "Full-Time",
    },
    {
      name: "Daraz",
      redirectLink: "#",
      startDate: "June 2023",
      endDate: "March 2024",
      position: "Frontend Developer",
      experience: "Full-Time",
    },
    {
      name: "Cooperative Computing",
      redirectLink: "#",
      startDate: "June 2022",
      endDate: "June 2023",
      position: "Software Engineer - Frontend Developer",
      experience: "Full-Time",
    },
    {
      name: "Manhattan Communication Pvt. Ltd",
      redirectLink: "#",
      startDate: "March 2021",
      endDate: "June 2022",
      position: "Frontend Developer",
      experience: "Full-Time",
    },
    {
      name: "Softtech Worldwide",
      redirectLink: "#",
      startDate: "Dec 2020",
      endDate: "March 2021",
      position: "Frontend Developer",
      experience: "Internship",
    },
    {
      name: "Cipher Labs",
      redirectLink: "#",
      startDate: "June 2020",
      endDate: "Aug 2020",
      position: "Frontend Developer",
      experience: "Internship",
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
    <Wrapper>
      <div className="text-center mt-16 uppercase flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold">About</h2>
            <p className="text-base mt-2">I Provide Service Based on Your Requirements</p>
            </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            {experience.map((exp, index) => {
              return (
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h2 class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {exp.name}
                  </h2>
                  <h3 class="text-white ">
                    {exp.position}
                  </h3>
                  <p className="text-white">{exp.startDate} - {exp.endDate} - <span>{exp.experience}</span></p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="col-span-1">
         There will be some text here related to about section
          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            {education.map((edu, index) => {
              return (
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <h2 class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {edu.name}
                  </h2>
                  <h3 class="text-white ">
                    {edu.position}
                  </h3>
                  <p className="text-white">{edu.startDate} - {edu.endDate}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Wrapper>
  );
};
