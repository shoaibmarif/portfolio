import { Navigation, About, ContactUs, Homepage, Pricing, Testimonials, Services, Footer } from "./sections/index.js";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from "react-icons/fa";
import {Certificates} from "./sections/Certificates/Certificates.jsx";
import {useNavigate} from "react-router-dom"
import {Loader} from "./shared/Loader/Loader.jsx"
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();
  const [loader,setLoader] = useState(true);
  useEffect(() => {
    AOS.init();
      window.location.pathname.trim() === "/" ? navigate('/home'): null; 

      setTimeout(() =>{
        setLoader(false)
      },2000)
  }, []);



  return (
<React.Fragment>
           
<div className={`${darkMode ? "dark" : ""}`}>
   {loader ? <Loader/> : 
             <React.Fragment>
         {/* <div className="h-[100vh] w-[100vw] z-[9999] fixed grid grid-cols-6 top-0 left-0">
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
                <div className="col-span-1 bg-[#101010] screen_animation"></div>
            </div>  */}
          <div className="bg-gradient-to-r from-[#101010] via-[#161616] dark:to-[#101010]">
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
            <div id="home"><Homepage /></div>
            <div id="services"><Services /></div>
            <div id="about"><About /></div>
            <div id="pricing"><Pricing /></div>
            <div id="certificates"> <Certificates /></div>
            <div id="testimonials"><Testimonials /></div>
            <div id="contact"><ContactUs /></div>
            <Footer />
            <div className="fixed__button__wrapper fixed bottom-10 right-10 dark:bg-primary-dark bg-primary  rounded-full cursor-pointer z-[999]">
              <FaWhatsapp color="white" />
            </div>
            </div>
            </React.Fragment>
   }
   </div> 

 
    </React.Fragment>
  );
}

export default App;
