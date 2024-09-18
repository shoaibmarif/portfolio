import { Wrapper } from "./shared/Wrapper";
import { Navigation, About, ContactUs, Homepage, Pricing, Testimonials, Project, Services } from "./sections/index.js";
import React from "react";

const App = () => {
  return (
    <div>
      <Navigation />
      <Homepage />
      <Services /> 
      <About />
      <Project />
      {/* <ContactUs /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
    </div>
  );
}

export default App;
