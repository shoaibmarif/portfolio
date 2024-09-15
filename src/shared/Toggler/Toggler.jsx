import React from 'react';
import "./Toggler.css";
export const Toggler = () => {
    return(
       <React.Fragment>
            <label htmlFor="toggler" className='toggler'>
                <span className='sun'></span>
                <span className='moon'></span>
                <input htmlFor="toggler" id="toggler" type="checkbox" />
            </label>
       </React.Fragment>
    )
}