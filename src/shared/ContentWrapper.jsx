import React from "react";

export const ContentWrapper = ({ children, classes, anim, duration, delay, innerClass, display }) => {
    return (
        <div className={`${classes} 
        bg-gradient-to-r from-[#101010] via-[#161616] dark:to-[#101010] py-1 ${display ? display : "relative"} 
        transition-all  `} data-aos-duration={duration} data-aos={anim} data-aos-delay={delay}>
            <div className={`mx-auto container ${innerClass}`}>
                {children}
            </div>
        </div>
    )
}



