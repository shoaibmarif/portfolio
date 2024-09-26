import React from "react";

export const ContentWrapper = ({ children, classes }) => {
    return (
        <div className={`${classes} dark:bg-[#101011] transition-all  from-red-50 to-orange-50`}>
            {children}
        </div>
    )
}



