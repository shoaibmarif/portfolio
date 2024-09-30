import { Wrapper } from "./shared/Wrapper";
import { Navigation, About, ContactUs, Homepage, Pricing, Testimonials, Services, Footer } from "./sections/index.js";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from "react-icons/fa";
import {Certificates} from "./sections/Certificates/Certificates.jsx";
import {useNavigate} from "react-router-dom"

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
      window.location.pathname.trim() === "/" ? navigate('/home'): null; 
  
  }, []);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <div id="home"><Homepage /></div>
      <div id="services"><Services /></div>
      <div id="about"><About /></div>
      <div id="pricing"><Pricing /></div>
      <div id="certificates"> <Certificates /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><ContactUs /></div>
      <Footer />
      <div className="fixed__button__wrapper fixed bottom-10 right-10 bg-gradient-to-r from-[#a56ab6] via-[#b23fd1d2] to-[#a56ab6] rounded-full cursor-pointer z-[999]">
        <FaWhatsapp color="white" />
      </div>
    </div>
  );
}

export default App;
