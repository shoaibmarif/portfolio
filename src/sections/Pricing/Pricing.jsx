import React from 'react';
import { pricing } from '../../config/data';
import { ContentWrapper } from "../../shared/ContentWrapper";
import { TopHeading } from "../../shared/TopHeading";
import { FiCheckCircle } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";

export const Pricing = () => {
    return (
        <ContentWrapper classes={"w-full min-h-[70vh] py-16"}>
            <TopHeading title={"Pricing"} />
            <div className='grid grid-cols-3 gap-16 z-10 relative py-10 '>
                {pricing.map((price, index) => {
                    return (
                        <div key={price.plan} className={` cursor-pointer  relative cols-span-1  rounded-lg overflow-hidden bg-[#1f1f1f] text-white  shadow-[7px_7px_0px_#5b21b6]   transition-all ${index == 1 ? " scale-110" : ""}`}>
                            {/* Header  */}
                            <div className='flex text-white bg-[#a78bfa] items-center justify-center flex-col p-10'>
                                <h2 className='text-white text-5xl font-extrabold '>{price.price}</h2>
                                <p className='text-white font-bold text-2xl uppercase'>{price.plan}</p>
                            </div>
                            <div className='px-10 py-5 min-h-[400px] flex items-start justify-between flex-col'>
                                {price.features.map((plan, index2) => {
                                    return (
                                        <div className='flex flex-row items-center mt-4 text-sm' key={index2}><span><BsCheck2Circle size={20} /></span><span className='ml-4'>{plan}</span></div>
                                    )
                                })}
                                <button className='block text-center mx-auto bg-[#a78bfa] w-full rounded-md py-3 my-5'>Choose Plan</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </ContentWrapper>
    )
}