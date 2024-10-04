import React from "react";

export const TopHeading = ({ title }) => {
    return (
        <div className=" flex items-center flex-col mb-8" data-aos="zoom-in-up">
            <h2 className="text-white text-5xl uppercase font-extrabold text-stroke">{title}</h2>
            <span className="w-[20%] bg-primary-dark mt-3 h-[3px]"></span>
        </div>
    )
}