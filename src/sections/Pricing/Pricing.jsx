import React from 'react';
import { pricing } from '../../config/data';
import { ContentWrapper } from "../../shared/ContentWrapper";
import { TopHeading } from "../../shared/TopHeading";
import { FiCheckCircle } from "react-icons/fi";

export const Pricing = () => {
    return (
        <ContentWrapper>
            <TopHeading title={"Pricing"} />
            <div className='grid grid-cols-3 gap-12 z-10 relative '>
                {pricing.map((price, index) => {
                    return (
                        <div key={price.plan} className={`relative cols-span-1  rounded-[20px] overflow-hidden bg-[#1f1f1f] text-white px-6 py-10 `}>
                            <div className='  flex flex-col items-center justify-between h-full'>
                                <div>
                                    <h2 className='font-bold  text-3xl uppercase text-violet-800'>{price.plan}</h2>
                                    <h2 className=' font-bold text-6xl mt-5 text-violet-800'>{price.price}<span className='text-2xl'>.00</span></h2>
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
                            </div>
                        </div>
                    )
                })}
            </div>
        </ContentWrapper>
    )
}