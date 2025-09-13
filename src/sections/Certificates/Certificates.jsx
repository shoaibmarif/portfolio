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
import LogoLoop from "../../components/LogoLoop.jsx"
import Hackerrank from "../../../public/images/certificates//Hackerrank.png"

export const Certificates = () => {
  const sliderRef = useRef(null);

  
  const certificatesSet1 = [
    {
      name: "React: Design Patterns",
      organization: "LinkedIn",
      issueDate: "Jan 2025",
      orgImg: Linkedin,
      redirectLink:
        "https://www.linkedin.com/learning/certificates/edcfece4ab4fbafb9fa39d9bd2869d951d9bf539ecfe0c61665a5b4f7f44c070?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWbfn80nrS56VaydWBZkC6Q%3D%3D",
    },
    
    {
      name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      organization: "Udemy",
      issueDate: "Dec 2022",
      orgImg: Udemy,
      redirectLink:
        "https://www.udemy.com/certificate/UC-b7058563-3a44-483f-9f5a-b0389e98497a/",
    },
    {
      name: "Frontend Developer (React)",
      organization: "Hackerrank",
      issueDate: "Oct 2024",
      orgImg: Hackerrank,
      redirectLink:
        "https://www.hackerrank.com/certificates/faac7573611f",
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
      name: "Software Engineer",
      organization: "Hackerrank",
      issueDate: "Dec 2022",
      orgImg: Hackerrank,
      redirectLink:
        "https://www.hackerrank.com/certificates/d6856351e2d1",
    },
        
        {
      name: "Javascript (Intermediate)",
      organization: "Hackerrank",
      issueDate: "Oct 2024",
      orgImg: Hackerrank,
      redirectLink:
        "https://www.hackerrank.com/certificates/6e5f8d179c58",
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
      name: "Tools for Data Science",
      organization: "Coursera",
      issueDate: "Jul 2021",
      orgImg: Coursera,
      redirectLink:
        "https://www.credly.com/badges/bf4a435f-022e-4584-8f47-f23ca5c3ac46?source=linked_in_profile",
    },
    {
      name: "Learning Python",
      organization: "`LinkedIn`",
      issueDate: "Jun 2021",
      orgImg: Linkedin,
      redirectLink:
        "https://www.linkedin.com/learning/certificates/be82e9f8a6cf52cafdd969a0dc4be0660a2c44caad59771a52fb7419184f0b20?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BEC0XkRX3TkqUEP%2BQIWOLaQ%3D%3D",
    },
        {
      name: "Javascript (Basic)",
      organization: "Hackerrank",
      issueDate: "Oct 2024",
      orgImg: Hackerrank,
      redirectLink:
        "https://www.hackerrank.com/certificates/e0b89f5ecea5",
    },
        {
      name: "Problem Solving (Intermediate)",
      organization: "Hackerrank",
      issueDate: "Oct 2024",
      orgImg: Hackerrank,
      redirectLink:
        "http://hackerrank.com/certificates/6eb7e81d29c1",
    },
        {
      name: "Problem Solving (Basic)",
      organization: "Hackerrank",
      issueDate: "Oct 2024",
      orgImg: Hackerrank,
      redirectLink:
        "https://www.hackerrank.com/certificates/8656a6f97c73",
    },
  
  ];

  const certificatesSet2 = [
          {
      name: "Rest API (Intermediate)",
      organization: "Hackerrank",
      issueDate: "Oct 2024",
      orgImg: Hackerrank,
      redirectLink:
        "https://www.hackerrank.com/certificates/cd4f0c1cd564",
    },
        {
      name: "SQL (Basic)",
      organization: "Hackerrank",
      issueDate: "Oct 2024",
      orgImg: Hackerrank,
      redirectLink:
        "https://www.hackerrank.com/certificates/00e30032895a",
    },
        {
      name: "Software Engineer Intern",
      organization: "Hackerrank",
      issueDate: "Oct 2024",
      orgImg: Hackerrank,
      redirectLink:
        "https://www.hackerrank.com/certificates/7988e86103fd",
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
      name: "Data Science Orientation",
      organization: "Coursera",
      issueDate: "Jul 2021",
      orgImg: Coursera,
      redirectLink:
        "https://www.credly.com/badges/c5280c5c-6a6f-4139-90da-fc67f0d687d7?source=linked_in_profile",
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
  ]

  const certificatesData1 = [
    ...certificatesSet1.map((cert, index) => ({ node: 
    <CertificateCard
      key={index}
      name={cert.name}
      organization={cert.organization}
      issueDate={cert.issueDate}
      orgImg={cert.orgImg}
      redirectLink={cert.redirectLink}
    />})),
  ];

    const certificatesData2 = [
    ...certificatesSet2.map((cert, index) => ({ node: 
    <CertificateCard
      key={index}
      name={cert.name}
      organization={cert.organization}
      issueDate={cert.issueDate}
      orgImg={cert.orgImg}
      redirectLink={cert.redirectLink}
    />})),
  ];


  return (
    <ContentWrapper classes="relative bg-[#2b2b2b] pt-8 pb-16 ">
       <TopHeading title="Certificates" />
      <div style={{    position: 'relative', overflow: 'auto' }} className="rounded-lg  flex items-center justify-center z-10">
        <LogoLoop
          logos={certificatesData1}
          speed={120}
          direction="left"
          gap={0}
          pauseOnHover={true}
        />
      </div>
        <div style={{   position: 'relative', overflow: 'hidden' }} className="z-10 rounded-lg flex items-center justify-center">
        <LogoLoop
          logos={certificatesData2}
          speed={120}
          direction="right"
          gap={0}
          pauseOnHover={true}
          // scaleOnHover
        />
      </div>
      <div className="w-full absolute -bottom-1 left-0 z-[1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1b1b1b" fill-opacity="1" d="M0,160L48,186.7C96,213,192,267,288,261.3C384,256,480,192,576,176C672,160,768,192,864,224C960,256,1056,288,1152,298.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
                  </div>
    </ContentWrapper>
  );
};


export const CertificateCard = ({name,
  organization,
  issueDate,
  orgImg,
  redirectLink
}) => {
  return (
  <div className="w-[300px]">
      <div className="px-2 py-2">
        <Link
          to={redirectLink}
          target="_blank"
          className="group/card z-[50] relative flex  hover:bg-[#962cff] flex-col justify-center items-center block rounded-lg min-h-[280px] px-7 shadow-md hover:shadow-lg transition-all cursor-pointer bg-[#1f1f1f] overflow-hidden"
        >
          <img
            src={orgImg}
            alt=""
            className="rounded-full h-[70px] w-[70px] mb-3 opacity-40 transition-all group-hover/card:opacity-100"
          />
          <p className="text-base text-primary-dark font-semibold mt-2 group-hover/card:text-[#1b1b1b]">{issueDate}</p>
          <p className="text-base font-semibold text-gray-300 text-center mt-1 capitalize">
            {name}
          </p>
        </Link>
      </div>
      
    </div>
  )
}