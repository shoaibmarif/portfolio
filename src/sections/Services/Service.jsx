import React, { useEffect, useState } from "react";

export const Service = ({ service, index }) => {
  const duration = 250 * (index + 1);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration={duration}>
      <div
        className="shadow-[7px_7px_0px_#5b21b6] hover:shadow-[14px_14px_0px_#5b21b6] duration-500 transition-all z-10 dark:bg-[#1f1f1f] text-white min-h-[350px] flex items-center relative justify-center overflow-hidden flex-col p-8 rounded-xl cursor-pointer group "
      >
        <span className=" text-2xl font-semibold  uppercase text-center text-primary-dark">
          {service.title}
        </span>
        <span className="mt-8 text-[15px]  inline-block ">{service.text}</span>
        <div className="absolute size-[150px] right-[-75px] top-[-75px]   rounded-full opacity-10 bg-[#fff]  group-hover:size-[200px] transition-all duration-500"></div>
        <div className="absolute size-[150px] bottom-[-75px] left-[-75px]   rounded-full opacity-10 bg-[#fff]  group-hover:size-[200px] transition-all duration-500"></div>
      </div>
    </div>
  );
};
