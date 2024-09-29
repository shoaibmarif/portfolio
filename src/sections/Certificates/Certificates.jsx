import React from "react";
import Slider from "react-slick";
import { Wrapper } from "../../shared/Wrapper";
import FreeCodeCamp from "../../../public/images/certificates/freecodecamp.jpg";
import Coursera from "../../../public/images/certificates/coursera.jpg";
import Udemy from "../../../public/images/certificates/udemy.jpg";
import Ibm from "../../../public/images/certificates/ibm.jpg";
import Linkedin from "../../../public/images/certificates/linkedin.jpg";
import Pluralsight from "../../../public/images/certificates/pluralsight.png";
import { TopHeading } from "../../shared/TopHeading";
import { MdArrowForwardIos } from "react-icons/md";

export const Certificates = () =>{
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
    return(
        <Wrapper classes="mt-8">
        <TopHeading title={"Certifications"}/>
        <Slider {...certificateSlider} className="">
          {certificates.map((certificate, index) => {
            return (
              <div className="px-2 mt-4">
                <div key={index} className={`relative min-h-[250px] flex flex-col items-start  justify-start  p-5 ${index % 2 === 0 ? "bg-[#1f1f1f]" : "bg-[#1f1f1fa2]"}`}>
                  <img src={certificate.orgImg}
                    className="size-16 rounded-full mb-5"
                  />
                  <p className="text-white bg-gray-500 rounded-md px-4 absolute right-3 text-xs py-1 uppercase font-semibold">{certificate.organization}</p>
                  <p className="text-base font-bold text-white mt-3">{certificate.name}</p>
                  <p className="text-sm text-gray-300 mt-2">{certificate.issueDate}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </Wrapper >

    )
}