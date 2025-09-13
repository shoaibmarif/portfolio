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
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export const Testimonials = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "Hassan Mehdi",
      designation: "Full Stack Engineer @ CredibleX",
      profileIcon: Hassan,
      comments:
        "We worked on multiple projects in the university, He is a skillful person with good domain knowledge. He is always motivated to implement the best possible solution. A team player who knows how to work as a unit and maintain the team's moral.",
    },
    {
      name: "Muhammad Majid Nazir",
      designation: "Team Lead @ Manhattan Communications",
      profileIcon: Majid,
      comments:
        "I worked with Shoaib and I am impressed with his willing to learn attitude. He has a solid command in solving complex programming problems and in web development. He takes initiative and loves to take on new challenges. I highly recommend him, wishing him best of luck for his future endeavors.",
    },
    {
      name: "Sarim Fahim",
      designation: "Brand Manager @ Gushcloud International",
      profileIcon: Sarim,
      comments:
        "I had the pleasure of working alongside Shoaib Muhammad at Manhattan Communications Ltd. He is very dedicated to his job and it won't be wrong to say that he is somewhat a perfectionist and considering his job as frontend developer, it was very benefitable to have someone like him in the team. Best of luck for your future!",
    },
    {
      name: "Muhammad Talha",
      designation: "Software Engineer @ Logiciel Service",
      profileIcon: Talha,
      comments:
        "I've known shoaib from university he is very hard working man any organization would be lucky to have him.",
    },
    {
      name: "Sameer Tahir",
      designation: "Software Engineer @ Hyperdata",
      profileIcon: Sameer,
      comments:
        "Shoaib is a very passionate and dedicated employee He is a career-oriented and focused person he makes sure all the requirements of the project met and whatever project he is working on should be fulfilled the quality standard.",
    },
    {
      name: "Abdullah Arif",
      designation: "Digital Marketing Manager @ Digital Ocean",
      profileIcon: Abdullah,
      comments:
        "I have studied with him for the past few years in the same university in multiple courses.I found Shoaib to be a hardworking individual, who I have had the privilege to work on different projects both for university and freelance purposes.Shoaib always has pushed to get the best out of a situation and always willing to learn something new to enhance himself both personally and professionally.",
    },
    {
      name: "Iqbal Anas",
      designation: "Dotnet Developer @ Tplex",
      profileIcon: Iqbal,
      comments:
        "Professionalism is the word that comes to mind when I think about Shoaib, I have an amazing working experience with him he is an extraordinary Developer and a professional, He has exceptional expertise in Web Development, Problem-solving and communication skills. He is a reliable and forward-thinking Web expert but also a great team player. As a team member or a leader, He earns my highest recommendation.",
    },
    {
      name: "Burhan Saiyed",
      designation: "Senior Manager @ IBA",
      profileIcon: Burhan,
      comments:
        "I taught Shoaib while he was studying Tech Entrepreneurship at KIET. Shoaib while quiet in the classes was curious and engaged in his projects and would often message me on the side for work and other topics which he'd like to get counsel on. I found Shoaib to be mature, responsible and a self starter who knew what he wanted and how to get it. I'm excited to see where Shoaib goes in the future and believe he would be a worthy addition to any company that were lucky to have him ",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
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
    <div className="relative">
      <div className="absolute -top-1 left-0 z-10  w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1b1b1b" fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,176C672,160,768,96,864,106.7C960,117,1056,203,1152,240C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
     </div>
       <div className="absolute -bottom-1 left-0 z-10  w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#1b1b1b" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,224C384,181,480,107,576,106.7C672,107,768,181,864,202.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
     </div>
    <ContentWrapper
      innerClass={"relative"}
      classes={
        "w-full min-h-[120vh] bg-[#2b2b2b] py-16"
      }
    >
        
      
      <TopHeading title="Testimonials" />
      <div className="absolute -bottom-10 left-[45%] -translate-x-1/2  z-[100]">
        <span
          className="text-black bg-white absolute z-10  rounded-full p-3 cursor-pointer transition-all hover:bg-primary-dark hover:text-white"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <HiArrowLongLeft size={34} />
        </span>
        <span
          className="text-black bg-white absolute ml-20  z-10  rounded-full p-3 cursor-pointer transition-all hover:bg-primary-dark hover:text-white"
          onClick={() => sliderRef.current.slickNext()}
        >
          <HiArrowLongRight size={34} />
        </span>
      </div>
      <div className="grid grid-cols-1 relative z-50 ">
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((testimonial, index) => {
            return (
              <div
                className="col-span-1 px-4 py-2"
                key={index}>
                <div className="p-12 bg-[#1b1b1b] rounded-lg h-[500px] relative overflow-hidden shadow-white  shadow-[2px_2px_1px_1px_#6d28d9]">
                  <div className="absolute left-0 top-0 bg-primary-dark"></div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={testimonial.profileIcon}
                      alt=""
                      className="size-36 rounded-full "
                    />
                    <h2 className=" font-semibold capitalize mt-5 text-xl md:text-2xl text-primary-dark text-center">
                      {testimonial.name}
                    </h2>
                    <p className="text-sm text-white text-center ">
                      {testimonial.designation}
                    </p>
                  </div>
                  <p className="line-clamp-[5]	text-gray-300   text-center text-sm mt-7">
                    {testimonial.comments}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </ContentWrapper>
    </div>
  );
};
