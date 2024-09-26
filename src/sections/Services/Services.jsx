import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import { servicesData } from "../../config/data";
import { Service } from "./Service.jsx";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";
import { TopHeading } from "../../shared/TopHeading.jsx";
export const Services = () => {
    return (
            <ContentWrapper>
            <Wrapper>
            <TopHeading title="Services"/>
                <div className="grid grid-cols-3 gap-8">
                    {servicesData.map((service, index) => {
                        return (
                            <div className="col-span-1 " key={index}>
                                <Service service={service} index={index} />
                            </div>
                        )
                    })}
                </div>
            </Wrapper>
            </ContentWrapper>
    )
}