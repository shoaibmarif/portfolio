import React, { useEffect, useState } from "react";
import { Wrapper } from "../../shared/Wrapper";
import Typewriter from "typewriter-effect";
import { ContentWrapper } from "../../shared/ContentWrapper";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaStackOverflow,
} from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import CountUp from "react-countup";

export const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);





  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      <ContentWrapper>
        <div className="relative h-full w-full">
          <Wrapper classes="text-white flex items-center h-[100vh] justify-center flex-col ">
            <h1 className="font-extrabold uppercase leading-[7rem] text-9xl inline-block bg-white text-white bg-clip-text " data-aos="fade-down" data-aos-delay={800}>
              <span className="  text-violet-800  drop-shadow-[4px_4px_0px_#fae8ff]">S</span>
              <span className="  text-violet-800  drop-shadow-[4px_4px_0px_#fae8ff]">H</span>
              <span className="  text-violet-800  drop-shadow-[4px_4px_0px_#fae8ff]">O</span>
              <span className="  text-violet-800  drop-shadow-[4px_4px_0px_#fae8ff]">A</span>
              <span className="  text-violet-800  drop-shadow-[4px_4px_0px_#fae8ff]">I</span>
              <span className="  text-violet-800  drop-shadow-[4px_4px_0px_#fae8ff]">B</span>
              <span className=""> </span>
              <span className="   text-violet-800   drop-shadow-[4px_4px_0px_#fae8ff]">A</span>
              <span className="   text-violet-800   drop-shadow-[4px_4px_0px_#fae8ff]">R</span>
              <span className="   text-violet-800   drop-shadow-[4px_4px_0px_#fae8ff]">I</span>
              <span className="   text-violet-800   drop-shadow-[4px_4px_0px_#fae8ff]">F</span>
            </h1>


            <div className="text-5xl flex font-bold  mt-8 " data-aos="fade-up" data-aos-delay="800">
              <Typewriter
                options={{
                  strings: ['Frontend Developer', 'React Developer', 'Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              /></div>




            <p
              className="max-w-[700px] text-center text-lg mt-8 text-black dark:text-[#dbdbdb]  transition-all"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people I break down
              complex user experinece problems to create integritiy focussed
              solutions that connect billions of people
            </p>

            {/* ASs  */}

            <div className="absolute top-1/2 translate-y-[-40%] left-14">
              <span
                className={`w-1 bg-white absolute left-1/2 translate-x-[-50%] top-[-35%] rounded-full 
                    transition-all duration-700 delay-1000 ease-out ${isVisible ? "h-24" : "h-0"
                  }`}
              ></span>

              <span
                className={`w-1 bg-white absolute left-1/2 translate-x-[-50%] bottom-[-40%] rounded-full
                    transition-all duration-700   delay-1000 ease-out ${isVisible ? "h-24" : "h-0"
                  }`}
              ></span>
              <div data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="800">
                <SocialIcon
                  color={"#0A66C2"}
                  url="https://www.linkedin.com/in/shoaibmarif/"
                  icon={<FaLinkedinIn size={18} className="dark:text-white " />}
                />
                <SocialIcon
                  color={"#4d4d4d"}
                  url="https://github.com/shoaibmarif"
                  icon={<FaGithub size={18} className="dark:text-white " />}
                />
                <SocialIcon
                  color={"#E4405F"}
                  url="https://www.instagram.com/shoaibmarif/"
                  icon={<FaInstagram size={18} className="dark:text-white " />}
                />
                <SocialIcon
                  color={"#1DA1F2"}
                  url="https://x.com/mshoaibmarif"
                  icon={<FaTwitter size={18} className="dark:text-white " />}
                />
                <SocialIcon
                  color={"#E7700D"}
                  url="https://stackoverflow.com/users/7770942/shoaib-arif"
                  icon={<FaStackOverflow size={18} className="dark:text-white " />}
                />
              </div>
            </div>

            <div className="mt-10 flex items-center ">
              <button
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1200"
                className="min-w-48 px-14 py-4 relative rounded-full font-semibold bg-violet-800 text-white mr-2 overflow-hidden 
                shadow-[4px_4px_0px_0px_#ddd6fe]"
              >
                <span className="relative z-[10] font-semibold">Hire Me</span>
                <span className="w-[25%] bg-violet-400 absolute top-5 h-[200px] left-[0%] rounded-full"></span>
                <span className="w-[30%] bg-violet-400 absolute top-7 h-[200px] left-[20%] rounded-full"></span>
                <span className="w-[40%] bg-violet-400 absolute top-4 h-[200px] left-[40%] rounded-full"></span>
                <span className="w-[40%] bg-violet-400 absolute top-9 h-[200px] left-[60%] rounded-full"></span>
              </button>

              <button
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="1200"
                className="ml-2 flex items-center justify-center mr-4  min-w-48 px-14 py-4 rounded-full  bg-violet-800 text-white  overflow-hidden  
                shadow-[4px_4px_0px_0px_#ddd6fe]
                "
              >
                <LuDownload size={20} className="relative z-[10]" />{" "}
                <span className="ml-1 font-semibold relative z-[10]">Resume</span>
                <span className="w-[25%] bg-violet-400 absolute top-5 h-[200px] left-[0%] rounded-full"></span>
                <span className="w-[30%] bg-violet-400 absolute top-7 h-[200px] left-[20%] rounded-full"></span>
                <span className="w-[40%] bg-violet-400 absolute top-4 h-[200px] left-[40%] rounded-full"></span>
                <span className="w-[40%] bg-violet-400 absolute top-9 h-[200px] left-[60%] rounded-full"></span>
              </button>
            </div>
          </Wrapper >
          <Wrapper classes="absolute bottom-0  left-1/2 translate-x-[-50%] z-10 " >
            <div className="  flex items-center justify-between px-20  py-8 rounded-xl  bg-[#1f1f1f] transition-all" data-aos="fade-up" data-aos-delay="1000">
              <div className="text-white flex items-center">
                <ExperienceSvg color={"#fff"} size={"50px"} />
                <div className="flex items-start flex-col ml-2 font-semibold uppercase">
                  <span className="text-2xl font-bold mb-1  ">
                    <CountUp
                      scrollSpyOnce={true}
                      enableScrollSpy={true}
                      delay={1}
                      end={4}
                    />
                    +
                  </span>
                  Experience
                </div>
              </div>
              <span className="bg-white w-[4px] rounded-full counter__line  "></span>
              <div className="text-white flex items-center  ">
                <ProjectSvg color={"#fff"} size="50px" />

                <div className="flex items-start flex-col ml-2 font-semibold uppercase">
                  <span className="text-2xl font-bold mb-1  ">
                    <CountUp
                      scrollSpyOnce={true}
                      enableScrollSpy={true}
                      end={50}
                      delay={1}
                    />
                    +
                  </span>
                  Project Completed
                </div>
              </div>
              <span className="bg-white w-[4px] rounded-full counter__line  "></span>

              <div className="text-white flex items-center  ">
                <div>
                  <HappySvg color="#fff" size="50px" />
                </div>

                <div className="flex items-start flex-col ml-2 font-semibold uppercase">
                  <span className="text-2xl font-bold mb-1  ">
                    <CountUp
                      scrollSpyOnce={true}
                      enableScrollSpy={true}
                      end={20}
                      delay={1}
                    />
                    +
                  </span>
                  Happy Clients
                </div>
              </div>
              <span className="bg-white w-[4px] rounded-full counter__line "></span>
              <div className="text-white flex items-center  ">
                <OpenSourceSvg color={"#fff"} size="50px" />
                <div className="flex items-start flex-col ml-3 font-semibold uppercase">
                  <span className="text-2xl font-bold mb-1 ">
                    <CountUp
                      scrollSpyOnce={true}
                      delay={1}
                      enableScrollSpy={true}
                      end={25}
                    />
                    +
                  </span>
                  Open Source
                </div>
              </div>
            </div>
          </Wrapper>
        </div >
      </ContentWrapper >
    </React.Fragment >
  );
};

const SocialIcon = ({ icon, color, url }) => {
  return (
    <React.Fragment>
      <Link
        to={url}
        style={{ "--hover-color": color, }}
        className={`bg-[--hover-color] hover:scale-125 mt-4 block rounded-full p-3 cursor-pointer social__wrapper  transition-all duration-300 `}
      >
        {icon}
      </Link>
    </React.Fragment>
  );
};

const ExperienceSvg = ({ color, size }) => {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="m14.25 9.25v-3.25l-6.25-3.25-6.25 3.25 6.25 3.25 3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5" />
      </svg>
    </div>
  );
};

const ProjectSvg = ({ color, size }) => {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Combined-Shape"
            fill={color}
            transform="translate(64.000000, 34.346667)"
          >
            <path d="M192,-7.10542736e-15 L384,110.851252 L384,242.986 L341.333,242.986 L341.333,157.655 L213.333,231.555 L213.333,431.088 L192,443.405007 L0,332.553755 L0,110.851252 L192,-7.10542736e-15 Z M341.333333,264.32 L341.333,328.32 L405.333333,328.32 L405.333333,370.986667 L341.333,370.986 L341.333333,434.986667 L298.666667,434.986667 L298.666,370.986 L234.666667,370.986667 L234.666667,328.32 L298.666,328.32 L298.666667,264.32 L341.333333,264.32 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

const HappySvg = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.375 10.5C9.99632 10.5 10.5 9.99632 10.5 9.375C10.5 8.75368 9.99632 8.25 9.375 8.25C8.75368 8.25 8.25 8.75368 8.25 9.375C8.25 9.99632 8.75368 10.5 9.375 10.5ZM15.75 9.375C15.75 9.99632 15.2463 10.5 14.625 10.5C14.0037 10.5 13.5 9.99632 13.5 9.375C13.5 8.75368 14.0037 8.25 14.625 8.25C15.2463 8.25 15.75 8.75368 15.75 9.375ZM12 15C10.1783 15 9 13.8451 9 12.75H7.5C7.5 14.9686 9.67954 16.5 12 16.5C14.3205 16.5 16.5 14.9686 16.5 12.75H15C15 13.8451 13.8217 15 12 15Z"
        fill={color}
      />
    </svg>
  );
};

const OpenSourceSvg = ({ color, size }) => {
  return (
    <div>
      <svg
        fill={color}
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-0.136 16.708c0.152-8.765 6.287-15.005 13.797-16.015 8.959-1.199 16.495 4.895 17.943 12.979 1.375 7.667-2.839 14.844-9.787 17.688-0.599 0.244-0.927 0.109-1.156-0.5l-3.453-8.969c-0.197-0.527-0.063-0.855 0.453-1.088 1.563-0.709 2.536-1.896 2.797-3.6 0.411-2.64-1.5-5.077-4.161-5.307-2.423-0.235-4.609 1.453-5 3.853-0.339 2.131 0.713 4.115 2.697 5.016 0.62 0.281 0.745 0.557 0.505 1.188l-3.469 9.031c-0.167 0.443-0.531 0.6-1 0.417-3.661-1.432-6.667-4.167-8.437-7.677-1.609-3.177-1.624-5.661-1.729-7.021zM1.213 16.584c0.027 0.427 0.041 0.921 0.084 1.427 0.405 4.64 3.197 9.26 8.452 11.817 0.209 0.093 0.287 0.052 0.365-0.145 0.959-2.527 1.927-5.052 2.901-7.579 0.083-0.208 0.041-0.307-0.152-0.427-2.041-1.287-3.057-3.131-2.943-5.552 0.063-1.391 0.6-2.615 1.537-3.636 1.932-2.109 4.968-2.568 7.453-1.135 2.052 1.187 3.197 3.484 2.916 5.839-0.235 1.968-1.244 3.479-2.953 4.5-0.172 0.104-0.224 0.187-0.145 0.389 0.979 2.532 1.953 5.063 2.916 7.595 0.079 0.203 0.157 0.244 0.36 0.145 2.297-1.068 4.208-2.599 5.688-4.64 2.244-3.115 3.171-6.579 2.728-10.391-0.88-7.584-7.703-13.865-16.489-12.781-6.844 0.839-12.604 6.615-12.719 14.573z" />
      </svg>
    </div>
  );
};
