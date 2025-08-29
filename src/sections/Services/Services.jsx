import React from "react";
import { servicesData } from "../../config/data";
import { Service } from "./Service.jsx";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";
import { TopHeading } from "../../shared/TopHeading.jsx";
import Particles from "../../components/Particles.jsx";
export const Services = () => {
    return (
        <ContentWrapper classes={"w-full min-h-[100vh] bg-[#161616] py-16"}>
              {/* <div style={{ left:0,top:0, width: '100%', height: '100%', position: 'absolute', zIndex:1,overflow:"hidden"}}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={15}
          speed={.2}
          particleBaseSize={50}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
    </div> */}
            <TopHeading title="Services" />
            <div className="grid grid-cols-6 gap-10 py-6 relative z-[100]">
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