import {Wrapper} from "./shared/Wrapper"
import {navigationLinks} from "./config/data";
import Typewriter from 'typewriter-effect';

const App = () =>{
  return(
    
    <div>
    

    
    <section className="h-dvh w-full bg-[#2E2E2E] text-white relative" style={{background: "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)"}}>
      {/* Social ICONS Here  */}
      <Wrapper classes="flex items-center flex-col ">
          <h1>Shoaib Arif</h1>
          <h2>React Developer | Frontend Developer | Full Stack Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum, quidem rem architecto non tempora enim soluta quia dolores molestias molestiae reiciendis, labore reprehenderit perspiciatis quisquam itaque quos, odio quas.</p>
          <div>
            <button>Download Resume</button>
            <button>Hire Me</button>
          </div>
      </Wrapper>
      
    </section>
    </div>
  )
}

export default App