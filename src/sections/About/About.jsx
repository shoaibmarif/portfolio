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
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";




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
        <div className="text-center  uppercase pt-8 pb-20 flex flex-col items-center justify-center text-white relative" data-aos="fade-up">
          <h2 className="text-5xl  font-bold  " >Professional Experience</h2>
          <span className="w-64 bg-[#ef4444] absolute top-[60%] left-[50%] translate-x-[-50%] h-[3px]"></span>
        </div>
        <Slider {...settings} className="">
          {experience.map((exp) => (
            <div key={exp.id} className="px-4 group ">
              <div className="bg-white shadow-md rounded-lg p-4  text-start min-h-[250px] flex items-start justify-center flex-col relative cursor-pointer overflow-hidden">
                <img src={exp.imgSrc}
                  style={{
                    backgroundImage: `url(${exp.imgSrc})`,
                    opacity: 0.15,
                  }}
                  alt={exp.name} className="mx-auto mb-4  size-[100px] object-contain absolute rounded-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
                <div className="absolute size-[100px] right-[-50px] top-[-50px] border-[1.5rem]  rounded-full opacity-30 border-[#a37eff] group-hover:size-[120px] transition-all duration-500"></div>
                <div className="absolute size-[100px] bottom-[-50px] left-[-50px] border-[1.5rem]  rounded-full opacity-30 border-[#a37eff] group-hover:size-[120px] transition-all duration-500"></div>

                <h3 className="font-bold uppercase text-lg  text-[#a37eff]">{exp.name}</h3>
                <p className="text-md font-semibold text-gray-700 ">{exp.position}</p>
                <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</p>
                <p className="text-sm text-gray-600 mt-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="text-center  uppercase pt-20 pb-20 flex flex-col items-center justify-center text-white relative" data-aos="fade-up">
          <h2 className="text-5xl  font-bold  " >Education & Certificates</h2>
          <span className="w-64 bg-[#ef4444] absolute top-[70%] left-[50%] translate-x-[-50%] h-[3px]"></span>
        </div>

        <div className="grid grid-cols-12 gap-8 text-white ">
          <div className="col-span-6">
            <h2 className="text-3xl uppercase font-bold">About</h2>
            <p className="mt-8">As a seasoned WordPress developer, I specialize in crafting custom websites and building dynamic plugins tailored to the unique needs of businesses. </p>
            <p className="mt-8">With extensive experience in Elementor and WooCommerce, I ensure that every website is designed to provide a seamless user experience, responsive across all devices. My development approach focuses on clean, efficient code, using PHP, HTML, CSS, and JavaScript to create high-performing sites. Whether it's customizing Elementor widgets or integrating complex WooCommerce functionalities, my goal is to enhance both user interaction and business operations.</p>

            <h2 className="text-3xl uppercase font-bold mt-5">Credly badges</h2>
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


