import React from "react";

export const ContentWrapper = ({ children, classes, anim, duration, delay }) => {
    return (
        <div className={`${classes} 
        bg-gradient-to-r from-[#101010] via-[#161616] dark:to-[#101010]
        transition-all  `} data-aos-duration={duration} data-aos={anim} data-aos-delay={delay}>
            {children}
        </div>
    )
}



