import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import Typewriter from "typewriter-effect";
import { ContentWrapper } from "../../shared/ContentWrapper"


import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import CountUp from 'react-countup';
export const Homepage = () => {
  return (
    <React.Fragment>
      <ContentWrapper>
        <div className="relative h-full  w-full" >
          <Wrapper classes="text-white flex items-center h-[100vh] justify-center flex-col" >
            <p className="text-start font-semibold tracking-[4px] text-xl">Hi, I'm</p>
            <h1 data-aos="fade-up" className="font-extrabold  uppercase leading-[6rem] text-[6rem]  inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-[#E4405F] text-transparent bg-clip-text ">Shoaib Arif
            </h1>
            <h2 className="font-bold text-[3rem]  transition-all text-stroke" >
              <Typewriter
                options={{
                  strings: [
                    `Frontend Developer`,
                    "React Developer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 1500,
                  cursorClassName:
                    " bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text",
                }}
              />
            </h2>

            <p className="max-w-[700px] text-center mt-5 text-black dark:text-white transition-all">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>

            <div className="absolute top-1/2 translate-y-[-70%] left-14 flex flex-col items-start">
              <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300 bg-[#1877F2]">
                <FaFacebookF className="text-white " />
              </span>
              <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300  bg-[#0A66C2]">
                <FaLinkedinIn className="text-white " />
              </span>
              <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300  bg-[#fff]">
                <FaGithub className="text-black " />
              </span>
              <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300  bg-[#1DA1F2]">
                <FaTwitter className="text-white" />
              </span>
              <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300  bg-[#E4405F]">
                <FaInstagram className="text-white" />
              </span>


            </div>

            <div className="mt-10">
              <button className=" relative min-w-[200px] mr-5 py-4  border-2 border-purple-800  uppercase font-semibold rounded-full 
                after:h-0 after:left-[-20px] hover:after:w-[200%]  hover:after:h-[105%]
               transition-all after:transition-all hover:after:transition-all overflow-hidden
               after:rounded-full  after:-z-10  after:bg-purple-800 after:absolute  after:top-0 " >
                Hire Me
              </button>
              <button className="min-w-[200px]  py-4  bg-[#c531ff]  rounded-full  ">
                Download Resume
              </button>
            </div>

          </Wrapper>
          <Wrapper classes="absolute bottom-0  left-1/2 translate-x-[-50%] ">
            <div className="flex items-center justify-between px-24 bg-[#2e0b3c] py-10 rounded-2xl  shadow-purple-800 shadow-inner  ">
              <div className="text-white flex items-center flex-col "><span className="font-extrabold text-5xl mb-3 "><CountUp scrollSpyOnce={true} enableScrollSpy={true} end={4} />+</span>Experience</div>
              <span className="bg-slate-200 h-24 w-[2px]"></span>
              <div className="text-white flex items-center flex-col "><span className="font-extrabold text-5xl mb-3  "><CountUp scrollSpyOnce={true} enableScrollSpy={true} end={70} />+</span>Project Completed</div>
              <span className="bg-slate-200 h-24 w-[2px]"></span>
              <div className="text-white flex items-center flex-col "><span className="font-extrabold text-5xl mb-3 "><CountUp scrollSpyOnce={true} enableScrollSpy={true} end={27} />+</span>Happy Clients</div>
              <span className="bg-slate-200 h-24 w-[2px]"></span>
              <div className="text-white flex items-center flex-col "><span className="font-extrabold text-5xl mb-3 "><CountUp scrollSpyOnce={true} enableScrollSpy={true} end={50} />+</span> Open Source</div>
            </div>
          </Wrapper>

        </div>

      </ContentWrapper>
    </React.Fragment >
  );
};

