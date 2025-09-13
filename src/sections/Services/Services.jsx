import React from "react";
import { servicesData } from "../../config/data";
import { Service } from "./Service.jsx";
import { ContentWrapper } from "../../shared/ContentWrapper.jsx";
import { TopHeading } from "../../shared/TopHeading.jsx";
import Particles from "../../components/Particles.jsx";
export const Services = () => {
    return (
        <ContentWrapper classes={"relative w-full min-h-[100vh] bg-[#2b2b2b] pb-8"}>
            {/* <div className="absolute bottom-[-200px] left-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f1f1f1" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,234.7C672,267,768,277,864,245.3C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div> */}
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