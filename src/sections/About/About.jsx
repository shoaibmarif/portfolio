import React from "react";
import Horeca from "../../../public/images/companies/horeca.png";
import CC from "../../../public/images/companies/CC.png";
import Daraz from "../../../public/images/companies/Daraz.png";
import manhattan from "../../../public/images/companies/manhattan.png";
import softtech from "../../../public/images/companies/softech.jpg";
import cipher from "../../../public/images/companies/cipherlabs.jpg";
import { ContentWrapper } from "../../shared/ContentWrapper";
import { TopHeading } from "../../shared/TopHeading";

export const About = () => {
  const experience = [
    {
      id: 1,
      name: "Horeca Store",
      startDate: "March 2024",
      endDate: "Present",
      position: "Senior Frontend Developer",
      imgSrc: Horeca,
      companyLink: "https://horecastore.ae/"
    },
    {
      id: 2,
      name: "Daraz",
      startDate: "June 2023",
      endDate: "March 2024",
      position: "Frontend Developer",
      imgSrc: Daraz,
      companyLink: "https://www.daraz.pk/"
    },
    {
      id: 3,
      name: "Cooperative Computing",
      startDate: "June 2022",
      endDate: "June 2023",
      position: "Frontend Developer",
      imgSrc: CC,
      companyLink: "https://www.cooperativecomputing.com/"

    },
    {
      id: 4,
      name: "Manhattan Communication Pvt. Ltd",
      startDate: "March 2021",
      endDate: "June 2022",
      position: "Frontend Developer",
      imgSrc: manhattan,
      companyLink: "https://manhattan-mcl.com/"

    },
    {
      id: 5,
      name: "Softtech Worldwide",
      startDate: "Dec 2020",
      endDate: "March 2021",
      position: "Frontend Developer (Intern)",
      imgSrc: softtech,
      companyLink: "https://manhattan-mcl.com/"

    },
    {
      id: 6,
      name: "Cipher Labs",
      startDate: "June 2020",
      endDate: "Aug 2020",
      position: "Frontend Developer (Intern)",
      imgSrc: cipher,
      companyLink: "https://cipherlabs.org/"

    },
  ];



  return (
    <React.Fragment>
      <ContentWrapper classes={"w-full min-h-[100vh] py-16"}>
        <TopHeading title="About" />
        <div className="grid grid-cols-6 gap-6  xl:gap-14">
          <div className="col-span-6 lg:col-span-3">
            <div className=" flex  justify-start h-full flex-col ">
              <h2 className="text-primary-dark text-2xl font-bold underline underline-offset-4 my-5 mb-2" data-aos="fade-up">Overview</h2>
              <p className="text-gray-300 text-[13px] md:text-sm lg:text-[15px] " data-aos="fade-right" data-aos-duration="700">
                With extensive experience in Elementor and WooCommerce, I ensure
                that every website is designed to provide a seamless user
                experience, As a seasoned WordPress developer, I specialize in
                crafting custom websites and building dynamic plugins tailored
                to the unique needs of businesses.
              </p>
              <p className="text-gray-300 mt-2 text-[13px] md:text-sm lg:text-[15px]" data-aos="fade-right" data-aos-duration="700">
                With extensive experience in Elementor and WooCommerce, I ensure
                that every website is designed to provide a seamless user
                experience, As a seasoned WordPress developer, I specialize in
                crafting custom websites and building dynamic plugins tailored
                to the unique needs of businesses.
              </p>

              <h2 className="text-primary-dark  text-2xl font-bold underline underline-offset-4 my-5 mb-2" data-aos="fade-up">Education</h2>
              <p className="text-gray-300 text-[13px] md:text-sm lg:text-[15px] " data-aos="fade-right" data-aos-duration="700">
                With extensive experience in Elementor and WooCommerce, I ensure
                that every website is designed to provide a seamless user
                experience, As a seasoned WordPress developer, I specialize in
                crafting custom websites and building dynamic plugins tailored
                to the unique needs of businesses.
              </p>
              <p className="text-gray-300 mt-2 text-[13px] md:text-sm lg:text-[15px] " data-aos="fade-right" data-aos-duration="700">
                With extensive experience in Elementor and WooCommerce, I ensure
                that every website is designed to provide a seamless user
                experience, As a seasoned WordPress developer, I specialize in
                crafting custom websites and building dynamic plugins tailored
                to the unique needs of businesses.
              </p>
              <h2 className="text-primary-dark  text-2xl font-bold underline underline-offset-4 my-5 mb-2" data-aos="fade-up">Hobbies</h2>

              <p className="text-gray-300 text-[13px] md:text-sm lg:text-[15px]" data-aos="fade-right" data-aos-duration="700">
                With extensive experience in Elementor and WooCommerce, I ensure
                that every website is designed to provide a seamless user
                experience, As a seasoned WordPress developer, I specialize in
                crafting custom websites and building dynamic plugins tailored
                to the unique needs of businesses.
              </p>


            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">

            <h2 className="text-primary-dark  text-2xl font-bold underline underline-offset-4 my-5" data-aos="fade-up">Experience</h2>
            {experience.map((exp, index) => {
              return (
                <Timeline key={index} experience={exp} />
              )
            })}
          </div>


        </div>
      </ContentWrapper >
    </React.Fragment>
  );
};


const Timeline = ({ experience }) => {
  const { name, startDate, endDate, position, imgSrc, description } = experience;
  return (
    <React.Fragment>
      <div className="flex ">
        <div className="w-28 text-end mt-[2px] hidden md:block">
          <span className="text-xs text-white font-semibold">
            {startDate} - {endDate}
          </span>
        </div>
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-800 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-violet-800"></span>
            </span>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="700" className=" bg-[#1F1F1F] overflow-hidden  transition-all text-white w-full rounded-lg mt-5 flex items-center px-4 py-7 after:size-[400px] relative after:absolute after:bg-white  after:rounded-full after:opacity-10  after:top-[-50%] after:right-[-300px] after:transition-all">
          <div>
            <img src={imgSrc} className="w-16 mr-5 rounded-full" alt="" />
          </div>
          <div className="">
            <h3 className=" font-semibold text-primary-dark text-sm md:text-base lg:text-lg ">{position}</h3>
            <p className="text-[13px] text-gray-300 md:text-md lg:text-[15px]">{name}</p>
            <span className="text-xs block md:hidden text-white font-semibold">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
      </div>

    </React.Fragment>

  )
}