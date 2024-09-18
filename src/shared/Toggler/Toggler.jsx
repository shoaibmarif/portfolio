import React from 'react';
import "./Toggler.css";
export const Toggler = ({ darkMode, setDarkMode }) => {

    return (
        <React.Fragment>
            <label htmlFor="toggler" className='toggler'>
                <span className='sun' ></span>
                <span className='moon' ></span>
                <input htmlFor="toggler" id="toggler" type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            </label>
        </React.Fragment>
    )
}