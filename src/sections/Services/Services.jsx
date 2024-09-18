import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import { servicesData } from "../../config/data";
import { Service } from "./Service.jsx"
export const Services = () => {
    return (
        <div className="bg-gradient-to-r bg-[#150e24] from-[#26012b] via-[#0f0720] to-[#0b0124] py-16">
            <Wrapper>
                <div className="text-center  uppercase flex flex-col items-center justify-center text-white">
                    <h2 className="text-8xl  font-bold text-stroke ">Service</h2>
                </div>
                <div className="grid grid-cols-3 gap-x-8">
                    {servicesData.map((service, index) => {
                        return (
                            <div className="col-span-1 " key={index}>
                                <Service service={service} />
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
        </div>
    )
}