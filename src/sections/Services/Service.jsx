import React from "react";

export const Service = ({service}) =>{
    return(
            <div className="drop-shadow-2xl bg-white  min-h-[300px] flex items-center relative justify-center overflow-hidden flex-col p-10 rounded-xl mt-14 cursor-pointer">
                    <span className=" text-2xl font-semibold">{service.title}</span>
                    <span className="mt-5 text-sm">{service.text}</span>
                    <div className="size-[100px] bg-[#c531ff] absolute rounded-full top-[-55px] right-[-55px]"></div>
            </div>       
    )
}