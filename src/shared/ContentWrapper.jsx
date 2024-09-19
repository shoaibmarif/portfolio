import React from "react";

export const ContentWrapper = ({ children, classes }) => {
    return (
        <div className={`${classes}  bg-gradient-to-r dark:bg-[#150e24] dark:from-[#26012b] dark:via-[#0f0720] dark:to-[#0b0124] transition-all  from-red-50 to-orange-50`}>
            {children}
        </div>
    )
}



