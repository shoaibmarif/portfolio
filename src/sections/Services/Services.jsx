import React from "react";
import { servicesData } from "../../config/data";
import { Service } from "./Service.jsx";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";
import { TopHeading } from "../../shared/TopHeading.jsx";
export const Services = () => {
    return (
        <ContentWrapper classes={"w-full min-h-[100vh]  bg-gradient-to-r from-[#161616] via-[#222] dark:to-[#161616] py-16"}>
            <TopHeading title="Services" />
            <div className="grid grid-cols-6 gap-10 py-6">
                {servicesData.map((service, index) => {
                    return (
                        <div className="col-span-6  md:col-span-3 xl:col-span-2" key={index}>
                            <Service service={service} index={index} />
                        </div>
                    )
                })}
            </div>
        </ContentWrapper>
    )
}