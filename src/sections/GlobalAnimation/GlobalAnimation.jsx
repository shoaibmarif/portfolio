
import React, { createPortal } from 'react';

export const GlobalAnimation = () => {
    return createPortal(
        <React.Fragment>
            <div className="absolute h-full w-[1px] line-border top-0 left-[20%]"></div>
            <div className="absolute h-full w-[1px] line-border top-0 left-[80%]"></div>
        </React.Fragment>, document.body);
};

