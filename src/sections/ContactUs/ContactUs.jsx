import React from 'react';
import { ContentWrapper } from '../../shared/ContentWrapper';
import { MdOutlineMail } from "react-icons/md";

export const ContactUs = () => {
    return (
        <ContentWrapper>
            <div className="grid grid-cols-2 gap-8">
                <div className='col-span-1'>
                    <h2 className='text-white text-4xl font-semibold'>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis dolore, eaque laboriosam excepturi dolorem incidunt rerum est nostrum dolores adipisci repellendus corporis sunt! Ipsum facilis illum optio quis minima.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ad illo accusamus quos! Eligendi ipsa, magni cum sapiente quidem nihil illum odio quaerat maiores similique sed repellendus vitae consectetur non!</p>

                    <div class=" flex flex-col gap-x-7 py-6">
                        <div class="flex items-center justify-start">
                            <MdOutlineMail color="white" size={"60px"} />
                            <div className='ml-5'>
                                <h3 class="font-semibold text-gray-800 dark:text-neutral-200">Contact us by email</h3>
                                <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">If you wish to write us an email instead please use</p>
                                <a href="mailto:shoaibmuhammadarif@gmail.com" class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                                    shoaibmuhammadarif@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
                        <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                            Fill in the form
                        </h2>

                        <form>
                            <div class="grid gap-4">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label for="hs-firstname-contacts-1" class="sr-only">First Name</label>
                                        <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="First Name" />
                                    </div>

                                    <div>
                                        <label for="hs-lastname-contacts-1" class="sr-only">Last Name</label>
                                        <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div>
                                    <label for="hs-email-contacts-1" class="sr-only">Email</label>
                                    <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Email" />
                                </div>

                                <div>
                                    <label for="hs-phone-number-1" class="sr-only">Phone Number</label>
                                    <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Phone Number" />
                                </div>

                                <div>
                                    <label for="hs-about-contacts-1" class="sr-only">Details</label>
                                    <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Details"></textarea>
                                </div>
                            </div>

                            <div class="mt-4 grid">
                                <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
                            </div>

                            <div class="mt-3 text-center">
                                <p class="text-sm text-gray-500 dark:text-neutral-500">
                                    We'll get back to you in 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    )
}