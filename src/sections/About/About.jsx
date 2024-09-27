import { Wrapper } from "../../shared/Wrapper";
import React from "react";
import Horeca from "../../../public/images/companies/horeca.png";
import CC from "../../../public/images/companies/CC.png";
import Daraz from "../../../public/images/companies/Daraz.png";
import manhattan from "../../../public/images/companies/manhattan.png";
import softtech from "../../../public/images/companies/softect.png";
import cipher from "../../../public/images/companies/cipher.png";
import Slider from "react-slick";
import { ContentWrapper } from "../../shared/ContentWrapper";
import Badge1 from "../../../public/images/badges/badge-1.png";
import Badge2 from "../../../public/images/badges/badge-2.png";
import Badge3 from "../../../public/images/badges/badge-3.png";
import Badge4 from "../../../public/images/badges/badge-4.png";
import Badge5 from "../../../public/images/badges/badge-5.png";
import Badge6 from "../../../public/images/badges/badge-6.png";
import Badge7 from "../../../public/images/badges/badge-7.png";
import Badge8 from "../../../public/images/badges/badge-8.png";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import FreeCodeCamp from "../../../public/images/certificates/freecodecamp.jpg";
import Coursera from "../../../public/images/certificates/coursera.jpg";
import Udemy from "../../../public/images/certificates/udemy.jpg";
import Ibm from "../../../public/images/certificates/ibm.jpg";
import Linkedin from "../../../public/images/certificates/linkedin.jpg";
import Pluralsight from "../../../public/images/certificates/pluralsight.png";
import { TopHeading } from "../../shared/TopHeading";
import { MdArrowForwardIos } from "react-icons/md";

