import React, { useEffect, useState } from "react";

export const Service = ({ service, index }) => {
  const duration = 250 * (index + 1);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration={duration}
      className="z-10 dark:bg-[#1f1f1f] text-white min-h-[350px] flex items-center relative justify-center overflow-hidden flex-col p-10 rounded-xl cursor-pointer group "
    >
      <span className=" text-2xl font-bold text-[#6666F1]">
        {service.title}
      </span>
      <span className="mt-5 text-sm leading-7">{service.text}</span>
      <div className="absolute size-[150px] right-[-70px] top-[-70px] border-[3rem]  rounded-full opacity-10 border-[#fff] bg-white group-hover:size-[250px] transition-all duration-500"></div>
      <div className="absolute size-[150px] bottom-[-70px] left-[-70px] border-[3rem]  rounded-full opacity-10 border-[#fff] bg-white group-hover:size-[250px] transition-all duration-500"></div>
    </div>
  );
};
