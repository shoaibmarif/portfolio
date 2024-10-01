import React from 'react';
import { ContentWrapper } from '../../shared/ContentWrapper';
import { Wrapper } from "../../shared/Wrapper";

export const ContactUs = () => {
    return (
        <ContentWrapper>
            <Wrapper>
                <div className="grid grid-cols-2 gap-8">
                    <div className='col-span-1'>
                        <h2>Contact Us</h2>
                        <p>Some Text Here</p>
                        <p>Some Text here</p>

                        <div class=" flex flex-col gap-x-7 py-6">
                            <h2>Contact Us Heading </h2>
                            <p>Some text here</p>
                            <svg class="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
                            <div class="grow">
                                <h3 class="font-semibold text-gray-800 dark:text-neutral-200">Contact us by email</h3>
                                <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">If you wish to write us an email instead please use</p>
                                <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">
                                    example@site.com
                                </a>
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
            </Wrapper>

        </ContentWrapper>
    )
}