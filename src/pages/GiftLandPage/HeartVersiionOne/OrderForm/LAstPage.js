import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const LAstPage = () => {
  const phoneNumber = "tel:+8801632342723";

  const handleButtonClick = () => {
    window.location.href = phoneNumber;
  };
  return (
    <div>
      <div>
        <div className=" bg-gradient-to-t from-[#DA3750] to-[#9A072F] lg:h-[450px] h-[400px]">
          <div className=" flex justify-center lg:pt-6 pt-3  lg:pb-6 pb-3">
            <img
              className="lg:w-[10%] w-[30%]"
              src="https://gifolo.com/wp-content/uploads/2022/11/thumbs-up-emoji-gif.gif"
              alt=""
            />
          </div>
          <h1 className="text-center text-white lg:text-[44px] text-[32px] leading-tight  font-bold mb-4">
            দুইটি অর্ডার সাবমিট হয়েছে
          </h1>
          <h1 className="w-[53%] mx-auto text-center text-white lg:text-[22px] text-[18px]  ">
            দুইটি অর্ডার করার জন্য আপনাকে অসংখ্য ধন্যবাদ। আমাদের একজন প্রতিনিধি
            দ্রুত আপনার নাম্বারে কল করে নেকলেসটি এবং জুয়েলারি বক্সটি আপনার
            ঠিকানায়
            <strong className="lg:text-[28px] text-[22px] mr-1">
              {" "}
              হোম ডেলিভারি
            </strong>
            পাঠিয়ে দিবে।
          </h1>
        </div>
      </div>

      <div className=" lg:flex lg:justify-around justify-center bg-[#F2F2F2] mb-5 pt-12 pb-20">
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
    </div>
  );
};

export default LAstPage;
