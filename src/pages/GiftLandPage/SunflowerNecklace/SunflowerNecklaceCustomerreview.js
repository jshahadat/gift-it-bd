import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const SunflowerNecklaceCustomerreview = () => {
  const phoneNumber = "tel:+8801632342723";

  const handleButtonClick = () => {
    window.location.href = phoneNumber;
  };
  return (
    <div>
      <div>
        {" "}
        <div className="lg:flex lg:justify-center mt-16 mb-12">
          <div className="lg:w-3/4 ">
            <h2 className=" text-center text-[#222222] lg:text-5xl text-[25px] font-semibold">
              আমাদের কাস্টমার রিভিউ
            </h2>
            <div className=" flex justify-center">
              <img
                className=" text-center"
                src="https://gifolo.com/wp-content/uploads/2022/10/5stars-free-img-1-1.png"
                alt=""
              />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-2 gap-4 lg:ml-0 lg:mr-0 mr-4 ml-4">
              <div className=" bg-white shadow-xl rounded-xl hover:scale-105 duration-300">
                <figure className="px-10 pt-10">
                  <img
                    className="rounded-xl h-44 w-full"
                    src="https://gifolo.com/wp-content/uploads/2022/11/testimonial-1.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h1 className="text-[#7c7c7c] text-[16px]">
                    আমি নেকলেসটি নিয়ে যতটা আশা করেছিলাম তার থেকেও বেশি সুন্দর।
                    আমার ওয়াইফ নেকলেসটি পেয়ে খুবই খুশি হয়েছে। গিফোলোকে অনেক
                    ধন্যবাদ।
                  </h1>
                </div>
                <div className=" flex items-center mb-4">
                  <img
                    className="h-[80px] rounded-full mr-4 ml-5"
                    src="https://gifolo.com/wp-content/uploads/2022/11/1.webp"
                    alt=""
                  />
                  <h1 className=" text-[#98042F] text-xl font-bold">
                    Lamiya Bhabi
                  </h1>
                </div>
              </div>

              <div className=" bg-white shadow-xl rounded-xl hover:scale-105 duration-300">
                <figure className="px-10 pt-10">
                  <img
                    className="rounded-xl h-44 w-full"
                    src="https://gifolo.com/wp-content/uploads/2022/11/testimonial-1.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h1 className="text-[#7c7c7c] text-[16px]">
                    আমি নেকলেসটি নিয়ে যতটা আশা করেছিলাম তার থেকেও বেশি সুন্দর।
                    আমার ওয়াইফ নেকলেসটি পেয়ে খুবই খুশি হয়েছে। গিফোলোকে অনেক
                    ধন্যবাদ।
                  </h1>
                </div>
                <div className=" flex items-center mb-4">
                  <img
                    className="h-[80px] rounded-full mr-4 ml-5"
                    src="https://gifolo.com/wp-content/uploads/2022/11/1.webp"
                    alt=""
                  />
                  <h1 className=" text-[#98042F] text-xl font-bold">
                    Lamiya Bhabi
                  </h1>
                </div>
              </div>

              <div className=" bg-whiteshadow-xl rounded-xl hover:scale-105 duration-300">
                <figure className="px-10 pt-10">
                  <img
                    className="rounded-xl h-44 w-full"
                    src="https://gifolo.com/wp-content/uploads/2022/11/testimonial-1.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h1 className="text-[#7c7c7c] text-[16px]">
                    আমি নেকলেসটি নিয়ে যতটা আশা করেছিলাম তার থেকেও বেশি সুন্দর।
                    আমার ওয়াইফ নেকলেসটি পেয়ে খুবই খুশি হয়েছে। গিফোলোকে অনেক
                    ধন্যবাদ।
                  </h1>
                </div>
                <div className=" flex items-center mb-4">
                  <img
                    className="h-[80px] rounded-full mr-4 ml-5"
                    src="https://gifolo.com/wp-content/uploads/2022/11/1.webp"
                    alt=""
                  />
                  <h1 className=" text-[#98042F] text-xl font-bold">
                    Lamiya Bhabi
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" lg:flex lg:justify-evenly  mb-5 ">
          <div className=" text-center lg:mb-0 mb-6">
            <h1 className="text-[#98042F] font-bold lg:text-[33px] text-[24px] lg:mb-4">
              আমাদের ওয়েবসাইটে
            </h1>
            <Link
              to="order-form"
              spy={true}
              smooth={true}
              className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-4 py-2 "
            >
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
    </div>
  );
};

export default SunflowerNecklaceCustomerreview;
