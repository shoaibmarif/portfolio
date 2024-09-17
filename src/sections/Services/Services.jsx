import React from "react";
import {Wrapper} from "../../shared/Wrapper";
import {servicesData} from "../../config/data";
import {Service} from "./Service.jsx"
export const Services = () =>{
    return(
        <div className="bg-gradient-to-r bg-[#150e24] from-[#26012b] via-[#0f0720] to-[#0b0124]">
            <Wrapper>
            <div className="text-center mt-16 uppercase flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold">Service</h2>
            <p className="text-base mt-2">I Provide Service Based on Your Requirements</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8">
                {servicesData.map((service,index) =>{
                    return(
                        <div className="col-span-1 " key={index}>
                            <Service  service={service}/>
                        </div>
                    )
                })}
            </div>
            </Wrapper>
        </div>
    )
}