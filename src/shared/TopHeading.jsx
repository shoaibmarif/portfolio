import React from "react";

export const TopHeading = ({ title }) => {
    return (
        <div className=" flex items-center flex-col py-10">
            <h2 className="text-white text-3xl uppercase font-bold">{title}</h2>
            <span className="w-[15%] bg-[#ef4444] mt-3 h-[3px]"></span>
        </div>
    )
}