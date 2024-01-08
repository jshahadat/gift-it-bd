import React from "react";
import { Link } from "react-scroll";

const HeartTwoVideo = () => {
  return (
    <div>
      <div className=" lg:flex lg:justify-center lg:-mt-64 mt -mt-32">
        <div className=" lg:w-3/4">
          <div>
            <div className=" lg:flex lg:justify-center lg:items-end">
              <div className=" lg:text-end text-center lg:mb-20 mr-5 lg:block hidden ">
                <Link
                  to="order-form"
                  spy={true}
                  smooth={true}
                  className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-2 py-2 "
                >
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
                <Link
                  to="order-form"
                  spy={true}
                  smooth={true}
                  className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-2 py-2 "
                >
                  অর্ডার করুন
                </Link>
              </div>
            </div>
            <div>
              <h1 className=" text-[#98042F] font-semibold lg:text-[24px] text-[20px] text-center mt-6 mb-16">
                শুধু দামি জিনিসই নয়, সামান্য কিছু উপহারও আপনার প্রিয়জনকে খুশি
                করতে পারে।
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartTwoVideo;
