import React from 'react';
import {Wrapper} from "../../shared/Wrapper";
import Typewriter from 'typewriter-effect';
import { FaFacebookF , FaLinkedinIn , FaGithub , FaTwitter , FaInstagram} from "react-icons/fa";
export const Homepage = () => {
    
    
    return(
        <div className='relative flex items-center justify-center h-dvh bg-gradient-to-t from-black from-10% to-gray-950 to-90%'>
            <Wrapper classes='flex flex-col items-center justify-center text-center text-white'>
                <h1 className='font-extrabold uppercase text-[7rem] bg-gradient-to-r from-[#595cff] via-[#439cfb] to-[#e81cff] inline-block text-transparent bg-clip-text'>Shoaib Arif</h1>
                <h2 className='font-bold text-[4rem]'>
                <Typewriter
                    options={{
                        strings: [`Frontend Developer`, 'React Developer', 'Full Stack Developer'],
                        autoStart: true,
                        loop: true,
                        pauseFor:1500,
                        cursorClassName:"bg-gradient-to-b from-[#595cff] via-[#439cfb] to-[#e81cff] inline-block text-transparent bg-clip-text"
                    }}
                    />

                </h2>     
                 
                <p className='max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore, animi aut 
                    incidunt doloribus nihil maxime cumque numquam eveniet quia. Laborum molestiae voluptates possimus culpa harum eligendi autem ea sed!</p>
                <div className='mt-5'>
                    <button className='min-w-[200px] mt-5 py-4 px-6 border-2 border-[#595cff] mx-5'>Hire US</button>
                    <button className='min-w-[200px] mt-5 py-4 px-6 border-2 border-[#595cff] mx-5'>Download Resume</button>

                </div>
            </Wrapper>

            {/* Social Icon Here  */}
            <div className='absolute z-10  top-1/2 left-14 translate-y-[-55%]'>
                <span className='mt-4 block rounded-full p-3 border-2 cursor-pointer'>
                    <FaFacebookF color='white' size={20}/>
                </span>
                <span className='mt-4 block rounded-full p-3 border-2 cursor-pointer'>
                    <FaLinkedinIn color='white' size={20}/>
                </span>
                <span className='mt-4 block rounded-full p-3 border-2 cursor-pointer'>
                    <FaGithub color='white' size={20}/>
                </span>
                <span className='mt-4 block rounded-full p-3 border-2 cursor-pointer'>
                    <FaTwitter color='white' size={20}/>
                </span>
                <span className='mt-4 block rounded-full p-3 border-2 cursor-pointer'>
                    <FaInstagram color='white' size={20}/>
                </span>
            </div>

            

        </div>
    )
}