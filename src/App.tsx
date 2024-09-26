import { Wrapper } from "./shared/Wrapper";
import { Navigation, About, ContactUs, Homepage, Pricing, Testimonials, Project, Services , Footer } from "./sections/index.js";
import React, { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from "react-icons/fa";

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
        <Pricing />
        <Testimonials />
        {/* <Footer/> */}
        </div>
          <div className="fixed__button__wrapper fixed bottom-10 right-10 bg-[#662d91] rounded-full cursor-pointer z-[999] ">
            <FaWhatsapp color="white" />
        </div>
    </React.Fragment>
  );
}

export default App;
