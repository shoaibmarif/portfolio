import React, { useRef } from "react";
import { ContentWrapper } from "../../shared/ContentWrapper";
import { MdOutlineMail } from "react-icons/md";
import { TopHeading } from "../../shared/TopHeading";
import { MdOutlinePhone } from "react-icons/md";
import emailjs from "emailjs-com";

export const ContactUs = () => {
  const form = useRef();

  // Function to handle sending the email
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submission

    // Use emailjs to send the form data
    emailjs
      .sendForm(
        "portfolio", // Replace with your EmailJS Service ID
        "template_ml32ypq", // Replace with your EmailJS Template ID
        form.current, // Reference to the form element
        "AdVjL5rFnkyVHS9mI" // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("An error occurred. Please try again.");
        }
      );
  };
  return (
    <ContentWrapper classes={"py-16 z-[100] bg-[#1b1b1b]"}>
      <TopHeading title={"Contact"} />
      <div className="grid grid-cols-6 gap-12 mt-16 ">
        <div className="col-span-6 lg:col-span-3 text-sm lg:text-[15px] dark:text-gray-300 text-[#0c0c0c]  pb-10">
          <p data-aos="fade-right" data-aos-duration="700">
            Have a project or idea to transform into a dynamic web or app
            solution?
          </p>
          <p className="my-8" data-aos="fade-right" data-aos-duration="700">
            Reach out, and let's create custom digital experiences tailored to
            your needs.
          </p>

          <div
            className=" flex flex-col items-start justify-between"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="flex items-center  dark:text-white text-[#0c0c0c]">
              <MdOutlineMail className="text-primary-dark size-[3rem] lg-[4rem]" />
              <div className="ml-5">
                <a href="mailto:shoaibmuhammadarif@gmail.com">
                  <h3 className="font-semibold text-primary-dark uppercase text-lg lg:text-xl ">
                    Contact me by Email
                  </h3>
                  <span className=" inline-flex items-center gap-x-2 text-sm lg:text-[15px] font-medium text-gray-300 ">
                    shoaibmuhammadarif@gmail.com
                  </span>
                </a>
              </div>
            </div>
            <div className="bg-gray-200 w-[50%] h-[2px] my-6 "></div>
            <div className="flex items-center justify-start dark:text-white text-[#0c0c0c]">
              <MdOutlinePhone className="text-primary-dark size-[3rem] lg-[4rem]" />
              <div className="ml-5">
                <a href="tel:+923357591625">
                  <h3 className="font-semibold text-primary-dark uppercase text-lg lg:text-xl ">
                    Contact me by Number
                  </h3>
                  <span className=" inline-flex items-center gap-x-2 text-sm lg:text-[15px]  font-medium text-gray-300 ">
                    +92-335-7591625
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3 lg:ml-auto">
          <div
            className="min-w-[100%] lg:min-w-[400px] items-center bg-[#1f1f1f] justify-center flex flex-col  rounded-xl py-10 px-8 shadow-[0px_0px_2px_0px_#dedede]"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200 ">
              Fill in the form
            </h2>
            <form className="w-full" ref={form} onSubmit={sendEmail}>
              <div className="grid gap-4">
                <InputField
                  name={"name"}
                  type="text"
                  classes={""}
                  placeholder="First Name"
                />
                <InputField
                  name={"email"}
                  type="email"
                  placeholder="Enter Email"
                />
                <textarea
                  id="details"
                  name="details"
                  rows="4"
                  className=" py-3 px-4 block w-full rounded-lg text-sm border-transparent border-[2px] outline-none focus:border-primary-dark"
                  placeholder="Enter Details"
                ></textarea>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="w-full py-2 bg-primary-dark text-white rounded-lg"
                >
                  Send Inquiry
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm lg:text-[15px] text-gray-300">
                  Typically responds in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

const InputField = ({ type, classes, id, placeholder, name }) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      className={`${classes} py-3 px-4 block w-full rounded-lg border-[2px] border-transparent text-sm outline-none focus:border-2 focus:border-primary-dark`}
      id={id}
    />
  );
};
