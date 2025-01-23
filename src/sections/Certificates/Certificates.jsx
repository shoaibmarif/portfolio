import React, { useRef } from "react";
import Slider from "react-slick";
import FreeCodeCamp from "../../../public/images/certificates/freecodecamp.jpg";
import Coursera from "../../../public/images/certificates/coursera.jpg";
import Udemy from "../../../public/images/certificates/udemy.jpg";
import Ibm from "../../../public/images/certificates/ibm.jpg";
import Linkedin from "../../../public/images/certificates/linkedin.jpg";
import Pluralsight from "../../../public/images/certificates/pluralsight.png";
import { TopHeading } from "../../shared/TopHeading";
import { certifcatesSettings } from "../../utils/SlickSettings.js";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export const Certificates = () => {
  const sliderRef = useRef(null);

  const certificates = [
    {
      name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      organization: "Udemy",
      issueDate: "Dec 2022",
      orgImg: Udemy,
      redirectLink:
        "https://www.udemy.com/certificate/UC-b7058563-3a44-483f-9f5a-b0389e98497a/",
    },
    {
      name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      organization: "Udemy",
      issueDate: "Dec 2022",
      orgImg: Udemy,
      redirectLink:
        "https://www.udemy.com/certificate/UC-749bacb5-14be-4a01-88a2-78b54071503c/",
    },
    {
      name: "Data Science Foundations - Level 1",
      organization: "IBM",
      issueDate: "Jul 2021",
      orgImg: Ibm,
      redirectLink:
        "https://www.credly.com/badges/3633aaed-74e8-45e1-b643-3e044b3e8336?source=linked_in_profile",
    },
    {
      name: "Data Science Orientation",
      organization: "Coursera",
      issueDate: "Jul 2021",
      orgImg: Coursera,
      redirectLink:
        "https://www.credly.com/badges/c5280c5c-6a6f-4139-90da-fc67f0d687d7?source=linked_in_profile",
    },
    {
      name: "Tools for Data Science",
      organization: "Coursera",
      issueDate: "Jul 2021",
      orgImg: Coursera,
      redirectLink:
        "https://www.credly.com/badges/bf4a435f-022e-4584-8f47-f23ca5c3ac46?source=linked_in_profile",
    },
    {
      name: "Learning Python",
      organization: "LinkedIn",
      issueDate: "Jun 2021",
      orgImg: Linkedin,
      redirectLink:
        "https://www.linkedin.com/learning/certificates/be82e9f8a6cf52cafdd969a0dc4be0660a2c44caad59771a52fb7419184f0b20?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BEC0XkRX3TkqUEP%2BQIWOLaQ%3D%3D",
    },
    {
      name: "Programming for Everybody (Getting Started with Python)",
      organization: "Coursera",
      issueDate: "Jun 2021",
      orgImg: Coursera,
      redirectLink:
        "https://www.coursera.org/account/accomplishments/verify/DUZWEV3XNZH6?utm_source=link&utm_medium=certificate&utm_content=lih&utm_campaign=card_button",
    },
    {
      name: "What is Data Science?",
      organization: "Coursera",
      issueDate: "Jun 2021",
      orgImg: Coursera,
      redirectLink:
        "https://www.coursera.org/account/accomplishments/verify/6WKP2F5KW3CS?utm_source=link&utm_medium=certificate&utm_content=lih&utm_campaign=card_button",
    },
    {
      name: "Core Python - Getting Started",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink:
        "https://drive.google.com/file/d/1IJTA8SGpU9PVQES-bu3_CI7pXATq540w/view",
    },
    {
      name: "Introduction to SQL",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink:
        "https://drive.google.com/file/d/1BZygc9k6m5GjlF367rLWiwzmdK5aLDrN/view",
    },
    {
      name: "Practical Python for Beginners",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink:
        "https://drive.google.com/file/d/1D90LhfVFVGB0jYnmY2COXOy1J-61JFW1/view",
    },
    {
      name: "Python - Big Picture",
      organization: "Pluralsight",
      issueDate: "Apr 2021",
      orgImg: Pluralsight,
      redirectLink:
        "https://drive.google.com/file/d/1jMA6CRWZZ0K-HA5HfH4lQEYbAgpPWAxd/view",
    },
    {
      name: "Responsive Web Design",
      organization: "freeCodeCamp",
      issueDate: "Apr 2021",
      orgImg: FreeCodeCamp,
      redirectLink:
        "https://www.freecodecamp.org/certification/shoaibarif/responsive-web-design",
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
    <ContentWrapper
      classes={
        "w-full py-16 bg-gradient-to-r from-[#161616] via-[#222] dark:to-[#161616]  "
      }
      innerClass="relative"
    >
      {/* <div className="">
        <span
          className="text-primary-dark bg-[#ffffff] absolute left-2 lg:left-0 3xl:left-[-0.5rem] top-[58%] lg:top-[53%] z-50  rounded-full p-3 cursor-pointer transition-all hover:bg-primary-dark hover:text-white"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <HiArrowLongLeft className="size-[20px] lg:size-[40px]" />
        </span>
        <span
          className="text-primary-dark bg-white absolute right-2 lg:right-0  3xl:right-[-0.5rem] top-[58%] lg:top-[53%] z-50  rounded-full p-3 cursor-pointer transition-all hover:bg-primary-dark hover:text-white"
          onClick={() => sliderRef.current.slickNext()}
        >
          <HiArrowLongRight className="size-[20px] lg:size-[40px]" />
        </span>
      </div> */}
      <TopHeading title={"Certifications"} />
      <Slider {...certifcatesSettings} ref={sliderRef}>
        {certificates.map((certificate, index) => {
          return (
            <div
              className="px-2 py-2  mt-4 relative"
              data-aos="fade-up"
              key={index}
            >
              <Link
                to={certificate.redirectLink}
                target="_blank"
                className={`block group rounded-lg relative min-h-[300px] p-7 shadow-md  hover:shadow-lg transition-all cursor-pointer  pt-8 bg-[#1f1f1f] overflow-hidden`}
              >
                <img
                  src={certificate.orgImg}
                  className="rounded-full mx-auto w-[100px]"
                  alt=""
                />
                <p className="text-sm text-primary-dark  font-semibold mt-8">
                  {certificate.issueDate}
                </p>
                <p className="text-lg font-semibold text-gray-300 mt-0 ">
                  {certificate.name}
                </p>
                <div className="text-white absolute top-[-60px] right-[-60px] bg-primary-dark group-hover:bg-white group-hover:text-primary-dark transition-all  size-[120px] rounded-full ">
                  <RiArrowRightDoubleFill
                    className="absolute top-[60%] group-hover:rotate-[-45deg] transition-all left-[20%] z-[1]"
                    size={"24px"}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
      <div className="absolute left-1/2 translate-x-[-50%] bottom-2 flex items-center">
        <span className="text-white border-2 rounded-full  mr-1  size-[60px] flex items-center justify-center border-white  ">
          <GoArrowLeft size={"24px"} />
        </span>
        <span className="text-white border-2 rounded-full  ml-1 size-[60px] flex items-center justify-center border-white hover:bg-white transition-all hover:text-black  ">
          <GoArrowRight size={"24px"} />
        </span>
      </div>
    </ContentWrapper>
  );
};
