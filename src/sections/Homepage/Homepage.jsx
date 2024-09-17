import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import Typewriter from "typewriter-effect";


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
    <div className="relative h-dvh ">
      <Wrapper classes="text-white flex flex-col items-center justify-center h-full">
          <p className="text-start font-semibold tracking-[4px] text-xl">Hi, I'm</p>
          <h1 data-aos="fade-up" className="font-extrabold uppercase leading-[7rem] text-[7rem] text-white inline-block text-transparent bg-clip-text ">
            Shoaib <span className="">Arif</span>
          </h1>
          <h2 className="font-bold text-[3rem]">
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

          <p className="max-w-[700px] text-center mt-5">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
            <div className="absolute top-1/2 translate-y-[-70%] left-14">
            <span className="mt-3 block rounded-full p-2  border-2 cursor-pointer">
              <FaFacebookF className="text-white text-xl" />
            </span>
            <span className="mt-3 block rounded-full p-2  border-2 cursor-pointer">
              <FaLinkedinIn className="text-white text-xl" />
            </span>
            <span className="mt-3 block rounded-full p-2  border-2 cursor-pointer">
              <FaGithub className="text-white text-xl" />
            </span>
            <span className="mt-3 block rounded-full p-2  border-2 cursor-pointer">
              <FaTwitter className="text-white text-xl" />
            </span>
            <span className="mt-3 block rounded-full p-2  border-2 cursor-pointer">
              <FaInstagram className="text-white text-xl" />
            </span>
          </div>
          
          <div className="mt-10">
            <button className="min-w-[200px] mr-5 py-4  bg-[#c531ff]  rounded-lg">
              Hire US
            </button>
            <button className="min-w-[200px]  py-4  bg-[#c531ff]  rounded-lg ">
              Download Resume
            </button>
          </div>
      </Wrapper>
    </div>
            <Wrapper classes="flex items-center justify-between bg-[#2e0b3c]  py-10 relative">
            <div className="text-white flex items-center flex-col "><span className="font-extrabold text-6xl mb-3 text-stroke"><CountUp scrollSpyOnce={true} enableScrollSpy={true} end={4}/>+</span> Years of Expeirence</div>
            <div className="text-white flex items-center flex-col "><span className="font-extrabold text-6xl mb-3 text-stroke "><CountUp scrollSpyOnce={true} enableScrollSpy={true} end={70}/>+</span> Project Completed</div>
            <div className="text-white flex items-center flex-col "><span className="font-extrabold text-6xl mb-3 text-stroke"><CountUp scrollSpyOnce={true} enableScrollSpy={true} end={27}/>+</span> Happy Clients</div>
            <div className="text-white flex items-center flex-col "><span className="font-extrabold text-6xl mb-3 text-stroke"><CountUp scrollSpyOnce={true} enableScrollSpy={true} end={50}/>+</span> Opensource Contribution</div>
            </Wrapper>
       
       </React.Fragment>
  );
};

