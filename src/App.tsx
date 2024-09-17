import {Wrapper} from "./shared/Wrapper"
import {Navigation,About,ContactUs,Homepage,Pricing,Testimonials,Project , Services} from "./sections/index.js";

const App = () =>{
  return(
    <div>
      <Navigation/>
      <Homepage/>
      <Services />
      <About/>
      {/* <ContactUs/> */}
      {/* <Pricing/> */}
      {/* <Testimonials/> */}
      <Project/>
    </div>
  )
}

export default App