import React from "react";

export const ContentWrapper = ({ children, classes }) => {
    return (
        <div className={`${classes} bg-gradient-to-r from-[#0f0f0f] via-[#1d1d1d] to-[#0f0f0f] transition-all  `}>
            {children}
        </div>
    )
}



