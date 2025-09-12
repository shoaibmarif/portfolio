import {
  Navigation,
  About,
  ContactUs,
  Homepage,
  Pricing,
  Testimonials,
  Services,
  Certificates,
  Footer,
  Projects
} from "./sections/index.js";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Particles from "./components/Particles.jsx";
const App = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const topLayer = useRef();
  const navigate = useNavigate();
  const [showTopLayer, setShowTopLayer] = useState(true);

  useEffect(() => {
    AOS.init({ once: false, disable: "mobile" });
    navigate("/");

    const loadingTimeout = setTimeout(() => {
      setShowTopLayer(false);
    },1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <React.Fragment>
         {/* {showTopLayer && (
            <div
              className="h-[100vh] w-[100vw] z-[9999] fixed grid grid-cols-2 top-0 left-0 z-50"
              ref={topLayer}
            >
              <div className="col-span-1 bg-orange-400 z-50 screen_animation"></div>
              <div className="col-span-1 bg-orange-400 z-50 screen_animation"></div>
            </div>
          )} */}

          {/* {showTopLayer && (<div ref={topLayer}>
            <div className="fixed w-1/2 h-[100vh] bg-[#181818] animate_left" style={{zIndex:"999"}}></div>
            <div className="fixed w-1/2 right-0 h-[100vh] bg-[#181818] animate_right" style={{zIndex:"999"}}></div>
          </div>)} */}
      <div className="absolute w-full h-full z-[1] ">
                <Particles
                  particleColors={['#ffffff', '#ffffff']}
                  particleCount={2000}
                  particleSpread={10}
                  speed={.1}
                  particleBaseSize={120}
                  moveParticlesOnHover={false}
                  alphaParticles={true}
                  disableRotation={false}
                  cameraDistance={20}
                  
                />
      </div>
      
      <div className={`${darkMode ? "dark" : ""}`}>
        <React.Fragment>
          {/* {showTopLayer && (
            <div
              className="h-[100vh] w-[100vw] z-[9999] fixed grid grid-cols-2 top-0 left-0 z-50"
              ref={topLayer}
            >
              <div className="col-span-1 bg-orange-400 z-50 screen_animation"></div>
              <div className="col-span-1 bg-orange-400 z-50 screen_animation"></div>
            </div>
          )} */}
          <div className="">
            <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
            <div id="home">
              <Homepage />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="certificates">
              <Certificates />
            </div>
            {/* <div id="pricing">
              <Pricing />
            </div> */}
            <div id="projects">
              <Projects />
            </div>
            <div id="testimonials">
              <Testimonials />
            </div>
            <div id="contact">
              <ContactUs
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
            </div>
            {/* <Footer /> */}
            {/* <a
                target="_blank"
                data-aos-once="false"
                href="https://wa.me/923357591625?text=Hello%20Shoaib!%20I%20got%20your%20contact%20number%20from%20your%20website..."
                className="fixed__button__wrapper fixed bottom-10 right-10 dark:bg-primary-dark bg-primary rounded-full cursor-pointer z-[1000]"
                data-aos="fade-left"
              >
                <FaWhatsapp color="white" />
              </a> */}
          </div>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default App;
