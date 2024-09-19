import { Wrapper } from "./shared/Wrapper";
import { Navigation, About, ContactUs, Homepage, Pricing, Testimonials, Project, Services } from "./sections/index.js";
import React, { useEffect, useState } from "react";
import { createPortal } from 'react-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [darkMode,setDarkMode] = useState(true);

  useEffect(() =>{
    AOS.init()
  },[])
  return (
    <React.Fragment>

      <div className={`${darkMode ? "dark" : ""}  `}>
 
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Homepage />
        <Services /> 
        <About />
        {/* <Project /> */}
        {/* <ContactUs /> */}
        {/* <Testimonials /> */}
        <Pricing />
      </div>
    </React.Fragment>
  );
}

export default App;
