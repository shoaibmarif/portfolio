import React, { useEffect, useState } from "react";

export const Service = ({ service, index }) => {
        const duration = 200 * (index + 1);
        return (
                <div data-aos="zoom-in" data-aos-duration={duration} className=" shadow-[inset_0px_0px_20px_0px_#b090ffAF] text-white  bg-[#270d2e]  min-h-[300px] flex items-center relative justify-center overflow-hidden flex-col p-10 rounded-xl mt-14 cursor-pointer group ">
                        <span className=" text-2xl font-bold text-[#a37eff]">{service.title}</span>
                        <span className="mt-5 text-sm">{service.text}</span>
                        <div className="absolute size-[200px] right-[-100px] top-[-100px] border-[3rem]  rounded-full opacity-30 border-[#b090ff] group-hover:size-[250px] transition-all duration-500"></div>
                        <div className="absolute size-[200px] bottom-[-100px] left-[-100px] border-[3rem]  rounded-full opacity-30 border-[#b090ff] group-hover:size-[250px] transition-all duration-500"></div>
                </div >
        )
}