export const About = () => {
  const experience = [
    {
      id: 1,
      name: "Horeca Store",
      startDate: "March 2024",
      endDate: "Present",
      position: "Senior Frontend Developer",
      imgSrc: Horeca,
      description:
        "Worked on advanced frontend features and optimized performance across web apps.",
    },
    {
      id: 2,
      name: "Daraz",
      startDate: "June 2023",
      endDate: "March 2024",
      position: "Frontend Developer",
      imgSrc: Daraz,
      description:
        "Developed e-commerce solutions and implemented frontend features for Daraz platform.",
    },
    {
      id: 3,
      name: "Cooperative Computing",
      startDate: "June 2022",
      endDate: "June 2023",
      position: "Software Engineer - Frontend Developer",
      imgSrc: CC,
      description:
        "Led frontend development for various client projects, improving scalability and performance.",
    },
    {
      id: 4,
      name: "Manhattan Communication Pvt. Ltd",
      startDate: "March 2021",
      endDate: "June 2022",
      position: "Frontend Developer",
      imgSrc: manhattan,
      description:
        "Implemented responsive designs and built interactive user experiences for marketing campaigns.",
    },
    {
      id: 5,
      name: "Softtech Worldwide",
      startDate: "Dec 2020",
      endDate: "March 2021",
      position: "Frontend Developer (Intern)",
      imgSrc: softtech,
      description:
        "Internship focused on learning and implementing modern frontend frameworks and tools.",
    },
    {
      id: 6,
      name: "Cipher Labs",
      startDate: "June 2020",
      endDate: "Aug 2020",
      position: "Frontend Developer (Intern)",
      imgSrc: cipher,
      description:
        "Worked on small-scale web projects as part of a team, gaining valuable industry experience.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <HiArrowLongRight color="white" />,
    prevArrow: <HiArrowLongLeft color="white" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const certificates = [
    {
      name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      organization: "Udemy",
      issueDate: "Dec 2022",
      orgImg: Udemy,
      redirectLink: "https://www.udemy.com/certificate-link",
    },
    {
      name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      organization: "Udemy",
      issueDate: "Dec 2022",
      orgImg: Udemy,
      redirectLink: "https://www.udemy.com/certificate-link",
    },
    {
      name: "Data Science Foundations - Level 1",
      organization: "IBM",
      issueDate: "Jul 2021",
      orgImg: Ibm,
      redirectLink: "https://www.ibm.com/certificate-link",
    },
    {
      name: "Data Science Orientation",
      organization: "Coursera",
      issueDate: "Jul 2021",
      orgImg: Coursera,
      redirectLink: "https://www.coursera.org/certificate-link",
    },
    {
      name: "Tools for Data Science",
      organization: "Coursera",
      issueDate: "Jul 2021",
      orgImg: Coursera,
      redirectLink: "https://www.coursera.org/certificate-link",
    },
    {
      name: "Learning Python",
      organization: "LinkedIn",
      issueDate: "Jun 2021",
      orgImg: Linkedin,
      redirectLink: "https://www.linkedin.com/certificate-link",
    },
    {
      name: "Programming for Everybody (Getting Started with Python)",
      organization: "Coursera",
      issueDate: "Jun 2021",
      orgImg: Coursera,
      redirectLink: "https://www.coursera.org/certificate-link",
    },
    {
      name: "What is Data Science?",
      organization: "Coursera",
      issueDate: "Jun 2021",
      orgImg: Coursera,
      redirectLink: "https://www.coursera.org/certificate-link",
    },
    {
      name: "Core Python - Getting Started",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink: "https://www.pluralsight.com/certificate-link",
    },
    {
      name: "Introduction to SQL",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink: "https://www.pluralsight.com/certificate-link",
    },
    {
      name: "Practical Python for Beginners",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink: "https://www.pluralsight.com/certificate-link",
    },
    {
      name: "Python - Big Picture",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink: "https://www.pluralsight.com/certificate-link",
    },
    {
      name: "Responsive Web Design",
      organization: "freeCodeCamp",
      issueDate: "Apr 2021",
      orgImg: FreeCodeCamp,
      redirectLink: "https://www.freecodecamp.org/certificate-link",
    },
    {
      name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      organization: "Udemy",
      issueDate: "Dec 2022",
      orgImg: Udemy,
      redirectLink: "https://www.udemy.com/certificate-link",
    },
    {
      name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      organization: "Udemy",
      issueDate: "Dec 2022",
      orgImg: Udemy,
      redirectLink: "https://www.udemy.com/certificate-link",
    },
    {
      name: "Data Science Foundations - Level 1",
      organization: "IBM",
      issueDate: "Jul 2021",
      orgImg: Ibm,
      redirectLink: "https://www.ibm.com/certificate-link",
    },
    {
      name: "Data Science Orientation",
      organization: "Coursera",
      issueDate: "Jul 2021",
      orgImg: Coursera,
      redirectLink: "https://www.coursera.org/certificate-link",
    },
    {
      name: "Tools for Data Science",
      organization: "Coursera",
      issueDate: "Jul 2021",
      orgImg: Coursera,
      redirectLink: "https://www.coursera.org/certificate-link",
    },
    {
      name: "Learning Python",
      organization: "LinkedIn",
      issueDate: "Jun 2021",
      orgImg: Linkedin,
      redirectLink: "https://www.linkedin.com/certificate-link",
    },
    {
      name: "Programming for Everybody (Getting Started with Python)",
      organization: "Coursera",
      issueDate: "Jun 2021",
      orgImg: Coursera,
      redirectLink: "https://www.coursera.org/certificate-link",
    },
    {
      name: "What is Data Science?",
      organization: "Coursera",
      issueDate: "Jun 2021",
      orgImg: Coursera,
      redirectLink: "https://www.coursera.org/certificate-link",
    },
    {
      name: "Core Python - Getting Started",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink: "https://www.pluralsight.com/certificate-link",
    },
    {
      name: "Introduction to SQL",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink: "https://www.pluralsight.com/certificate-link",
    },
    {
      name: "Practical Python for Beginners",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink: "https://www.pluralsight.com/certificate-link",
    },
    {
      name: "Python - Big Picture",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink: "https://www.pluralsight.com/certificate-link",
    },
    {
      name: "Responsive Web Design",
      organization: "freeCodeCamp",
      issueDate: "Apr 2021",
      orgImg: FreeCodeCamp,
      redirectLink: "https://www.freecodecamp.org/certificate-link",
    },
  ];


  const certificateSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <ContentWrapper>
      <Wrapper>
        <TopHeading title="Experience" />
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 ">
          {experience.map((exp) => (
            <div key={exp.id} className="group z-10">
              <div className="dark:bg-[#1f1f1f] rounded-lg text-start min-h-[300px] p-10  flex items-start justify-center flex-col relative cursor-pointer overflow-hidden">
                <img
                  src={exp.imgSrc}
                  style={{
                    backgroundImage: `url(${exp.imgSrc})`,
                    opacity: 0.30,
                  }}
                  alt={exp.name}
                  className="mx-auto mb-4 size-[100px] object-contain absolute rounded-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
                {/* <img
                  src={exp.imgSrc}
                  className="size-[100px] mx-auto rounded-full"
                  alt=""
                /> */}
                <h3 className="font-bold uppercase text-lg  text-[#a37eff] mt-7">
                  {exp.name}
                </h3>
                <p className="text-md font-semibold text-white">
                  {exp.position}
                </p>
                <p className="text-sm text-white">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="text-sm text-white leading-6 mt-4">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>


      <Wrapper>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className="flex items-center justify-start h-full flex-wrap">
              <img className="w-[150px]  mt-5 mr-5" src={Badge1} alt="" />
              <img className="w-[150px]  mt-5 mr-5" src={Badge2} alt="" />
              <img className="w-[150px]  mt-5 mr-5" src={Badge3} alt="" />
              <img className="w-[150px]  mt-5 mr-5" src={Badge4} alt="" />
            </div>
          </div>
          <div className="col-span-1">
            <div className=" flex items-center justify-center h-full flex-col">
              <h1 className="text-center text-white font-extrabold uppercase text-9xl mt-8">About</h1>
              <p className="text-white text-center mt-5"> With extensive experience in Elementor and WooCommerce, I ensure
                that every website is designed to provide a seamless user
                experience, As a seasoned WordPress developer, I specialize in
                crafting custom websites and building dynamic plugins tailored to
                the unique needs of businesses.</p>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="flex items-center justify-end  h-full flex-wrap">
              <img className="w-[150px]  mt-5 ml-5" src={Badge5} alt="" />
              <img className="w-[150px]  mt-5 ml-5" src={Badge6} alt="" />
              <img className="w-[150px]  mt-5 ml-5" src={Badge7} alt="" />
              <img className="w-[150px]  mt-5 ml-5" src={Badge8} alt="" />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper classes="mt-8">
        <Slider {...certificateSlider} className="">
          {certificates.map((certificate, index) => {
            return (
              <div className="px-2 mt-4">
                <div key={index} className={`relative min-h-[250px] flex flex-col items-start  justify-start  p-5 ${index % 2 === 0 ? "bg-[#1f1f1f]" : "bg-[#1f1f1fa2]"}`}>
                  <img src={certificate.orgImg}
                    className="size-16 rounded-full mb-5"
                  // style={{ backgroundImage: `url(${certificate.orgImg})`, opacity: 0.20, }}
                  // className="mx-auto mb-4 size-[60px] object-contain absolute rounded-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                  />
                  <p className="text-base font-bold text-white mt-3">{certificate.name}</p>
                  {/* <p className="font-semibold text-xs text-gray-300">{certificate.organization}</p> */}
                  <p className="text-sm text-gray-300 mt-2">{certificate.issueDate}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </Wrapper >

      <Wrapper classes="z-10 bg-gradient-to-r from-[#0f0f0f] via-[#111111] to-[#0f0f0f] transition-all relative py-6">
        <div className="grid grid-cols-12 gap-12 text-white ">
          <div className="col-span-7 mt-10 z-10">
            {/* <div className="relative flex items-start flex-col py-4 ">
              <h2 className="text-white text-2xl uppercase font-bold">
                Certificates
              </h2>
              <span className="w-[20%] bg-[#ef4444] mt-3 h-[3px]"></span>
            </div> */}
            {/* <div className="h-[500px] overflow-y-auto rounded-lg shadow-inner	">
              {certificates.map((certificate, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-row items-center p-[0.6rem] ${index % 2 === 0 ? "bg-[#1f1f1f]" : "bg-[#1f1f1fa2]"
                      }`}
                  >
                    <img src={certificate.orgImg} className="w-[50px]" alt="" />
                    <div className="flex items-center justify-between w-full">
                      <div className="flex mx-4 flex-col">
                        <p className="text-sm">{certificate.name}</p>
                        <p className="font-semibold text-xs text-gray-300">
                          {certificate.organization}
                        </p>
                        <div className="text-xs text-gray-300">
                          {certificate.issueDate} Credentials
                        </div>
                      </div>
                      <div className="mr-6 border-[white] border-2 p-2 rounded-full">
                        <MdArrowForwardIos size={14} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
          {/* <div className="col-span-5 mt-10">
            <div className="relative flex items-start flex-col py-4">
              <h2 className="text-white text-2xl uppercase font-bold">
                Education
              </h2>
              <span className="w-[20%] bg-[#ef4444] mt-3 h-[3px]"></span>
            </div>
            <p className="mt-4 leading-8">
              With extensive experience in Elementor and WooCommerce, I ensure
              that every website is designed to provide a seamless user
              experience, As a seasoned WordPress developer, I specialize in
              crafting custom websites and building dynamic plugins tailored to
              the unique needs of businesses.{" "}
            </p>

            <div className="relative flex items-start flex-col py-4">
              <h2 className="text-white text-2xl uppercase font-bold">
                Credly Badges
              </h2>
              <span className="w-[20%] bg-[#ef4444] mt-3 h-[3px]"></span>
            </div>
            <div className="flex flex-wrap justify-start">
              <img className="w-[90px]  mt-5 mr-5" src={Badge1} alt="" />
              <img className="w-[90px]  mt-5 mr-5" src={Badge2} alt="" />
              <img className="w-[90px]  mt-5 mr-5" src={Badge3} alt="" />
              <img className="w-[90px]  mt-5 mr-5" src={Badge4} alt="" />
              <img className="w-[90px]  mt-5 mr-5" src={Badge5} alt="" />
              <img className="w-[90px]  mt-5 mr-5" src={Badge6} alt="" />
              <img className="w-[90px]  mt-5 mr-5" src={Badge7} alt="" />
              <img className="w-[90px]  mt-5 mr-5" src={Badge8} alt="" />
            </div>
          </div> */}
        </div>
      </Wrapper>
    </ContentWrapper >
  );
};
