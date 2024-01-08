import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "tel:+8801632342723";

  const handleButtonClick = () => {
    window.location.href = phoneNumber;
  };
  return (
    <div className=" lg:flex lg:justify-around justify-center bg-[#F5E3E5] mb-5 pt-12 pb-20">
      <div className=" text-center lg:mb-0 mb-6">
        <h1 className="text-[#98042F] font-bold lg:text-[33px] text-[24px] lg:mb-5">
          আমাদের ওয়েবসাইটে
        </h1>
        <Link className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-2 py-2 ">
          অর্ডার করুন
        </Link>
      </div>

      <div className=" flex justify-center">
        <div>
          <h1 className="text-[#358A31] font-bold lg:text-[33px] text-[24px] text-center">
            অথবা ফোনে কল করুন
          </h1>
          <button
            onClick={handleButtonClick}
            className="bg-[#358A31] rounded  text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-6 lg:py-[15.3px] py-2  flex items-center"
          >
            <FaPhoneAlt className="mr-2" />
            01632342723
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
