import { Navigation, About, ContactUs, Homepage, Pricing, Testimonials, Services, Footer } from "./sections/index.js";
import React, { useEffect, useState, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from "react-icons/fa";
import { Certificates } from "./sections/Certificates/Certificates.jsx";
import { useNavigate } from "react-router-dom";
import { Loader } from "./shared/Loader/Loader.jsx";

const App = () => {
  const [selectedPlan,setSelectedPlan] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const topLayer = useRef();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [showTopLayer, setShowTopLayer] = useState(true); // New state variable

  useEffect(() => {
    AOS.init();
    navigate('/home');

    setTimeout(() => {
      setLoader(false);
      setTimeout(() => {
        setShowTopLayer(false); // Hide the top layer after 500 ms
      }, 500); // 500 milliseconds
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <div className={`${darkMode ? "dark" : ""}`}>
        {loader ? <Loader /> :
          <React.Fragment>
            {showTopLayer && ( // Conditional rendering for topLayer
              <div className="h-[100vh] w-[100vw] z-[9999] fixed grid grid-cols-6 top-0 left-0" ref={topLayer}>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
              </div>
            )}
            <div className="bg-gradient-to-r from-[#101010] via-[#161616] dark:to-[#101010]">
              <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
              <div id="home"><Homepage /></div>
              <div id="services"><Services /></div>
              <div id="about"><About /></div>
              <div id="certificates"><Certificates /></div>
              <div id="pricing"><Pricing /></div>
              <div id="testimonials"><Testimonials /></div>
              <div id="contact"><ContactUs selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} /></div>
              <Footer />
                <a target="_blank" href="https://wa.me/923357591625?text=Hello%20Shoaib!%20I%20got%20your%20contact%20number%20from%20your%20website..." className="fixed__button__wrapper fixed bottom-10 right-10 dark:bg-primary-dark bg-primary rounded-full cursor-pointer z-[10]" data-aos="fade-left">
                  <FaWhatsapp color="white" />
                </a>
            </div>
          </React.Fragment>
        }
      </div>
    </React.Fragment>
  );
}

export default App;
