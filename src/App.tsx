import {Wrapper} from "./shared/Wrapper"
import Typewriter from 'typewriter-effect';
import {Navigation,About,ContactUs,Homepage,Pricing,Testimonials,Project} from "./sections/index.js";

const App = () =>{
  return(
    <div>
      <Navigation/>
      <About/>
      <ContactUs/>
      <Homepage/>
      <Pricing/>
      <Testimonials/>
      <Project/>
    </div>
  )
}

export default App