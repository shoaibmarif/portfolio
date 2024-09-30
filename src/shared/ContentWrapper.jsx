import React from "react";

export const ContentWrapper = ({ children, classes, anim, duration }) => {
    return (
        <div className={`${classes} dark:bg-[#040D12] transition-all  `} data-aos-duration={duration} data-aos={anim}>
            {children}
        </div>
    )
}



