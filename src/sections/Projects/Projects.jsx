import React from "react";
import { ContentWrapper } from "../../shared/ContentWrapper";
import { TopHeading } from "../../shared/TopHeading";
import RelveLanding from "../../../public/images/projects/relve-landing.png";
import RelveApp from "../../../public/images/projects/relve-app.png";
import mcDonald from "../../../public/images/projects/mcdonald.png";
import tawkeel from "../../../public/images/projects/tawkeel.png";
import worter from "../../../public/images/projects/worter.png";
import daraz from "../../../public/images/projects/daraz.png";
import omi from "../../../public/images/projects/omi.png";
import duhs from "../../../public/images/projects/duhs.png";
export const Projects = () => {
    return (
        <div className="py-16 bg-[#1b1b1b]">
            <ContentWrapper
                innerClass={"relative"}>
                <TopHeading title="Projects" />
            </ContentWrapper>
            <div className="grid grid-cols-3 bg-[#000000AA] gap-8 ">
                <div className="col-span-1 h-[300px]">
                    <img src={RelveLanding} alt="" className="w-full h-full object-stretch " />
                </div>
                <div className="col-span-1 h-[300px]">
                    <img src={RelveApp} alt="" className="w-full h-full object-stretch " />
                </div>
                <div className="col-span-1 h-[300px]">
                    <img src={mcDonald} alt="" className="w-full h-full object-stretch " />
                </div>
                {/* <div className="col-span-1 h-[300px]">
                    <img src={tawkeel} alt="" className="w-full h-full object-stretch " />
                </div> */}
                <div className="col-span-1 h-[300px]">
                    <img src={worter} alt="" className="w-full h-full object-stretch " />
                </div>
                 <div className="col-span-1 h-[300px]">
                    <img src={daraz} alt="" className="w-full h-full object-stretch " />
                </div>
                <div className="col-span-1 h-[300px]">
                    <img src={omi} alt="" className="w-full h-full object-stretch " />
                </div>
                      {/* <div className="col-span-1 h-[300px]">
                    <img src={duhs} alt="" className="w-full h-full object-stretch " />
                </div> */}
            </div>
        </div>
    )
}