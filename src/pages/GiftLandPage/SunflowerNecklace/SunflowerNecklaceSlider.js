import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCheckCircle, FaChevronCircleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-scroll";

const SunflowerNecklaceSlider = () => {
  return (
    <div>
      <div>
        <div>
          <div className=" lg:flex  lg:flex-row flex flex-col-reverse justify-center items-center">
            <div className=" lg:mr-3 lg:ml-0 ml-3">
              <h1 className=" text-[#98042F] lg:text-[29px] text-[25px] font-bold lg:mb-6 lg:text-start text-center">
                {" "}
                আমাদের থেকে নেকলেসটি কেন নিবেন?
              </h1>
              <h1 className=" flex lg:justify-end justify-start lg:mb-4">
                <FaCheckCircle className=" text-[#98042F] lg:text-2xl text-[27px]  lg:pt-0 pt-2" />{" "}
                <span className=" text-[#BF3D4B] text-[20px] ">
                  এটি অরিজিনাল <b>Queeneo</b> ব্র্যান্ডের নেকলেস।
                </span>
              </h1>
              <h1 className=" flex  lg:justify-end justify-start">
                <FaCheckCircle className=" text-[#98042F] lg:text-2xl text-[27px]   lg:pt-0 pt-2" />{" "}
                <span className=" text-[#BF3D4B] text-[20px]">
                  অথেনটিক <b>24k</b> গোল্ড প্লেটেড নেকলেস।
                </span>
              </h1>
              <div className=" lg:text-end text-center mt-6 ">
                <Link className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-2 py-2 ">
                  অর্ডার করুন
                </Link>
              </div>
            </div>

            <div>
              <div className="  lg:mr-4 lg:ml-3 mr-6 ml-6 mb-4">
                <img
                  className=" border-4 lg:w-[360px] border-[#98042F] rounded-3xl"
                  src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-pic-6.webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className=" mt-16 mb-16">
            <svg
              className="transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                style={{ fill: "#F5E3E5" }}
                className="elementor-shape-fill"
                opacity="0.33"
                d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
              ></path>
              <path
                style={{ fill: "#F5E3E5" }}
                class="elementor-shape-fill"
                opacity="0.66"
                d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
              ></path>
              <path
                style={{ fill: "#F5E3E5" }}
                class="elementor-shape-fill"
                d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
              ></path>
            </svg>
            <div className=" lg:flex lg:justify-center bg-[#F5E3E5]">
              <div className=" lg:w-[60%]">
                <div className=" lg:flex lg:justify-center lg:items-center">
                  <div className="  lg:mr-4 lg:ml-3 mr-6 ml-6 mb-4">
                    <img
                      className=" border-4 border-[#98042F] rounded-3xl"
                      src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-pic-6.webp"
                      alt=""
                    />
                  </div>
                  <div className=" lg:ml-0 ml-3 lg:mr-0 mr-3">
                    <h1 className=" text-[#98042F] lg:text-[36px] text-[25px] lg:text-start text-center font-bold lg:mb-5 mb-4">
                      নেকলেসটি আপনার প্রিয়জনের জন্য সেরা উপহার
                    </h1>

                    <div className="">
                      <h1 className=" text-[#C3404E] text-[19px] font-medium  flex lg:items-center items-start mb-2">
                        <img
                          className="lg:w-[25px] w-[25px] lg:mt-0 mt-1 mr-1"
                          src="https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg"
                          alt=""
                        />{" "}
                        আপনার প্রিয়জন নেকলেসটি প্রথম দেখাতেই পছন্দ করে ফেলবে।
                      </h1>
                    </div>

                    <div className=" flex lg:items-center items-start  mb-2">
                      <img
                        className="w-[25px]"
                        src="https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg"
                        alt=""
                      />
                      <h1 className=" text-[#C3404E] text-[19px] font-medium lg:ml-1">
                        {" "}
                        নেকলেসটি তার সৌন্দর্য্য অনেক বাড়িয়ে দিবে।
                      </h1>
                    </div>

                    <div className=" flex lg:items-center items-start mb-2">
                      <img
                        className="w-[25px]"
                        src="https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg"
                        alt=""
                      />
                      <h1 className=" text-[#C3404E] text-[19px] font-medium lg:ml-1">
                        {" "}
                        প্রিয়জনের সাথে আপনার সম্পর্ক আরও মধুর হবে।
                      </h1>
                    </div>

                    <div className=" flex lg:items-center items-start">
                      <img
                        className="w-[25px]"
                        src="https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg"
                        alt=""
                      />
                      <h1 className=" text-[#C3404E] text-[19px] font-medium lg:ml-1">
                        {" "}
                        আপনার কাছে সে কতটা মূল্যবান সেটি সে অনুভব করবে।
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="transform "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                style={{ fill: "#F5E3E5" }}
                className="elementor-shape-fill"
                opacity="0.33"
                d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
              ></path>
              <path
                style={{ fill: "#F5E3E5" }}
                class="elementor-shape-fill"
                opacity="0.66"
                d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
              ></path>
              <path
                style={{ fill: "#F5E3E5" }}
                class="elementor-shape-fill"
                d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
              ></path>
            </svg>
          </div>

          <div className=" lg:flex  lg:flex-row flex flex-col-reverse justify-center items-center">
            <div className=" lg:mr-3 lg:ml-0 ml-3">
              <h1 className=" text-[#98042F] lg:text-[29px] text-[25px] font-bold lg:mb-6 lg:text-start text-center">
                {" "}
                আমাদের থেকে নেকলেসটি কেন নিবেন?
              </h1>

              <h1 className=" flex lg:justify-end justify-start lg:mb-4">
                <FaChevronCircleRight className=" text-[#98042F] lg:text-2xl text-[27px]  lg:mpt-0 pt-2" />{" "}
                <span className=" text-[#BF3D4B] text-[20px] ">
                  তার সাথে আপনার সম্পর্ক আরও মধুর হবে।
                </span>
              </h1>

              <h1 className=" flex  lg:justify-end justify-start">
                <FaChevronCircleRight className=" text-[#98042F] lg:text-2xl text-[27px]  lg:mpt-0 pt-2" />{" "}
                <span className=" text-[#BF3D4B] text-[20px]">
                  আপনার কাছে সে কতটা মূল্যবান সেটি সে অনুভব করবে।
                </span>
              </h1>

              <h1 className=" flex  lg:justify-end justify-start">
                <FaChevronCircleRight className=" text-[#98042F] lg:text-2xl text-[27px]   lg:mpt-0 pt-2" />{" "}
                <span className=" text-[#BF3D4B] text-[20px]">
                  উপহারটি তাকে সব সময় মনে করাবে আপনার কথা।
                </span>
              </h1>

              <h1 className=" flex  lg:justify-end justify-start">
                <FaChevronCircleRight className=" text-[#98042F] lg:text-2xl text-[27px]   lg:mpt-0 pt-2" />{" "}
                <span className=" text-[#BF3D4B] text-[20px]">
                  তার প্রতি আপনার ভালবাসা আরও বেশি প্রকাশ পাবে।
                </span>
              </h1>

              <div className=" lg:text-end text-center mt-6 ">
                <Link className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-2 py-2 ">
                  অর্ডার করুন
                </Link>
              </div>
            </div>

            <div>
              <div className="  lg:mr-4 lg:ml-3 mr-6 ml-6 mb-4">
                <img
                  className=" border-4 lg:w-[360px] border-[#98042F] rounded-3xl"
                  src="https://gifolo.com/wp-content/uploads/2022/12/MgHeartV2-Gif.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default SunflowerNecklaceSlider;
