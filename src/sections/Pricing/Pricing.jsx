import React from 'react';
import {Wrapper} from "../../shared/Wrapper";
import { pricing } from '../../config/data';
import CheckMark from "../../../public/icons/check-mark.png";
import {ContentWrapper} from "../../shared/ContentWrapper";
import {TopHeading} from "../../shared/TopHeading";
import { FiCheckCircle } from "react-icons/fi";

export const Pricing = () => {
    return(
        <ContentWrapper>
        <Wrapper>
          
          <TopHeading title={"Pricing"}/>
            <div className='grid grid-cols-3 gap-12 '>
                {pricing.map((price,index) =>{
                    return(
                        <div key={price.plan} className={`cols-span-1  rounded-[20px] overflow-hidden bg-[#1f1f1f] text-white px-6 py-10 `}>
                            <div className='  flex flex-col items-center justify-between'>
                                <h2 className='font-bold  text-3xl uppercase text-[#6765F1]'>{price.plan}</h2>
                                <h2 className=' font-bold text-6xl mt-5 text-[#6765F1] '>{price.price}<span className='text-2xl'>.00</span></h2>
                                <p className='mb-8 mt-5'>Sample Text Regarding the pricing </p>
                                <span className='w-full h-[2px] bg-gray-500 mb-8'></span>
                                    <ul className='text-start w-full'>
                                        {price.features.map((feature,index) =>{
                                            return(
                                                <li className='mt-2 text-gray-200 flex items-center ' key={index}>
                                                <FiCheckCircle color='#6765F1' size={18}/>
                                                <span className='ml-3'>{feature}</span></li>
                                            )
                                        })}
                                    </ul>
                            </div>
                        </div>
                    )
                })}
            </div>           

        </Wrapper>
        </ContentWrapper>
    )
}