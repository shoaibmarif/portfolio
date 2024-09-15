import React from 'react';
import { Wrapper } from "../../shared/Wrapper.tsx";
import { Toggler } from '../../shared/Toggler/Toggler.jsx';

export const Navigation = () => {
    return (
        <div className='bg-black'>
            <Wrapper classes='flex items-center justify-between  text-white py-4'>
                <ul className='flex flex-row items-center'>
                    <li className='px-5 cursor-pointer flex flex-col justify-start border-l-2 border-red-700'><span className='text-xs text-red-700 font-semibold'>01</span><span className='text-sm'>Home</span></li>
                    <li className='px-5 cursor-pointer flex flex-col justify-start border-l-2 border-red-700'><span className='text-xs text-red-700 font-semibold'>02</span><span className='text-sm'>Services</span></li>
                    <li className='px-5 cursor-pointer flex flex-col justify-start border-l-2 border-red-700'><span className='text-xs text-red-700 font-semibold'>03</span><span className='text-sm'>Project</span></li>
                    <li className='px-5 cursor-pointer flex flex-col justify-start border-l-2 border-red-700'><span className='text-xs text-red-700 font-semibold'>04</span><span className='text-sm'>About Us</span></li>
                    <li className='px-5 cursor-pointer flex flex-col justify-start border-l-2 border-red-700'><span className='text-xs text-red-700 font-semibold'>05</span><span className='text-sm'>Pricing</span></li>
                    <li className='px-5 cursor-pointer flex flex-col justify-start border-l-2 border-red-700'><span className='text-xs text-red-700 font-semibold'>06</span><span className='text-sm'>Testimonials</span></li>
                    <li className='px-5 cursor-pointer flex flex-col justify-start border-l-2 border-red-700'><span className='text-xs text-red-700 font-semibold'>07</span><span className='text-sm'>Contact Us</span></li>
                </ul>
                <Toggler/>

            </Wrapper>
            </div>
    );
};
