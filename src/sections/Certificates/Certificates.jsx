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



  return (
    <ContentWrapper innerClass="relative">
      <div className="">
        <span
          className="text-white absolute left-0 top-[55%] z-10 border-2 border-white rounded-full p-3 cursor-pointer transition-all hover:bg-white hover:text-black"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <HiArrowLongLeft size={34} />
        </span>
        <span
          className="text-white absolute right-0 top-[55%] z-10 border-2 border-white rounded-full p-3 cursor-pointer transition-all hover:bg-white hover:text-black"
          onClick={() => sliderRef.current.slickNext()}
        >
          <HiArrowLongRight size={34} />
        </span>
      </div>
      <TopHeading title={"Certifications"} />
      <Slider {...certifcatesSettings} ref={sliderRef}>
        {certificates.map((certificate, index) => {
          return (
            <div className="px-2 mt-4" key={index}>
              <div
                className={`rounded-lg relative min-h-[250px] p-5 bg-[#1f1f1f]`}>
                <div className="z-10 p-5 w-full bg-opacity-50 rounded-lg">
                  <div style={{
                    backgroundImage: `url(${certificate.orgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.15,
                  }} className="absolute rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-24"></div>
                  <div>
                    <p className="text-base font-bold text-white mt-3">
                      {certificate.name}
                    </p>
                    <p className="text-sm text-gray-300 mt-2">
                      {certificate.issueDate}
                    </p>
                  </div>
                  <div className="text-white absolute bottom-6 underline flex items-center justify-between w-full"><p>Credentials</p><FaLongArrowAltRight />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </ContentWrapper>

  )
}