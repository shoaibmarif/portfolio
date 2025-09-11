import React from "react";
import Horeca from "../../../public/images/companies/horeca.png";
import CC from "../../../public/images/companies/CC.png";
import Daraz from "../../../public/images/companies/Daraz.png";
import manhattan from "../../../public/images/companies/manhattan.png";
import softtech from "../../../public/images/companies/softech.jpg";
import cipher from "../../../public/images/companies/cipherlabs.jpg";
import { ContentWrapper } from "../../shared/ContentWrapper";
import { TopHeading } from "../../shared/TopHeading";
import { Link } from "react-router-dom";
import EducationLogo from "../../../public/images/paf-logo.png"
export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Semantic UI",
    "Ant Design",
    "shadcn/ui",
    "Styled Components",
    "Sass / SCSS",
    "Redux",
    "Redux Toolkit",
    "GraphQL",
    "Next.js",
    "Vite",
    "Webpack",
    "Babel",
    "ESLint",
    "Git / GitHub",
    "Firebase",
  ];
  const experience = [
    {
      id: 1,
      name: "Disrupt Labs",
      startDate: "June 2023",
      endDate: "March 2024",
      position: "Frontend Developer",
      imgSrc: Daraz,
      companyLink: "https://www.daraz.pk/",
    },
    {
      id: 2,
      name: "Daraz",
      startDate: "June 2023",
      endDate: "March 2024",
      position: "Frontend Developer",
      imgSrc: Daraz,
      companyLink: "https://www.daraz.pk/",
    },
    {
      id: 3,
      name: "Cooperative Computing",
      startDate: "June 2022",
      endDate: "June 2023",
      position: "Frontend Developer",
      imgSrc: CC,
      companyLink: "https://www.cooperativecomputing.com/",
    },

    {
      id: 4,
      name: "Manhattan Communication",
      startDate: "March 2020",
      endDate: "June 2022",
      position: "Frontend Developer",
      imgSrc: manhattan,
      companyLink: "https://manhattan-mcl.com/",
    },


  ];

  return (
    <React.Fragment>
      <ContentWrapper classes={"relative w-full min-h-[100vh] py-16 bg-[#1b1b1b]"}>
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#2b2b2b" fill-opacity="1" d="M0,160L60,165.3C120,171,240,181,360,208C480,235,600,277,720,250.7C840,224,960,128,1080,112C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
        <TopHeading title="About" />

        <div className="grid grid-cols-12 gap-6  xl:gap-20 mt-16">
          <div className="col-span-12 lg:col-span-6">
            <div className=" flex justify-start h-full flex-col">
              <h2 className="uppercase text-primary-dark text-2xl font-bold mt-5" data-aos="zoom-in-up">Summary</h2>
              <p
                className="text-gray-300  text-lg mt-4"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                I’m an experienced Software Engineer building solutions that
                reshape how businesses engage with web and mobile platforms,
                creating interactive experiences that resonate with users and
                drive results.
              </p>
              <p
                className="text-gray-300 mt-5  text-lg"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                With a Bachelor's degree in Computer Science and a strong
                foundation in front-end development, I specialize in delivering
                high-performing, user-friendly, and responsive applications.
              </p>

              <h2 className="uppercase text-primary-dark text-2xl font-bold mt-5" data-aos="zoom-in-up">Skills</h2>

              {/* <h2 className="text-primary-dark text-2xl font-bold underline underline-offset-4 my-5 mb-2" data-aos="fade-up">Technical Skills</h2> */}
              <div className="flex items-center flex-wrap text-white  mt-5 gap-4">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="bg-gray-700 px-4 rounded-full py-2 text-sm" data-aos-delay={(index + 1) * 100} data-aos="zoom-in">
                    {skill}
                  </span>
                ))}
              </div>
              {/* <h2 className="text-primary-dark text-2xl font-bold underline underline-offset-4 my-5 mb-2" data-aos="fade-up">Contribution</h2> */}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6  z-[50] relative">

            <div className="grid grid-cols-4 gap-x-5  h-full">
              <h2 className="uppercase text-primary-dark text-2xl font-bold mt-5 col-span-4 mb-3" data-aos="zoom-in-up">Education & Journey</h2>
              <div
                 data-aos="zoom-in-up"
                
                className="col-span-4 bg-[#1F1F1F] overflow-hidden  transition-all text-white w-full rounded-lg   px-8 py-10 after:size-[400px] relative after:absolute after:bg-white  after:rounded-full after:opacity-10  after:top-[-50%] after:right-[-300px] after:transition-all">
                <div className="flex items-center">
                  <div>
                    <img src={EducationLogo} className="w-[100px] mr-5 rounded-full" alt="" />
                  </div>
                  <div className="ml-4">
                    <p className="italic text-sm">Aug 2016 - Dec 2020</p>
                    <h3 className=" font-semibold text-primary-dark capitalize  md:text-base lg:text-lg">
                      karachi institute of economics and technology
                    </h3>
                    <p className="text-[13px] text-gray-300 md:text-md text-base mt-1">
                      Bachelor's in Computer Sciences
                    </p>
                    <span className="text-xs block md:hidden text-white font-semibold">
                      {/* {startDate} - {endDate} */}asd
                    </span>
                  </div>
                </div>
                <div className="mt-7 text-sm leading-[26px]"><span className="text-primary-dark font-semibold">Curriculum:</span> Object-Oriented Programming, Data Structures and Algorithms, Database Management Systems, Computer Architecture, Operating Systems, Cryptography, Artificial Intelligence, Software Engineering, Human-Computer Interaction, Design Patterns, Web Development, Network Programming, Compiler Construction, Technology Entrepreneurship.</div>
              </div>
              <CounterText title="Happy Clients" count={20} />
              <CounterText title="Projects" count={40} />
              <CounterText title="Experience" count={5} />
              <CounterText title="Certification" count={25} />
            </div>
          </div>

          {/* <div className="col-span-12 lg:col-span-5">
            <h2 className="text-primary-dark  text-2xl font-bold underline underline-offset-4 my-5" data-aos="fade-up">Experience</h2>          
            {experience.map((exp, index) => {
              return(
              <React.Fragment key={index}>
                 <Timeline key={index} experience={exp} />
              </React.Fragment>
              )
            })}
          </div> */}
        </div>




        <div className="mt-20 grid grid-cols-4 gap-6">
          {experience.map((exp, index) => {
            return (
              <Link to={exp.companyLink} key={index} className="h-[450px] col-span-1 text-white flex items-center flex-col p-7 rounded-lg bg-[#1f1f1f]">
                <img className="rounded-full w-[100px]" src={exp.imgSrc} alt={exp.name} />
                <h2 className="text-primary-dark font-bold text-lg text-center mt-4">{exp.name}</h2>
                <h3 className="text-white font-semibold text-base">{exp.position}</h3>
                <p className=" mt-1 text-xs italic">{exp.startDate} - {exp.endDate}</p>
                <p className="mt-5 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi expedita cumque sint et amet earum magnam esse neque. Ducimus obcaecati similique corrupti mollitia fugiat! Doloremque temporibus explicabo iure et maiores.</p>
              </Link>
            )
          })}
        </div>

      <div className="absolute -bottom-2 left-0 w-full  ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2b2b2b" fill-opacity="1" d="M0,192L60,165.3C120,139,240,85,360,90.7C480,96,600,160,720,192C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      </div>
      </ContentWrapper>
    </React.Fragment>
  );
};


