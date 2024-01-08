import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

const OneOrderThankYouPage = () => {
  const phoneNumber = "tel:+8801632342723";

  const handleButtonClick = () => {
    window.location.href = phoneNumber;
  };
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <div>
        <div className=" bg-gradient-to-t from-[#DA3750] to-[#9A072F] lg:h-[450px] h-[350px]">
          <div className=" flex justify-center lg:pt-6 pt-3  lg:pb-6 pb-3">
            <img
              className="lg:w-[10%] w-[30%]"
              src="https://gifolo.com/wp-content/uploads/2022/11/thumbs-up-emoji-gif.gif"
              alt=""
            />
          </div>
          <h1 className="text-center text-white lg:text-[44px] text-[32px] leading-tight  font-bold mb-4">
            অর্ডার সাবমিট হয়েছে
          </h1>
          <h1 className="lg:w-[53%] w-[84%] mx-auto text-center text-white lg:text-[22px] text-[16px]  ">
            নেকলেসটি অর্ডার করার জন্য আপনাকে অসংখ্য ধন্যবাদ। আমাদের একজন
            প্রতিনিধি দ্রুত আপনার নাম্বারে কল করে নেকলেসটি আপনার ঠিকানায়
            <strong className="lg:text-[28px] text-[18px] mr-1">
              {" "}
              হোম ডেলিভারি
            </strong>
            পাঠিয়ে দিবে।
          </h1>
        </div>
      </div>

      <div className="flex justify-center ">
        <div>
          <img src={state.giftImage} alt="" />

          {state.cartItems.map((item) => (
            <div key={item.id}>
              {/* Render each item */}
              <h1 className=" text-[#98042F] text-[20px] text-center font-bold mb-3">
                {item.giftName}
              </h1>
              <p className=" text-center text-[#BD3947] text-[25px] mb-8">
                মূল্যঃ ৳{item.total}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-center mb-16">
        <div className=" lg:w-[55%] w-[96%] bg-[#F5E3E5] border-2 rounded-lg border-[#98042F]">
          <div className=" lg:flex lg:justify-center lg:items-center pt-4 pb-4">
            <div className=" lg:mr-3 lg:ml-0 ">
              <div>
                {state.cartItems.map((item) => (
                  <div key={item.id}>
                    {/* Render each item */}

                    <p className=" text-center text-[#98042F] font-bold lg:text-[28px] text-[22px] lg:mb-8 mb-4">
                      মোটঃ ৳{item.total}+ ডেলিভারি চার্জ
                    </p>
                  </div>
                ))}
              </div>
              <div className=" flex justify-center">
                <div>
                  {state.cartItems.map((item) => {
                    // Convert item.total to a number using parseFloat or parseInt
                    const totalAsNumber = parseFloat(item.total); // Use parseFloat if the value can have decimals

                    return (
                      <div key={item.id}>
                        <h1 className="flex lg:mb-2 justify-end">
                          <FaCheckCircle className="text-[#98042F] lg:text-2xl text-[25px] lg:pt-0 pt-2" />
                          <span className="text-[#BF3D4B] lg:text-[24px] text-[18px] pl-1">
                            ঢাকার মধ্যেঃ {totalAsNumber} + 60 ={" "}
                            {totalAsNumber + 60}
                          </span>
                        </h1>
                      </div>
                    );
                  })}

                  {state.cartItems.map((item) => {
                    // Convert item.total to a number using parseFloat or parseInt
                    const totalAsNumber = parseFloat(item.total); // Use parseFloat if the value can have decimals

                    return (
                      <div key={item.id}>
                        <h1 className="flex justify-end lg:mb-4 mb-6">
                          <FaCheckCircle className="text-[#98042F] lg:text-2xl text-[25px] lg:pt-0 pt-2" />
                          <span className="text-[#BF3D4B] lg:text-[24px] text-[18px] pl-1">
                            ঢাকার বাহিরেঃ {totalAsNumber} + 100 ={" "}
                            {totalAsNumber + 100}
                          </span>
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>

              <h1 className=" text-[#98042F] lg:text-[20px] text-[14px] font-bold lg:mb-6  text-center lg:ml-0 ml-4 lg:mr-0 mr-4">
                {" "}
                (বাংলাদেশের সব জায়গাতে আপনি হোম ডেলিভারি পাবেন। তাই, কুরিয়ারে
                যাওয়ার ঝামেলা নেই। নেকলেসটি আপনার ডেলিভারি ঠিকানায় গিয়ে পৌঁছিয়ে
                দেওয়া হবে।)
              </h1>
            </div>
          </div>
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

export default OneOrderThankYouPage;
