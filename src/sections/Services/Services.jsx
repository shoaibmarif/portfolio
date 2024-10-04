import React from "react";
import { servicesData } from "../../config/data";
import { Service } from "./Service.jsx";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";
import { TopHeading } from "../../shared/TopHeading.jsx";
export const Services = () => {
    return (
        <ContentWrapper>
            <TopHeading title="Services" />
            <div className="grid grid-cols-3 gap-12 py-6">
                {servicesData.map((service, index) => {
                    return (
                        <div className="col-span-1 " key={index}>
                            <Service service={service} index={index} />
                        </div>
                    )
                })}
            </div>
        </ContentWrapper>
    )
}