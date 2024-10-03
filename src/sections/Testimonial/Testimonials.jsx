import React from 'react';
import { ContentWrapper } from "../../shared/ContentWrapper";
import Slider from "react-slick";
import { TopHeading } from "../../shared/TopHeading"
import Hassan from "../../../public/images/testimonials/Hassan.jpg"
import Abdullah from "../../../public/images/testimonials/Abdullah.jpg"
import Iqbal from "../../../public/images/testimonials/Iqbal.jpg"
import Burhan from "../../../public/images/testimonials/Burhan.jpg"
import Majid from "../../../public/images/testimonials/Majid.jpg"
import Sameer from "../../../public/images/testimonials/sameer.jpg"
import Sarim from "../../../public/images/testimonials/Sarim.jpg"
import Talha from "../../../public/images/testimonials/Talha.jpg"
import Urooba from "../../../public/images/testimonials/Urooba.jpg"
import Qoute from "../../../public/icons/quote.png"
export const Testimonials = () => {

    const testimonials = [
        {
            name: "Hassan Mehdi",
            designation: "Full Stack Engineer",
            profileIcon: Hassan,
            comments: "We worked on multiple projects in the university, He is a skillful person with good domain knowledge. He is always motivated to implement the best possible solution. A team player who knows how to work as a unit and maintain the team's moral."
        },

        {
            name: "Urooba Ishtiaq",
            designation: "Brand Manager",
            profileIcon: Urooba,
            comments: "In only a short span of time that I've been working with Shoaib at Manhattan Communications, I found him to be everything a person would need in a colleague; very supportive and makes everyone at ease around him. Hence, working with him is always easy and fun."
        },
        {
            name: "Muhammad Majid Nazir",
            designation: "Senior Web Developer (Team Lead)",
            profileIcon: Majid,
            comments: "I worked with Shoaib and I am impressed with his willing to learn attitude. He has a solid command in solving complex programming problems and in web development. He takes initiative and loves to take on new challenges. I highly recommend him, wishing him best of luck for his future endeavors."
        },
        {
            name: "Sarim Fahim",
            designation: "Brand Strategist",
            profileIcon: Sarim,
            comments: "I had the pleasure of working alongside Shoaib Muhammad at Manhattan Communications Ltd. He is very dedicated to his job and it won't be wrong to say that he is somewhat a perfectionist and considering his job as frontend developer, it was very benefitable to have someone like him in the team. Best of luck for your future!"
        },
        {
            name: "Muhammad Talha",
            designation: "Software Engineer",
            profileIcon: Talha,
            comments: "I've known shoaib from university he is very hard working man any organization would be lucky to have him."
        },
        {
            name: "Sameer Tahir",
            designation: "Software Engineer",
            profileIcon: Sameer,
            comments: "Shoaib is a very passionate and dedicated employee He is a career-oriented and focused person he makes sure all the requirements of the project met and whatever project he is working on should be fulfilled the quality standard."
        },
        {
            name: "Abdullah Arif",
            designation: "Digital Marketing Manager",
            profileIcon: Abdullah,
            comments: "I have studied with him for the past few years in the same university in multiple courses.I found Shoaib to be a hardworking individual, who I have had the privilege to work on different projects both for university and freelance purposes.Shoaib always has pushed to get the best out of a situation and always willing to learn something new to enhance himself both personally and professionally."
        },
        {
            name: "Iqbal Anas",
            designation: "Dotnet Developer",
            profileIcon: Iqbal,
            comments: "Professionalism is the word that comes to mind when I think about Shoaib, I have an amazing working experience with him he is an extraordinary Developer and a professional, He has exceptional expertise in Web Development, Problem-solving and communication skills. He is a reliable and forward-thinking Web expert but also a great team player. As a team member or a leader, He earns my highest recommendation."
        },
        {
            name: "Burhan Saiyed",
            designation: "Fundraiser | Marketer | Trainer | Entrepreneur",
            profileIcon: Burhan,
            comments: "I taught Shoaib while he was studying Tech Entrepreneurship at KIET. Shoaib while quiet in the classes was curious and engaged in his projects and would often message me on the side for work and other topics which he'd like to get counsel on. I found Shoaib to be mature, responsible and a self starter who knew what he wanted and how to get it. I'm excited to see where Shoaib goes in the future and believe he would be a worthy addition to any company that were lucky to have him "
        }
    ]
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <ContentWrapper>
            <TopHeading title="Testimonials" />
            <Slider {...settings} >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex  px-5">
                        <div className='flex flex-col items-center justify-between bg-[#1f1f1f]  rounded-xl p-8 min-h-[370px] relative'>

                            <p className="text-sm  text-white mt-5  ">
                                "{testimonial.comments}"
                            </p>

                            <img src={Qoute} alt="Testimonials" className='absolute right-10 top-10 opacity-30  w-24' />
                            <img src={Qoute} alt="Testimonials" className='absolute left-10 bottom-10 opacity-30  w-24 rotate-180' />

                            <div className=" flex items-center flex-col justify-center  mt-3 ">
                                <img
                                    src={testimonial.profileIcon}
                                    alt={testimonial.name}
                                    className="size-20  rounded-full"
                                />
                                <p className="font-bold text-lg text-[#6A2F96] mt-2 ">{testimonial.name}</p>
                                <p className="text-gray-200 text-sm font-semibold">{testimonial.designation}</p>

                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        </ContentWrapper>
    )
}