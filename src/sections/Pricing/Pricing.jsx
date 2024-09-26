import React from 'react';
import {Wrapper} from "../../shared/Wrapper"
import { pricing } from '../../config/data';
import CheckMark from "../../../public/icons/check-mark.png";
import {ContentWrapper} from "../../shared/ContentWrapper"

export const Pricing = () => {
    return(
        <ContentWrapper>
        <Wrapper>
            <div className="text-center  uppercase flex flex-col items-center justify-center text-white">
                <h2 className="text-5xl  font-bold text-stroke mt-5 mb-12 ">Pricing</h2>
            </div>

            <div className='grid grid-cols-3 gap-8 '>
                {pricing.map((price,index) =>{
                    return(
                        <div key={price.plan} className={`cols-span-1  rounded-[50px] overflow-hidden ${index == 1 ? "scale-105" : "scale-95"}`}>
                            <div className=' text-white bg-[#1f1f1f] p-10 flex flex-col items-center justify-between'>
                                <h2 className='font-bold  text-4xl uppercase'>{price.plan}</h2>
                                <h2 className=' font-bold text-6xl mt-3 '>{price.price}<span className='text-2xl'>.00</span></h2>
                            </div>
                            <ul className='p-10 pt-4 bg-[#1f1f1fa2]'>
                                {price.features.map((feature,index) =>{
                                    return(
                                        <li className='mt-3 flex flex-row items-center justify-start' key={index}>
                                            <span><img className='w-8' src={CheckMark} alt="" /></span>
                                            <span className='ml-3 text-gray-500'>{feature}</span></li>
                                    )
                                })}
                            </ul>
                            <div className='px-10 pb-10'>

                            <button className='
                            bg-white px-4 py-3 rounded-md block mx-auto w-full
                            '>Choose Plan</button>
                            </div>
                        </div>
                    )
                })}
            </div>           

        </Wrapper>
        </ContentWrapper>
    )
}