const CounterText = ({ title, count }) => {
  return (
    <div className="col-span-2 bg-[#1f1f1f] flex items-center justify-center flex-col p-4 py-5 rounded-lg mt-5">
      <h1 className="text-lg font-semibold text-primary-dark ">
        {title}
      </h1>
      <span className="text-4xl font-bold mt-5 block text-white">
        {count}+
      </span>
    </div>
  )
}

const Timeline = ({ experience }) => {
  const { name, startDate, endDate, position, imgSrc, description } =
    experience;
  return (
    <React.Fragment>
      <div className="flex  relative">
        <div className="w-28 text-end mt-[2px] hidden md:block z-50 ">
          <span className="text-xs text-white font-semibold">
            {startDate} - {endDate}
          </span>
        </div>
        <div className="z-50  relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-800 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-violet-800"></span>
            </span>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="z-50 bg-[#1F1F1F] overflow-hidden  transition-all text-white w-full rounded-lg mt-5 flex items-center px-4 py-7 after:size-[400px] relative after:absolute after:bg-white  after:rounded-full after:opacity-10  after:top-[-50%] after:right-[-300px] after:transition-all"
        >
          <div>
            <img src={imgSrc} className="w-16 mr-5 rounded-full" alt="" />
          </div>
          <div className="">
            <h3 className=" font-semibold text-primary-dark text-sm md:text-base lg:text-lg ">
              {position}
            </h3>
            <p className="text-[13px] text-gray-300 md:text-md lg:text-[15px]">
              {name}
            </p>
            <span className="text-xs block md:hidden text-white font-semibold">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
