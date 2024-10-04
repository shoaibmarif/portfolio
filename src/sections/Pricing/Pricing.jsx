import React from 'react';
import { pricing } from '../../config/data';
import { ContentWrapper } from "../../shared/ContentWrapper";
import { TopHeading } from "../../shared/TopHeading";
import { FiCheckCircle } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";

export const Pricing = () => {
    return (
        <ContentWrapper>
            <TopHeading title={"Pricing"} />
            <div className='grid grid-cols-3 gap-16 z-10 relative '>
                {pricing.map((price, index) => {
                    return (
                        <div key={price.plan} className={`relative cols-span-1  rounded-lg overflow-hidden bg-[#1f1f1f] text-white  shadow-[inset_0px_0px_3px_0px_#7c3aed] ${index == 1 ? " scale-110": ""}`}>
                            {/* Header  */}
                            <div className='flex bg-white items-center justify-center flex-col p-10'>
                                <h2 className='text-primary-dark text-5xl font-extrabold '>{price.price}</h2>
                                <p className='text-primary-dark font-bold text-2xl uppercase'>{price.plan}</p>
                            </div>
                            <div className='px-10 py-7'>
                                {price.features.map((plan, index2) => {
                                    return (
                                        <div className='flex flex-row items-center mt-4' key={index2}><span><BsCheck2Circle size={20} /></span><span className='ml-4'>{plan}</span></div>
                                    )
                                })}
                                <button className='block text-center mx-auto bg-primary-dark w-full rounded-md py-3 mt-10'>Choose Plan</button>
                            </div>
                            {/* body  */}
                            {/* <div className='  flex flex-col items-center justify-between h-full text-center '>
                                <div>
                                    <h2 className='font-bold  text-3xl uppercase text-primary-dark'>{price.plan}</h2>
                                    <h2 className=' font-bold text-6xl mt-5 text-primary-dark'>{price.price}<span className='text-2xl'>.00</span></h2>
                                    <p className='mb-8 mt-5'>Sample Text Regarding the pricing </p>
                                    <span className='w-full h-[2px] bg-gray-500 mb-8'></span>
                                    <ul className='text-start w-full'>
                                        {price.features.map((feature, index) => {
                                            return (
                                                <li className='mt-5 text-gray-200 flex items-center ' key={index}>
                                                    <FiCheckCircle color='' className='text-violet-800' size={18} />
                                                    <span className='ml-3'>{feature}</span></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <button
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="mr-4 mt-5  text-white min-w-48 px-14 py-4 rounded-full font-semibold
                                            shadow-[0_0px_5px_0px_#A2A2A2] bottom-28">
                                    Choose Plan
                                </button>
                            </div> */}
                        </div>
                    )
                })}
            </div>
        </ContentWrapper>
    )
}