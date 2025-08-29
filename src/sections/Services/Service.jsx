import React, { useEffect, useState } from "react";

export const Service = ({ service, index }) => {
  const duration = 150 * (index + 1);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration={duration}>
      <div
        className="mt-4 shadow-[0px_0px_0px_#fff] hover:shadow-[5px_5px_0px_#ffffff] duration-500 transition-all z-10 dark:bg-[#1f1f1f] text-white min-h-[250px] md:min-h-[300] lg:min-h-[250px]  flex items-center relative  justify-center overflow-hidden flex-col p-8 rounded-xl cursor-pointer group "
      >
        {/* <img src={service.imgUrl} className="size-[130px]" alt="" /> */}
        <span className="mt-5 text-xl lg:text-2xl font-bold  capitalize text-white  text-center text-primary-dark transition-all">
          {service.title}
        </span>
        <span className="mt-6  text-sm md:text-[14px] lg:text-[15px] text-gray-300 text-center  inline-block leading-relaxed ">{service.text}</span>
        <div className="absolute size-[200px] right-[-100px] top-[-100px]  opacity-60 rounded-full bg-gradient-to-r from-[#962cff] via-[#df5dff] to-[#962cff]  group-hover:size-[250px] transition-all duration-500"></div>
        <div className="absolute size-[200px] bottom-[-100px] left-[-100px]  opacity-60  rounded-full bg-gradient-to-l from-[#962cff] via-[#df5dff] to-[#962cff]  group-hover:size-[250px] transition-all duration-500"></div>
      </div>
    </div>
  );
};
