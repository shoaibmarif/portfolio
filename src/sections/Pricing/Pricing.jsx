import React from 'react';
import {Wrapper} from "../../shared/Wrapper"
import { pricing } from '../../config/data';
export const Pricing = () => {
    return(
        <div className="bg-gradient-to-r bg-[#150e24] from-[#26012b] via-[#0f0720] to-[#0b0124] py-16">
        <Wrapper>
            <div className="text-center  uppercase flex flex-col items-center justify-center text-white">
                <h2 className="text-8xl  font-bold text-stroke ">Pricing</h2>
            </div>

            <div className='grid grid-cols-3 gap-8'>
                {pricing.map((price) =>{
                    return(
                        <div key={price.plan} className="cols-span-1 bg-white rounded-3xl p-10">
                            <h2 className='text-center font-bold  text-[#a37eff] text-4xl'>{price.plan}</h2>
                            <h2 className='text-center font-bold text-6xl mt-5'>{price.price}</h2>
                            <hr  className='mt-8'/>
                            <ul className='mt-8'>
                                {price.features.map((feature,index) =>{
                                    return(
                                        <li className='mt-3 flex flex-row items-center justify-start' key={index}>
                                            {/* <span><img className='w-8' src={CheckMark} alt="" /></span> */}
                                            <span className='ml-3'>{feature}</span></li>
                                    )
                                })}
                            </ul>
                            <button className=''>Choose Plan</button>
                        </div>
                    )
                })}
            </div>           

        </Wrapper>
    </div>
    )
}