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
import Badge1 from "../../../public/images/badges/badge-1.png"
import Badge2 from "../../../public/images/badges/badge-2.png"
import Badge3 from "../../../public/images/badges/badge-3.png"
import Badge4 from "../../../public/images/badges/badge-4.png"
import Badge5 from "../../../public/images/badges/badge-5.png"
import Badge6 from "../../../public/images/badges/badge-6.png"
import Badge7 from "../../../public/images/badges/badge-7.png"
import Badge8 from "../../../public/images/badges/badge-8.png"

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
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <ContentWrapper>
      <Wrapper>
      <div className="text-center  uppercase flex flex-col items-center justify-center pt-5 pb-10 text-white" data-aos="fade-up">
            <h2 className="text-5xl  font-bold text-stroke" >Professional Experience</h2>
        </div>        
      <Slider {...settings}>
          {experience.map((exp) => (
            <div key={exp.id} className="px-4">
              <div className="bg-white shadow-md rounded-lg p-4 text-center">
                <img src={exp.imgSrc} alt={exp.name} className="mx-auto mb-4 w-24 h-24 object-cover rounded-full" />
                <h3 className="font-semibold text-lg mb-2">{exp.name}</h3>
                <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</p>
                <p className="text-sm font-medium text-gray-700">{exp.position}</p>
                <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        
        <div className="text-center  uppercase flex flex-col items-center justify-center pt-5 pb-10 text-white" data-aos="fade-up">
            <h2 className="text-5xl  font-bold text-stroke" >Education & Certifications</h2>
        </div>  

            <div className="grid grid-cols-12 gap-8 text-white">
              <div className="col-span-6">
                I have completed my Backelors in COmputer Science
                <p>I have completed my Backelors in COmputer Science</p>
                <p>I have completed my Backelors in COmputer Science</p>
                <h2>Credly Earn Badges</h2>

              <div className="flex items-center flex-wrap">
                    <img className="size-[100px]" src={Badge1} alt="" />
                    <img className="size-[100px]" src={Badge2} alt="" />
                    <img className="size-[100px]" src={Badge3} alt="" />
                    <img className="size-[100px]" src={Badge4} alt="" />
                    <img className="size-[100px]" src={Badge5} alt="" />
                    <img className="size-[100px]" src={Badge6} alt="" />
                    <img className="size-[100px]" src={Badge7} alt="" />
                    <img className="size-[100px]" src={Badge8} alt="" />
              </div>
              </div>
              <div className="col-span-6">
                <h1>Certificates</h1>
              </div>
            </div>
      </Wrapper>
    </ContentWrapper>
  );
};


const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right w-6 h-6">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left w-6 h-6">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </div>
  );
};