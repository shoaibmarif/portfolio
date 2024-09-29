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
import { Certificates } from "../Certificates/Certificates";

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

  return (
    <ContentWrapper>
      <Wrapper>
        <div>
          <div class="flex gap-x-3">
            <div class="w-16 text-end">
              <span class="text-xs text-gray-500 dark:text-neutral-400">
                My Period
              </span>
            </div>
            <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div class="relative z-10 size-7 flex justify-center items-center">
                <div class="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
              </div>
            </div>
            <div class="grow pt-0.5 pb-8 bg-purple-700 max-w-80 rounded-2xl ">
              <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <svg
                  class="shrink-0 size-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" x2="8" y1="13" y2="13"></line>
                  <line x1="16" x2="8" y1="17" y2="17"></line>
                  <line x1="10" x2="8" y1="9" y2="9"></line>
                </svg>
                Software Engineer
              </h3>
              <button
                type="button"
                class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <img
                  class="shrink-0 size-4 rounded-full"
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Avatar"
                />
                Daraz
              </button>
              <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                little bit information about me expeirenc
              </p>
            </div>
          </div>
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
              <h1 className="text-center text-white font-extrabold uppercase text-9xl mt-8">
                About
              </h1>
              <p className="text-white text-center mt-5">
                {" "}
                With extensive experience in Elementor and WooCommerce, I ensure
                that every website is designed to provide a seamless user
                experience, As a seasoned WordPress developer, I specialize in
                crafting custom websites and building dynamic plugins tailored
                to the unique needs of businesses.
              </p>
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
      <Certificates />
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
    </ContentWrapper>
  );
};
