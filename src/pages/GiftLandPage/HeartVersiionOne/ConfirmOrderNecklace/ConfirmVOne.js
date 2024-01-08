import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCheckCircle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ConfirmVOne = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const onSubmit = async () => {
    setLoading(true);
    const orderDetails = {
      cartItems: state.cartItems,
      totalPrice: state.totalPrice,
      location: state.location,
      name: state.name,
      mobileNumber: state.mobileNumber,
      deliveryAdderss: state.deliveryAdderss,
      color: state.color,
      giftImage: state.giftImage,
    };

    try {
      const response = await fetch(
        "https://mockup-todos-server.vercel.app/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderDetails),
        }
      );

      if (response.ok) {
        console.log("Order placed successfully!");
        navigate("/confirm-thank-you", { state: orderDetails });
      } else {
        console.error("Failed to place the order");
      }
    } catch (error) {
      console.error("Error while making the request:", error);
    }
  };

  const anotherSubmit = async () => {
    const orderDetails = {
      cartItems: state.cartItems,
      totalPrice: state.totalPrice,
      location: state.location,
      name: state.name,
      mobileNumber: state.mobileNumber,
      deliveryAdderss: state.deliveryAdderss,
      color: state.color,
      giftImage: state.giftImage,
    };

    navigate("/offer-jwelery-box", { state: orderDetails });
  };

  return (
    <div>
      <div>
        <div className=" bg-gradient-to-t from-[#DA3750] to-[#9A072F] lg:h-[500px] h-[400px]">
          <div className=" flex justify-center lg:pt-6 pt-3  lg:pb-6 pb-3">
            <img
              className="lg:w-[10%] w-[30%]"
              src="https://gifolo.com/wp-content/uploads/2022/10/Wait.webp"
              alt=""
            />
          </div>
          <h1 className="text-center text-white lg:text-[50px] text-[32px] leading-tight  font-bold">
            ওয়েট, একটু দাঁড়ান
          </h1>
          <h1 className="text-center text-white lg:text-[26px] text-[18px] leading-tight lg:ml-0 ml-5 lg:mr-0 mr-5 mt-4">
            আপনি আমাদের একটি নেকলেস কিনেছেন, তাই আপনার জন্য রয়েছে একটি{" "}
            <strong className="lg:text-[28px] text-[22px]">
              {" "}
              আকর্শনীয় অফার
            </strong>
          </h1>
        </div>
      </div>

      <div className=" lg:flex lg:justify-center lg:-mt-40  -mt-28">
        <div className=" lg:w-3/4">
          <div>
            <div className=" lg:flex lg:justify-center lg:items-end">
              <div className=" lg:text-end text-center lg:mb-20 mr-5 lg:block hidden ">
                <Link className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-2 py-2 ">
                  অর্ডার করুন
                </Link>
              </div>

              <div>
                <div className="  lg:mr-4 lg:ml-3 mr-4 ml-4 mb-6">
                  <video
                    className="border-4 lg:w-[400px] border-[#98042F] rounded-3xl"
                    controls
                  >
                    <source
                      src="https://gifolo.com/wp-content/uploads/2022/12/MgHeart-v2-website-ad.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              <div className=" lg:text-end text-center ml-5 lg:mb-20">
                <Link className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-2 py-2 ">
                  অর্ডার করুন
                </Link>
              </div>
            </div>
            <div>
              <h1 className=" text-[#98042F] font-semibold lg:text-[24px] text-[20px] text-center mt-6 mb-16">
                জুয়েলারি বক্সটি এখনই অর্ডার করলে পাচ্ছেন{" "}
                <strong className="lg:text-[28px] text-[26px]">৬০% ছাড়</strong>
              </h1>
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
                <button
                  onClick={anotherSubmit}
                  className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-2 py-2 "
                >
                  অর্ডার করুন
                </button>
              </div>
              <div className="lg:text-start text-center mt-3 ">
                <button
                  onClick={onSubmit}
                  className="bg-[#E78F0B] rounded text-white lg:text-[26px] text-[20px] font-bold lg:px-9 px-6 lg:py-4 py-3 "
                  disabled={loading}
                >
                  {loading ? (
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "আমার অফার লাগবে না"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmVOne;
