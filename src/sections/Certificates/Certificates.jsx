import React, { useRef } from "react";
import Slider from "react-slick";
import FreeCodeCamp from "../../../public/images/certificates/freecodecamp.jpg";
import Coursera from "../../../public/images/certificates/coursera.jpg";
import Udemy from "../../../public/images/certificates/udemy.jpg";
import Ibm from "../../../public/images/certificates/ibm.jpg";
import Linkedin from "../../../public/images/certificates/linkedin.jpg";
import Pluralsight from "../../../public/images/certificates/pluralsight.png";
import { TopHeading } from "../../shared/TopHeading";
import { MdArrowForwardIos } from "react-icons/md";
import { certifcatesSettings } from "../../utils/SlickSettings.js";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx"
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export const Certificates = () => {
  const sliderRef = useRef(null);

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
  ];

  return (
    <ContentWrapper classes={"w-full py-16 bg-gradient-to-r from-[#161616] via-[#222] dark:to-[#161616]  "} innerClass="relative">
      <div className="">
        <span
          className="text-black bg-white absolute left-0 top-[55%] z-10  rounded-full p-3 cursor-pointer transition-all hover:bg-primary-dark hover:text-white"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <HiArrowLongLeft size={34} />
        </span>
        <span
          className="text-black bg-white absolute right-0 top-[55%] z-10  rounded-full p-3 cursor-pointer transition-all hover:bg-primary-dark hover:text-white"
          onClick={() => sliderRef.current.slickNext()}
        >
          <HiArrowLongRight size={34} />
        </span>
      </div>
      <TopHeading title={"Certifications"} />
      <Slider {...certifcatesSettings} ref={sliderRef}>
        {certificates.map((certificate, index) => {
          return (
            <div className="px-2 py-2 mt-4 relative" data-aos="fade-up" key={index}>
              <Link to={certificate.redirectLink} target="_blank" className={`block group rounded-lg relative min-h-[300px] p-5 shadow-[0px_0px_2px_#bfbfbf]  hover:shadow-[0px_0px_7px_#bfbfbf] transition-all cursor-pointer  pt-8 bg-[#1f1f1f] overflow-hidden`} >
                <img src={certificate.orgImg} className="rounded-xl mx-auto size-24" alt="" />
                <p className="text-sm text-primary-dark  font-semibold mt-5">
                  {certificate.issueDate}
                </p>
                <p className="text-lg font-semibold text-white mt-0 ">
                  {certificate.name}
                </p>
                <div className="text-white absolute top-[-60px] right-[-60px] bg-primary-dark group-hover:bg-white group-hover:text-primary-dark transition-all  size-[120px] rounded-full ">
                  <RiArrowRightDoubleFill className="absolute top-[60%] group-hover:rotate-[-45deg] transition-all left-[20%] z-[1]" size={"24px"} />
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </ContentWrapper >

  )
}