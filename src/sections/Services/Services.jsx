import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import { servicesData } from "../../config/data";
import { Service } from "./Service.jsx"
export const Services = () => {
    return (
        <div className="relative bg-gradient-to-r bg-[#150e24] from-[#26012b] via-[#0f0720] to-[#0b0124] py-12">

            <Wrapper>
                <div className="text-center  uppercase flex flex-col items-center justify-center text-white relative py-7" data-aos="fade-up">
                    <h2 className="text-5xl  font-bold" >Service</h2>
                    <span className="w-32 bg-[#ef4444] absolute top-[90%] left-[50%] translate-x-[-50%] h-[3px]"></span>
                </div>
                <div className="grid grid-cols-3 gap-x-8">
                    {servicesData.map((service, index) => {
                        return (
                            <div className="col-span-1 " key={index}>
                                <Service service={service} index={index} />
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
        </div>
    )
}