import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCheckCircle } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HeartSlider = () => {
  return (
    <div className=" flex justify-center mb-16">
      <div className=" lg:w-[75%] w-[96%] bg-[#F5E3E5] border-2 rounded-lg border-[#98042F]">
        <div className=" lg:flex lg:justify-center lg:items-center pt-4 pb-4">
          <div className=" lg:w-[380px]">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="  lg:mr-4 lg:ml-3 mr-6 ml-6 mb-4">
                  <img
                    className=" border-4 lg:w-[360px] border-[#98042F] rounded-3xl"
                    src="https://gifolo.com/wp-content/uploads/2023/03/box-v2-bg-7.webp"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="  lg:mr-4 lg:ml-3 mr-6 ml-6 mb-4">
                  <img
                    className=" border-4 lg:w-[360px] border-[#98042F] rounded-3xl"
                    src="https://gifolo.com/wp-content/uploads/2022/12/MgHeartV2-Gif.gif"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
          </div>

          <div className=" lg:mr-3 lg:ml-0 ml-3">
            <h1 className=" text-[#98042F] lg:text-[29px] text-[20px] font-bold lg:mb-6 lg:text-start text-center">
              {" "}
              নেকলেসটির সাথে যা যা পচ্ছেন:
            </h1>
            <h1 className=" flex  lg:mb-4">
              <FaCheckCircle className=" text-[#98042F] lg:text-2xl text-[27px] lg:pt-0 pt-2 " />{" "}
              <span className=" text-[#BF3D4B] text-[20px] pl-2">
                গোল্ডেন অথবা সিলভার কালার নেকলেস
              </span>
            </h1>
            <h1 className=" flex   lg:mb-4">
              <FaCheckCircle className=" text-[#98042F] lg:text-2xl text-[27px]   lg:pt-0 pt-2" />{" "}
              <span className=" text-[#BF3D4B] text-[20px] pl-2">
                প্রিমিয়াম Queeneo নেকলেস বক্স
              </span>
            </h1>
            <h1 className=" flex   lg:mb-4">
              <FaCheckCircle className=" text-[#98042F] lg:text-2xl text-[27px]   lg:pt-0 pt-2" />{" "}
              <span className=" text-[#BF3D4B] text-[20px] pl-2">
                প্রিমিয়াম প্যাকেজিং
              </span>
            </h1>
            <h1 className=" flex   lg:mb-4">
              <FaCheckCircle className=" text-[#98042F] lg:text-2xl text-[27px]   lg:pt-0 pt-2" />{" "}
              <span className=" text-[#BF3D4B] text-[20px] pl-2">
                Queeneo Authenticity Card
              </span>
            </h1>
            <h1 className=" flex  ">
              <FaCheckCircle className=" text-[#98042F] lg:text-2xl text-[27px]   lg:pt-0 pt-2" />{" "}
              <span className=" text-[#BF3D4B] text-[20px] pl-2">
                Queeneo Coupon Code and User manual
              </span>
            </h1>
            <div>
              <h1 className="text-[#510009] lg:text-start text-center line-through text-[27px] font-[500]">
                রেগুলার মূল্য: ৳1090
              </h1>
              <h1 className=" text-[#98042F]  lg:text-start text-center text-[27px] font-[500]">
                অফার মূল্য: ৳790
              </h1>
            </div>
            <div className="lg:text-start text-center mt-6 ">
              <Link className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-2 py-2 ">
                অর্ডার করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartSlider;
