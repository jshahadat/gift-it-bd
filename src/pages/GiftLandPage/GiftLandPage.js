import React from "react";
import { Link, useNavigate } from "react-router-dom";

const GiftLandPage = () => {
  const navigate = useNavigate();
  const handleClickV1 = () => {
    navigate("/heart-v1");
  };

  const handleClickV2 = () => {
    navigate("/heart-v2");
  };
  const handleClickV3 = () => {
    navigate("/heart-v3");
  };
  const handleClickV4 = () => {
    navigate("/heart-v4");
  };
  const handleClickSunflowerNacklace = () => {
    navigate("/sunflower-necklace");
  };
  const handleClickSunflowerRing = () => {
    navigate("/sunflower-ring");
  };
  const handleClickJewlerBoxVersionOne = () => {
    navigate("/jewelry-box-v1");
  };
  const handleClickJewlerBoxVersionTwo = () => {
    navigate("/jewelry-box-v2");
  };
  return (
    <div>
      <div className=" lg:flex lg:justify-center lg:-mt-72 -mt-40">
        <div className=" lg:w-3/4">
          <div className=" flex justify-center">
            <div>
              <div className=" flex justify-center">
                <img
                  className="  lg:w-full w-[80%] text-center"
                  src="https://gifolo.com/wp-content/uploads/2022/10/giftimage.webp"
                  alt=""
                />
              </div>
              <div className=" flex justify-center">
                <Link className="lg:ml-10 rounded bg-[#98042F]  text-white lg:text-[41px] text-3xl font-bold lg:px-16 px-10  lg:py-5 py-3">
                  উপহার দিন
                </Link>
              </div>
            </div>
          </div>
          <h1 className=" text-center text-[#98042F] font-semibold lg:text-[24px] text-[20px] mt-6 lg:ml-0 lg:mr-0 ml-5 mr-5 ">
            শুধু দামি জিনিসই নয়, সামান্য কিছু উপহারও আপনার প্রিয়জনকে খুশি করতে
            পারে।
          </h1>
        </div>
      </div>

      <div className=" flex justify-center mt-20">
        <div className=" lg:w-3/4">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2">
            <div className=" flex justify-between items-center bg-[#F5E3E5]">
              <div className=" lg:w-[207px] w-[50%] lg:mr-4 lg:ml-3 mr-2 ml-2 mt-4 mb-4">
                <img
                  className=" border-2 border-[#98042F] rounded-3xl"
                  src="https://i.ibb.co/9b6LFdF/Gift-It-Gold.jpg"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" text-[#98042F] lg:text-4xl text-xl lg:mb-4 mb-1">
                  Necklace
                </h1>
                <h1 className="text-[#98042F] tracking-tighter leading-6 lg:text-4xl text-2xl font-bold lg:mr-4 mr-2 lg:mb-4 mb-2">
                  ফোর হার্ট নেকলেস V1
                </h1>
                <button
                  onClick={handleClickV1}
                  className="bg-[#98042F] rounded leading-6 text-white lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter"
                >
                  অর্ডার করুন
                </button>
              </div>
            </div>

            <div className=" flex justify-between items-center bg-[#98042F]">
              <div className=" lg:w-[207px] w-[50%] lg:mr-4 lg:ml-3 mr-2 ml-2 mt-4 mb-4">
                <img
                  className=" border-2 border-white rounded-3xl"
                  src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-pic-6.webp"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" text-slate-100 lg:text-4xl text-xl lg:mb-4 mb-1">
                  Necklace
                </h1>
                <h1 className="text-white tracking-tighter leading-6 lg:text-4xl text-2xl font-bold lg:mr-4 mr-2 lg:mb-4 mb-2">
                  ফোর হার্ট নেকলেস V2
                </h1>
                <button
                  onClick={handleClickV2}
                  className="text-[#98042F] rounded leading-6 bg-white lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter"
                >
                  অর্ডার করুন
                </button>
              </div>
            </div>

            <div className=" flex justify-between items-center bg-[#C9CBEC]">
              <div className=" lg:w-[207px] w-[50%] lg:mr-4 lg:ml-3 mr-2 ml-2 mt-4 mb-4">
                <img
                  className=" border-2 border-[#8D51A5] rounded-3xl"
                  src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-pic-6.webp"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" text-[#744189] lg:text-4xl text-xl lg:mb-4 mb-1">
                  Necklace
                </h1>
                <h1 className="text-[#744189] tracking-tighter leading-6 lg:text-4xl text-2xl font-bold lg:mr-4 mr-2 lg:mb-4 mb-2">
                  ফোর হার্ট নেকলেস V3
                </h1>
                <button
                  onClick={handleClickV3}
                  className="bg-[#744189] rounded leading-6 text-white lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter"
                >
                  অর্ডার করুন
                </button>
              </div>
            </div>

            <div className=" flex justify-between items-center bg-[#8D51A5]">
              <div className=" lg:w-[207px] w-[50%] lg:mr-4 lg:ml-3 mr-2 ml-2 mt-4 mb-4">
                <img
                  className=" border-2 border-white rounded-3xl"
                  src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-pic-6.webp"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" text-[#C9CBEC] lg:text-4xl text-xl lg:mb-4 mb-1">
                  Necklace
                </h1>
                <h1 className="text-white tracking-tighter leading-6 lg:text-4xl text-2xl font-bold lg:mr-4 mr-2 lg:mb-4 mb-2">
                  ফোর হার্ট নেকলেস V4
                </h1>
                <button
                  onClick={handleClickV4}
                  className="text-[#8D51A5] leading-6 rounded bg-white lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter"
                >
                  অর্ডার করুন
                </button>
              </div>
            </div>

            <div className=" flex justify-between items-center bg-[#FFE2B3]">
              <div className=" lg:w-[207px] w-[50%] lg:mr-4 lg:ml-3 mr-2 ml-2 mt-4 mb-4">
                <img
                  className=" border-2 border-[#8F6117] rounded-3xl"
                  src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-pic-6.webp"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" text-[#8F6117] lg:text-4xl text-xl lg:mb-4 mb-1">
                  Necklace
                </h1>
                <h1 className="text-[#8F6117] tracking-tighter leading-6 lg:text-4xl text-2xl font-bold lg:mr-4 mr-2 lg:mb-4 mb-2">
                  সানফ্লাওয়ার নেকলেস
                </h1>
                <button
                  onClick={handleClickSunflowerNacklace}
                  className="bg-[#8F6117] rounded leading-6 text-white lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter"
                >
                  অর্ডার করুন
                </button>
              </div>
            </div>

            <div className=" flex justify-between items-center bg-[#8F6117]">
              <div className=" lg:w-[207px] w-[150px] lg:mr-4 lg:ml-3 mr-2 ml-2 mt-4 mb-4">
                <img
                  className=" border-2 border-[#FFE2B3] rounded-3xl"
                  src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-pic-6.webp"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" text-[#FFE2B3] lg:text-4xl text-xl lg:mb-4 mb-1">
                  Ring
                </h1>
                <h1 className="text-white tracking-tighter leading-6 lg:text-4xl text-2xl font-bold lg:mr-4 mr-2 lg:mb-4 mb-2">
                  সানফ্লাওয়ার রিং
                </h1>
                <button
                  onClick={handleClickSunflowerRing}
                  className="bg-white leading-6 text-[#785010] rounded lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter"
                >
                  অর্ডার করুন
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center bg-[#DDF8F5]">
              <div className=" lg:w-[207px] w-[50%] lg:mr-4 lg:ml-3 mr-2 ml-2 mt-4 mb-4">
                <img
                  className=" border-2 border-[#134D33] rounded-3xl"
                  src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-pic-6.webp"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" text-[#134D33] lg:text-4xl text-xl lg:mb-4 mb-1">
                  Jewelry Box
                </h1>
                <h1 className="text-[#134D33] tracking-tighter leading-6 lg:text-4xl text-2xl font-bold lg:mr-4 mr-2 lg:mb-4 mb-2">
                  ট্রাভেল জুয়েলারি বক্স V1
                </h1>
                <button
                  onClick={handleClickJewlerBoxVersionOne}
                  className="bg-[#134D33] rounded leading-6 text-white lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter"
                >
                  অর্ডার করুন
                </button>
              </div>
            </div>
            <div className=" flex justify-between items-center bg-[#134D33]">
              <div className=" lg:w-[207px] w-[50%] lg:mr-4 lg:ml-3 mr-2 ml-2 mt-4 mb-4">
                <img
                  className=" border-2 border-[#DDF8F5] rounded-3xl"
                  src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-pic-6.webp"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" text-[#DDF8F5] lg:text-4xl text-xl lg:mb-4 mb-1">
                  Jewelry Box
                </h1>
                <h1 className="text-white tracking-tighter leading-6 lg:text-4xl text-2xl font-bold lg:mr-4 mr-2 lg:mb-4 mb-2">
                  ট্রাভেল জুয়েলারি বক্স V2
                </h1>
                <button
                  onClick={handleClickJewlerBoxVersionTwo}
                  className="bg-white rounded leading-6 text-[#134D33] lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter"
                >
                  অর্ডার করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftLandPage;
