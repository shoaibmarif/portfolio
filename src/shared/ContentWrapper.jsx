import React from "react";

export const ContentWrapper = ({ children, classes, anim, duration, delay }) => {
    return (
        <div className={`${classes} 
        bg-gradient-to-r from-[#03020a] via-[#1f1f1f] dark:to-[#03020a]
        transition-all  `} data-aos-duration={duration} data-aos={anim} data-aos-delay={delay}>
            {children}
        </div>
    )
}



