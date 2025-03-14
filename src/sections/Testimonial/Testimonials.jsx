import React, { useRef } from "react";
import { ContentWrapper } from "../../shared/ContentWrapper";
import Slider from "react-slick";
import { TopHeading } from "../../shared/TopHeading";
import Hassan from "../../../public/images/testimonials/Hassan.jpg";
import Abdullah from "../../../public/images/testimonials/Abdullah.jpg";
import Iqbal from "../../../public/images/testimonials/Iqbal.jpg";
import Burhan from "../../../public/images/testimonials/Burhan.jpg";
import Majid from "../../../public/images/testimonials/Majid.jpg";
import Sameer from "../../../public/images/testimonials/sameer.jpg";
import Sarim from "../../../public/images/testimonials/Sarim.jpg";
import Talha from "../../../public/images/testimonials/Talha.jpg";
import Urooba from "../../../public/images/testimonials/Urooba.jpg";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

export const Testimonials = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "Hassan Mehdi",
      designation: "Full Stack Engineer",
      profileIcon: Hassan,
      comments:
        "We worked on multiple projects in the university, He is a skillful person with good domain knowledge. He is always motivated to implement the best possible solution. A team player who knows how to work as a unit and maintain the team's moral.",
    },

    {
      name: "Urooba Ishtiaq",
      designation: "Brand Manager",
      profileIcon: Urooba,
      comments:
        "In only a short span of time that I've been working with Shoaib at Manhattan Communications, I found him to be everything a person would need in a colleague; very supportive and makes everyone at ease around him. Hence, working with him is always easy and fun.",
    },
    {
      name: "Muhammad Majid Nazir",
      designation: "Senior Web Developer",
      profileIcon: Majid,
      comments:
        "I worked with Shoaib and I am impressed with his willing to learn attitude. He has a solid command in solving complex programming problems and in web development. He takes initiative and loves to take on new challenges. I highly recommend him, wishing him best of luck for his future endeavors.",
    },
    {
      name: "Sarim Fahim",
      designation: "Brand Strategist",
      profileIcon: Sarim,
      comments:
        "I had the pleasure of working alongside Shoaib Muhammad at Manhattan Communications Ltd. He is very dedicated to his job and it won't be wrong to say that he is somewhat a perfectionist and considering his job as frontend developer, it was very benefitable to have someone like him in the team. Best of luck for your future!",
    },
    {
      name: "Muhammad Talha",
      designation: "Software Engineer",
      profileIcon: Talha,
      comments:
        "I've known shoaib from university he is very hard working man any organization would be lucky to have him.",
    },
    {
      name: "Sameer Tahir",
      designation: "Software Engineer",
      profileIcon: Sameer,
      comments:
        "Shoaib is a very passionate and dedicated employee He is a career-oriented and focused person he makes sure all the requirements of the project met and whatever project he is working on should be fulfilled the quality standard.",
    },
    {
      name: "Abdullah Arif",
      designation: "Digital Marketing Manager",
      profileIcon: Abdullah,
      comments:
        "I have studied with him for the past few years in the same university in multiple courses.I found Shoaib to be a hardworking individual, who I have had the privilege to work on different projects both for university and freelance purposes.Shoaib always has pushed to get the best out of a situation and always willing to learn something new to enhance himself both personally and professionally.",
    },
    {
      name: "Iqbal Anas",
      designation: "Dotnet Developer",
      profileIcon: Iqbal,
      comments:
        "Professionalism is the word that comes to mind when I think about Shoaib, I have an amazing working experience with him he is an extraordinary Developer and a professional, He has exceptional expertise in Web Development, Problem-solving and communication skills. He is a reliable and forward-thinking Web expert but also a great team player. As a team member or a leader, He earns my highest recommendation.",
    },
    {
      name: "Burhan Saiyed",
      designation: "Fundraiser | Entrepreneur",
      profileIcon: Burhan,
      comments:
        "I taught Shoaib while he was studying Tech Entrepreneurship at KIET. Shoaib while quiet in the classes was curious and engaged in his projects and would often message me on the side for work and other topics which he'd like to get counsel on. I found Shoaib to be mature, responsible and a self starter who knew what he wanted and how to get it. I'm excited to see where Shoaib goes in the future and believe he would be a worthy addition to any company that were lucky to have him ",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ContentWrapper
      innerClass={"relative"}
      classes={
        "w-full min-h-[90vh] py-16 bg-gradient-to-r from-[#161616] via-[#222] dark:to-[#161616]"
      }
    >
      <TopHeading title="Testimonials" />
      <div className="absolute top-1/2">
        {/* <span
          className="text-black bg-white relative  z-10  rounded-full p-3 cursor-pointer transition-all hover:bg-primary-dark hover:text-white"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <HiArrowLongLeft size={34} />
        </span>
        <span
          className="text-black bg-white absolute  z-10  rounded-full p-3 cursor-pointer transition-all hover:bg-primary-dark hover:text-white"
          onClick={() => sliderRef.current.slickNext()}
        >
          <HiArrowLongRight size={34} />
        </span> */}
      </div>
      <div className="grid grid-cols-1  ">
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((testimonial, index) => {
            return (
              <div
                className="col-span-1 px-4 py-2"
                key={index}
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="p-8 rounded-lg h-[500px] relative overflow-hidden shadow-white  shadow-[3px_3px_1px_1px_#6d28d9]">
                  <div className="absolute left-0 top-0 bg-primary-dark"></div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={testimonial.profileIcon}
                      alt=""
                      className="size-36 rounded-full "
                    />
                    <h2 className=" font-bold uppercase mt-5 text-xl md:text-2xl text-primary-dark text-center">
                      {" "}
                      {testimonial.name}
                    </h2>
                    <p className="text-base md:text-lg text-white  ">
                      {testimonial.designation}
                    </p>
                  </div>
                  <p className="line-clamp-[8]	text-gray-300 text-sm lg:text-[15px] mt-4">
                    {testimonial.comments}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </ContentWrapper>
  );
};
