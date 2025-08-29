import React from "react";

export const TopHeading = ({ title }) => {
    return (
        <div className=" flex items-center flex-col mb-8 z-50 text-white relative " data-aos="zoom-in-up">
            <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl uppercase font-extrabold ">{title}</h2>
            <span className="w-[20%] bg-primary-dark mt-3 bg-gradient-to-l from-[#962cff] via-[#df5dff] to-[#962cff] h-[3px]"></span>
        </div>
    )
}