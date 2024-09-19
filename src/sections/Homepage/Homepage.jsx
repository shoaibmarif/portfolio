import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import Typewriter from "typewriter-effect";
import { ContentWrapper } from "../../shared/ContentWrapper";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import CountUp from "react-countup";
export const Homepage = () => {
  return (
    <React.Fragment>
      
      <ContentWrapper>
        
        <div className="relative h-full w-full">
  
          <Wrapper classes="text-white flex items-center h-[100vh] justify-center flex-col">
            <p
              className="text-start font-semibold tracking-[4px] text-xl"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              Hi, I'm
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              className="font-extrabold  uppercase leading-[6rem] text-[6rem]  inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-[#E4405F] text-transparent bg-clip-text "
            >
              Shoaib Arif
            </h1>
            <h2 className="font-bold text-[3rem]  transition-all dark:text-white text-black" data-aos="fade-up"
              data-aos-duration="800">
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

            <p className="max-w-[700px] text-center mt-5 text-black dark:text-white transition-all" data-aos="fade-up"
              data-aos-duration="900">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people I break down
              complex user experinece problems to create integritiy focussed
              solutions that connect billions of people
            </p>

            {/* Social Icons  */}

            <div className="absolute top-1/2 translate-y-[-70%] left-14 flex flex-col items-start">
              <span data-aos="fade-right" data-aos-duration="200">
                <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300 bg-[#1877F2]">
                  <FaFacebookF className="text-white " />
                </span>
              </span>
              <span data-aos="fade-right" data-aos-duration="400">
                <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300  bg-[#0A66C2]">
                  <FaLinkedinIn className="text-white " />
                </span>
              </span>
              <span data-aos="fade-right" data-aos-duration="600">
                <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300  dark:bg-[#fff] bg-[#000]">
                  <FaGithub className="dark:text-black text-white  " />
                </span>
              </span>
              <span data-aos="fade-right" data-aos-duration="800">
                <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300  bg-[#1DA1F2]">
                  <FaTwitter className="text-white" />
                </span>
              </span>
              <span data-aos="fade-right" data-aos-duration="1000">
                <span className="mt-3 block rounded-full p-2 cursor-pointer text-xl hover:text-3xl transition-all duration-300  bg-[#E4405F]">
                  <FaInstagram className="text-white" />
                </span>
              </span>
            </div>
            <div className="mt-10">
              <button 
               data-aos="fade-right" data-aos-duration="1000"
                className="relative mr-4 border-2 border-[#8524ac] text-white min-w-48 px-14 py-4 rounded-full font-semibold
                after:absolute after:w-0 after:h-full transition-all after:duration-300 after:transition-all hover:after:w-[105%] hover:after:h-[105%] after:bg-[#9d4ebd] after:left-[-1%] after:top-[-1%] after:-z-10 overflow-hidden after:rounded-full 
                ">
                Hire Me
              </button>

              <button 
              data-aos="fade-left" data-aos-duration="1000"
                className="relative mr-4 border-2 border-[#8524ac] text-white min-w-48 px-14 py-4 rounded-full font-semibold
                after:absolute after:w-0 after:h-full transition-all after:duration-300 after:transition-all hover:after:w-[105%] hover:after:h-[105%] after:bg-[#9d4ebd] after:left-[-1%] after:top-[-1%] after:-z-10 overflow-hidden after:rounded-full 
                ">Resume
              </button>
            </div>
          </Wrapper>
          <Wrapper classes="absolute bottom-0  left-1/2 translate-x-[-50%]  ">
            <div className="flex items-center justify-between px-24 bg-[#2e0b3c] py-10 rounded-xl  shadow-[#26012b] shadow-inner bg-gradient-to-r dark:bg-[#150e24] dark:from-[#26012b] dark:via-[#0f0720] dark:to-[#26012b] transition-all  from-red-50 to-orange-50  ">
              <div className="text-white flex items-center flex-col ">
                <span className="font-extrabold text-5xl mb-3 ">
                  <CountUp
                    scrollSpyOnce={true}
                    enableScrollSpy={true}
                    end={4}
                  />
                  +
                </span>
                Experience
              </div>
              <span className="bg-slate-200 h-24 w-[2px]"></span>
              <div className="text-white flex items-center flex-col ">
                <span className="font-extrabold text-5xl mb-3  ">
                  <CountUp
                    scrollSpyOnce={true}
                    enableScrollSpy={true}
                    end={70}
                  />
                  +
                </span>
                Project Completed
              </div>
              <span className="bg-slate-200 h-24 w-[2px]"></span>
              <div className="text-white flex items-center flex-col ">
                <span className="font-extrabold text-5xl mb-3 ">
                  <CountUp
                    scrollSpyOnce={true}
                    enableScrollSpy={true}
                    end={27}
                  />
                  +
                </span>
                Happy Clients
              </div>
              <span className="bg-slate-200 h-24 w-[2px]"></span>
              <div className="text-white flex items-center flex-col ">
                <span className="font-extrabold text-5xl mb-3 ">
                  <CountUp
                    scrollSpyOnce={true}
                    enableScrollSpy={true}
                    end={50}
                  />
                  +
                </span>{" "}
                Open Source
              </div>
            </div>
          </Wrapper>
        </div>
      </ContentWrapper>
    </React.Fragment>
  );
};

