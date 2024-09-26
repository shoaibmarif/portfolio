import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaTwitter,
    FaInstagram,
    FaStackOverflow,
  } from "react-icons/fa";
  
export const SocialIcon = () =>{
    return(
        <span className="mt-3 block rounded-full p-2 cursor-pointer social__wrapper  transition-all duration-300 hover:bg-[#1877F2]">
        <FaFacebookF className="dark:text-white " />
      </span>       
    )
}