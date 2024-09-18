import { Wrapper } from "./shared/Wrapper";
import { Navigation, About, ContactUs, Homepage, Pricing, Testimonials, Project, Services } from "./sections/index.js";
import React, { useState } from "react";
import { createPortal } from 'react-dom';

const App = () => {
  const [darkMode,setDarkMode] = useState(true);


  return (
    <React.Fragment>
        {/* <GlobalAnimation /> */}
              {/* {createPortal(
           <React.Fragment>
           <div className="absolute h-full w-[1px] line-border top-0 left-[20%] "></div>
           <div className="absolute h-full w-[1px] line-border top-0 left-[80%]"></div>
           <div className="absolute w-full h-[1px] line-border-ver top-[12vh] left-[0%]"></div>
           <div className="absolute w-full h-[1px] line-border-ver top-[90vh] left-[0%]"></div>

           <span className="circle-fire-top size-[4px] absolute left-[20%] translate-x-[-50%] top-0 bg-white rounded-full"></span>
           <span className="circle-fire-top size-[4px] absolute left-[80%] translate-x-[-50%] top-0 bg-white rounded-full"></span>
           <span className="circle-fire-left size-[4px] absolute left-[0%] translate-y-[-50%] top-[12vh] bg-white rounded-full"></span>
           <span className="circle-fire-left size-[4px] absolute left-[0%] translate-y-[-50%] top-[90vh] bg-white rounded-full"></span>
            </React.Fragment>,
          document.body
        )} */}
      <div className={`${darkMode ? "dark" : ""}  `}>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Homepage />
        <Services /> 
        <About />
        <Project />
        {/* <ContactUs /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
