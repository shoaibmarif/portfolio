import React from 'react';
import { ContentWrapper } from '../../shared/ContentWrapper';
import { MdOutlineMail } from "react-icons/md";
import { TopHeading } from "../../shared/TopHeading";
import { MdOutlinePhone } from "react-icons/md";

export const ContactUs = () => {
    return (
        <ContentWrapper classes={"py-16"}>
            <TopHeading title={"Contact"} />
            <div className="grid grid-cols-5 gap-12 mt-16 ">
                <div className='col-span-3 text-[15px] dark:text-white text-[#0c0c0c]  pb-10'>
                    <p data-aos="fade-right" data-aos-duration="700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis dolore, eaque laboriosam excepturi dolorem incidunt rerum est nostrum dolores adipisci repellendus corporis sunt! Ipsum facilis illum optio quis minima.</p>
                    <p className='mt-8' data-aos="fade-right" data-aos-duration="700">Lorem ipsum dolor, sit amet consectetur adolor, sit amet consectetur adipisicing elit. Autem ad illo accusamus quos! Eligendi ipsa, magni cum sapiente quidem nihil illum odio quaerat maiores similique sed repellendus vitae consectetur non!</p>
                    <p class="my-8" data-aos="fade-right" data-aos-duration="700">If you wish to write us an email instead please use</p>

                    <div class=" flex flex-col items-start justify-between" data-aos="fade-up" data-aos-duration="700">
                        <div class="flex items-center  dark:text-white text-[#0c0c0c]">
                            <MdOutlineMail className='text-primary-dark' size={"60px"} />
                            <div className='ml-5'>
                                <a href="mailto:shoaibmuhammadarif@gmail.com">
                                    <h3 class="font-semibold text-primary-dark uppercase text-xl">Contact me by Email</h3>
                                    <span class=" inline-flex items-center gap-x-2 text-[15px] font-medium ">
                                        shoaibmuhammadarif@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className='bg-gray-200 w-[50%] h-[2px] my-6 '></div>
                        <div class="flex items-center justify-start dark:text-white text-[#0c0c0c]">
                            <MdOutlinePhone className='text-primary-dark' size={"60px"} />
                            <div className='ml-5'>
                                <a href="tel:+923357591625">
                                    <h3 class="font-semibold text-primary-dark uppercase text-xl">Contact me by Number</h3>
                                    <span class=" inline-flex items-center gap-x-2 text-[15px] font-medium ">
                                        +92-335-7591625
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 ml-auto'>
                    <div class="min-w-[400px] items-center bg-[#1f1f1f] justify-center flex flex-col  rounded-xl py-10 px-8 shadow-[0px_0px_2px_0px_#dedede]" data-aos="zoom-in" data-aos-duration="700">
                        <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200 ">
                            Fill in the form
                        </h2>
                        <form className='w-full'>
                            <div class="grid gap-4">
                                <InputField type="text" classes={""} placeholder="First Name" />
                                <InputField type="email" placeholder="Enter Email" />
                                <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class=" py-3 px-4 block w-full rounded-lg text-sm border-transparent border-[2px] outline-none focus:border-primary-dark" placeholder="Enter Details"></textarea>
                            </div>

                            <div class="mt-4 grid">
                                <button type="submit" className="w-full py-2 bg-primary-dark text-white rounded-lg">Send Inquiry</button>
                            </div>

                            <div class="mt-3 text-center">
                                <p class="text-sm text-white">
                                    We'll get back to you in 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </ContentWrapper >
    )
}


const InputField = ({ type, classes, id, placeholder }) => {
    return (
        <input placeholder={placeholder} type={type} className={`${classes} py-3 px-4 block w-full rounded-lg border-[2px] border-transparent text-sm outline-none focus:border-2 focus:border-primary-dark`} id={id} />
    )
}