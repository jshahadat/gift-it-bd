import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Banner from "../../Banner/Banner";
import CustomerReview from "./CustomerReview";
import { Link, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import PriyojonGift from "./PriyojonGift";
import BannerVideo from "./BannerVideo";
import HeartSlider from "./HeartSlider";

const OrderFrom = () => {
  const navigate = useNavigate();
  const phoneNumber = "tel:+8801632342723";

  const handleButtonClick = () => {
    window.location.href = phoneNumber;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedLocation, setSelectedLocation] = useState("In Dhaka");
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "ম্যাগনেটিক হার্ট নেকলেস V1 ", price: 400, quantity: 1 },
  ]);
  const [cartItemsSilver, setCartItemsSilver] = useState([
    { id: 1, name: "ম্যাগনেটিক হার্ট নেকলেস V1 ", price: 400, quantity: 1 },
  ]);

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const onSubmit = async (data) => {
    const orderDetails = {
      cartItems: cartItems.map((item) => ({
        id: item.id,
        giftName: item.name,
        quantity: item.quantity,
        total: (item.price * item.quantity).toFixed(2),
      })),
      totalPrice: calculateTotal().toFixed(2),
      location: selectedLocation,
      name: data.name,
      mobileNumber: data.mobileNumber,
      deliveryAdderss: data.address,
      color: "Golden Color",
      giftImage: "https://i.ibb.co/9b6LFdF/Gift-It-Gold.jpg",
    };
    navigate("/confirm-v1-nackclace", { state: orderDetails });
  };

  const handleExternalSubmit = () => {
    handleSubmit(onSubmit)();
  };

  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const increaseQuantitySilver = (itemId) => {
    setCartItemsSilver((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantitySilver = (itemId) => {
    setCartItemsSilver((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotalSilver = () => {
    return cartItemsSilver.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const onSubmitSilver = async (data) => {
    const orderDetails = {
      cartItems: cartItemsSilver.map((item) => ({
        id: item.id,
        giftName: item.name,
        quantity: item.quantity,
        total: (item.price * item.quantity).toFixed(2),
      })),
      totalPrice: calculateTotalSilver().toFixed(2),
      location: selectedLocation,
      name: data.name,
      mobileNumber: data.mobileNumber,
      deliveryAdderss: data.adderss,
      color: "Silver Color",
    };

    navigate("/confirm-v1-nackclace", { state: orderDetails });
  };
  const handleExternalSubmitSilver = () => {
    handleSubmit(onSubmitSilver)();
  };

  return (
    <div>
      <Banner></Banner>
      <BannerVideo></BannerVideo>
      <HeartSlider></HeartSlider>
      <PriyojonGift></PriyojonGift>
      <CustomerReview></CustomerReview>

      <div>
        <div className=" lg:flex lg:justify-evenly  mb-5 pt-12 pb-16">
          <div className=" text-center lg:mb-0 mb-6">
            <h1 className="text-[#98042F] font-bold lg:text-[33px] text-[24px] lg:mb-4">
              আমাদের ওয়েবসাইটে
            </h1>
            <Link className="bg-[#98042F] rounded text-white lg:text-[41px] text-[34px] font-bold lg:px-14 px-8 lg:py-4 py-2 ">
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

      <div>
        <svg
          className="transform rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1800 5.8"
          preserveAspectRatio="none"
        >
          <path
            style={{ fill: "#F5E3E5" }}
            class="elementor-shape-fill"
            d="M5.4.4l5.4 5.3L16.5.4l5.4 5.3L27.5.4 33 5.7 38.6.4l5.5 5.4h.1L49.9.4l5.4 5.3L60.9.4l5.5 5.3L72 .4l5.5 5.3L83.1.4l5.4 5.3L94.1.4l5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3L161 .4l5.4 5.3L172 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3L261 .4l5.4 5.3L272 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3L361 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3L461 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1L550 .4l5.4 5.3L561 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L650 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L750 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2L850 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4V0H-.2v5.8z"
          ></path>
        </svg>
      </div>

      <div className=" bg-[#F5E3E5]">
        <div className=" flex justify-center ">
          <h1 className="text-center lg:w-[50%] tracking-tighter text-[25px] text-[#202020] font-semibold lg:ml-0 ml-4 lg:mr-0 mr-4">
            অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে অর্ডার
            বাটনে ক্লিক করুন
          </h1>
        </div>
        <div className=" flex justify-center lg:mt-4">
          <div className=" border-[#98042F] border lg:w-[26%] w-[70%]"></div>
        </div>

        <div className="lg:flex justify-center">
          <div className=" lg:w-3/4 w-[95%] mx-auto">
            <div>
              <div>
                <h1 className=" lg:text-[25px] font-semibold text-[#98042F] mb-6 lg:mt-0 mt-8">
                  {" "}
                  নেকলেসটির রং নির্বাচন করুনঃ{" "}
                </h1>

                <div>
                  <Tabs>
                    <TabList>
                      <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-2 gap-6 ">
                        <Tab
                          onClick={() => handleTabChange(0)}
                          isActive={activeTab === 0}
                        >
                          <div className="border-[#b0b0b0] bg-[#f7f7f7] rounded lg:mb-16 border-2 lg:pt-8 pt-4 lg:pb-8 pb-4 pl-8">
                            <div className=" flex mr-3">
                              <div className="form-control mr-3">
                                <label className="label cursor-pointer">
                                  <input
                                    type="radio"
                                    name="radio-10"
                                    className="radio checked:bg-red-500"
                                    checked={activeTab === 0}
                                  />
                                </label>
                              </div>
                              <div className="flex ">
                                <img
                                  className=" w-[25%]"
                                  src="https://i.ibb.co/9b6LFdF/Gift-It-Gold.jpg"
                                  alt=""
                                />
                                <div>
                                  <h1 className=" lg:text-[24px] text-[20px] text-[#303030] font-extrabold">
                                    Golden Color
                                  </h1>
                                  <div className=" flex items-center mt-4">
                                    <ul className="">
                                      {cartItems.map((item) => (
                                        <li
                                          key={item.id}
                                          className="lg:w-[90px] w-[80px] lg:h-[30px] flex border-[#b0b0b0] justify-evenly border-[1px] rounded "
                                        >
                                          {/* {item.name} - ${item.price.toFixed(2)} x{" "} */}
                                          {/* {(item.price * item.quantity).toFixed(
                                          2
                                        )} */}
                                          <button
                                            className=" font-semibold text-lg"
                                            onClick={() =>
                                              increaseQuantity(item.id)
                                            }
                                          >
                                            +
                                          </button>
                                          <span className=" bg-white pl-3 pr-3 font-semibold text-lg">
                                            {item.quantity}
                                          </span>

                                          <button
                                            className=" font-semibold text-lg"
                                            onClick={() =>
                                              decreaseQuantity(item.id)
                                            }
                                          >
                                            -
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                    <p className=" ml-4 text-[16px] text-black font-bold ">
                                      ${calculateTotal().toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>

                        <Tab
                          onClick={() => handleTabChange(1)}
                          isActive={activeTab === 1}
                        >
                          <div className=" border-[#b0b0b0] bg-[#f7f7f7] rounded lg:mb-16 border-2 lg:pt-8 pt-4 lg:pb-8 pb-4 pl-8">
                            <div className=" flex mr-3">
                              <div className="form-control mr-3">
                                <label className="label cursor-pointer">
                                  <input
                                    type="radio"
                                    name="radio-10"
                                    className="radio checked:bg-red-500"
                                    checked={activeTab === 1}
                                  />
                                </label>
                              </div>
                              <div className="flex">
                                <img
                                  className=" w-[25%]"
                                  src="https://i.ibb.co/0J22GkK/Gift-it-Silver.jpg"
                                  alt=""
                                />
                                <div>
                                  <h1 className="lg:text-[24px] text-[20px] text-[#303030] font-extrabold">
                                    Silver Color
                                  </h1>
                                  <div className=" flex items-center mt-4">
                                    <ul className="">
                                      {cartItemsSilver.map((item) => (
                                        <li
                                          key={item.id}
                                          className="lg:w-[90px] w-[80px] lg:h-[30px] flex border-[#b0b0b0] justify-evenly border-[1px] rounded "
                                        >
                                          <button
                                            className=" font-semibold text-lg"
                                            onClick={() =>
                                              increaseQuantitySilver(item.id)
                                            }
                                          >
                                            +
                                          </button>
                                          <span className=" bg-white pl-3 pr-3 font-semibold text-lg">
                                            {item.quantity}
                                          </span>

                                          <button
                                            className=" font-semibold text-lg"
                                            onClick={() =>
                                              decreaseQuantitySilver(item.id)
                                            }
                                          >
                                            -
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                    <p className=" ml-4 text-[16px] text-black font-bold ">
                                      ${calculateTotalSilver().toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </div>
                    </TabList>

                    <TabPanel>
                      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10 lg:ml-0 ml-2 lg:mr-0 mr-2">
                        <div>
                          <h1 className=" lg:text-[26px] font-bold text-[#98042F] lg:mt-0 mt-6">
                            বিলিং বিবরণ
                          </h1>
                          <div>
                            <form onSubmit={handleSubmit(onSubmitSilver)}>
                              <div className="form-control w-full lg:mt-4 mt-4">
                                <label className="label">
                                  <span className="lg:text-[20px] font-bold text-black">
                                    নাম
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="আপনার নাম লিখুন"
                                  {...register("name", {
                                    required: "নাম is Required",
                                  })}
                                  className="input  w-full bg-white rounded lg:h-[60px]"
                                />
                                {errors.name && (
                                  <p className="text-red-500">
                                    {errors.name.message}
                                  </p>
                                )}
                              </div>

                              <div className="form-control w-full mt-4">
                                <label className="label">
                                  <span className="lg:text-[20px] font-bold text-black">
                                    মোবাইল নাম্বার
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  {...register("mobileNumber", {
                                    required: "মোবাইল নাম্বার is Required",
                                  })}
                                  className="input  rounded lg:h-[60px] w-full bg-white"
                                  placeholder="আপনার মোবাইল নাম্বার লিখুন"
                                />
                                {errors.mobileNumber && (
                                  <p className="text-red-500">
                                    {errors.mobileNumber.message}
                                  </p>
                                )}
                              </div>

                              <div className="form-control w-full mt-4">
                                <label className="label">
                                  <span className="lg:text-[20px] font-bold text-black">
                                    ডেলিভারী ঠিকানা{" "}
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                                  {...register("address", {
                                    required: "ডেলিভারী ঠিকানা  is Required",
                                  })}
                                  className="input  rounded lg:h-[60px] w-full bg-white"
                                />
                                {errors.address && (
                                  <p className="text-red-500">
                                    {errors.address.message}
                                  </p>
                                )}
                              </div>

                              {/* Other form elements and submit button */}
                            </form>
                          </div>
                        </div>

                        <div className=" lg:mt-0 mt-16">
                          <div className="border-b-2 border-dotted pb-3 border-[#7A7A7A]">
                            <h1 className="lg:text-[26px] font-bold text-[#98042F]">
                              আপনার অর্ডার
                            </h1>
                            <div className="grid grid-cols-2 mt-4">
                              <div>
                                <h1 className=" lg:text-[18px] text-[16px] font-bold">
                                  Product
                                </h1>
                              </div>
                              <div>
                                <h1 className=" lg:text-[18px] text-[16px] font-bold text-center">
                                  Subtotal
                                </h1>
                              </div>
                            </div>
                          </div>

                          <div className=" grid grid-cols-2 mt-4 border-b-2 border-dotted pb-3 border-[#7A7A7A]">
                            <div className=" flex">
                              <img
                                className=" lg:w-[20%] w-[30%] h-[70%] "
                                src="https://i.ibb.co/9b6LFdF/Gift-It-Gold.jpg"
                                alt=""
                              />
                              <h1 className=" lg:text-[20px] text-[18px]">
                                ম্যাগনেটিক হার্ট নেকলেস V1 - Golden
                              </h1>
                            </div>

                            <div className=" flex items-center ml-4">
                              <ul className="">
                                {cartItems.map((item) => (
                                  <li className="text-[20px]" key={item.id}>
                                    X {item.quantity}
                                  </li>
                                ))}
                              </ul>
                              <p className=" ml-4 text-[20px] text-black">
                                <span className="  lg:text-[24px] text-[20px] font-bold">
                                  ৳
                                </span>{" "}
                                {calculateTotal().toFixed(2)}
                              </p>
                            </div>
                          </div>

                          <div className=" grid grid-cols-2 border-b-2 border-dotted lg:pt-6 pb-6 border-[#7A7A7A] ">
                            <div className=" flex items-center">
                              <h1 className=" lg:text-[18px] text-[16px] font-bold">
                                Shipping
                              </h1>
                            </div>

                            <div className=" lg:ml-0 -ml-4 lg:mt-0 mt-4">
                              <div className="border-[#b0b0b0] bg-[#f7f7f7] rounded pl-2 border-2 lg:w-full w-[180px]">
                                <input
                                  type="radio"
                                  name="role"
                                  id="role1"
                                  value="Out of Dhaka"
                                  checked={selectedLocation === "Out of Dhaka"}
                                  onChange={handleLocationChange}
                                />
                                <label
                                  className="ml-2 lg:text-[20px]"
                                  htmlFor="role1"
                                >
                                  <span>
                                    {" "}
                                    ঢাকার বাহিরে:{" "}
                                    <span className=" lg:text-[18px] text-[14px] lg:font-[800]">
                                      ৳{" "}
                                    </span>{" "}
                                    100
                                  </span>
                                </label>
                              </div>

                              <div className="border-[#b0b0b0] bg-[#f7f7f7] rounded pl-2 border-2 mt-2 lg:w-full w-[180px]">
                                <input
                                  type="radio"
                                  name="role"
                                  id="role2"
                                  value="In Dhaka"
                                  checked={selectedLocation === "In Dhaka"}
                                  onChange={handleLocationChange}
                                />
                                <label
                                  className="ml-2 lg:text-[20px]"
                                  htmlFor="role2"
                                >
                                  <span>
                                    {" "}
                                    ঢাকার মধ্যে:{" "}
                                    <span className=" lg:text-[18px] text-[14px] lg:font-[800]">
                                      ৳{" "}
                                    </span>{" "}
                                    60
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" grid grid-cols-2 pt-4 mb-7">
                            <h1 className=" lg:text-[18px] text-[16px] font-bold">
                              Total
                            </h1>
                            <div>
                              <h1 className=" lg:text-[18px] text-[16px] font-bold text-center">
                                {calculateTotal().toFixed(2)}
                              </h1>
                            </div>
                          </div>

                          <div className=" bg-[#f7f7f7] p-[20px] mb-6">
                            <h1 className=" text-[#515151] lg:text-[20px] text-[16px]">
                              ক্যাশ অন ডেলিভারি (হোম ডেলিভারি){" "}
                            </h1>

                            <div className=" bg-[#EAEAEA] lg:px-[30px] px-[20px] py-[20px] mt-[10px]">
                              <h1 className=" text-[#515151] lg:text-[20px] text-[16px]">
                                আপনার ঠিকানায় পণ্যটি হোম ডেলিভারি হবে। পণ্য হাতে
                                পাওয়ার পর সম্পূর্ণ টাকা দিন।
                              </h1>
                            </div>
                          </div>

                          <div className=" mb-12">
                            <button
                              onClick={handleExternalSubmit}
                              className="bg-[#98042F] rounded leading-6 text-white lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter w-full"
                            >
                              অর্ডার করুন
                            </button>
                          </div>
                        </div>

                        <div></div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 lg:ml-0 ml-2 lg:mr-0 mr-2">
                          <div>
                            <h1 className=" lg:text-[26px] font-bold text-[#98042F] lg:mt-0 mt-6">
                              বিলিং বিবরণ
                            </h1>
                            <div>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full lg:mt-4 mt-4">
                                  <label className="label">
                                    <span className="lg:text-[20px] font-bold text-black">
                                      নাম
                                    </span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="আপনার নাম লিখুন"
                                    {...register("name", {
                                      required: "নাম is Required",
                                    })}
                                    className="input  w-full bg-white rounded lg:h-[60px]"
                                  />
                                  {errors.name && (
                                    <p className="text-red-500">
                                      {errors.name.message}
                                    </p>
                                  )}
                                </div>

                                <div className="form-control w-full mt-4">
                                  <label className="label">
                                    <span className="lg:text-[20px] font-bold text-black">
                                      মোবাইল নাম্বার
                                    </span>
                                  </label>
                                  <input
                                    type="text"
                                    {...register("mobileNumber", {
                                      required: "মোবাইল নাম্বার is Required",
                                    })}
                                    className="input  rounded lg:h-[60px] w-full bg-white"
                                    placeholder="আপনার মোবাইল নাম্বার লিখুন"
                                  />
                                  {errors.mobileNumber && (
                                    <p className="text-red-500">
                                      {errors.mobileNumber.message}
                                    </p>
                                  )}
                                </div>

                                <div className="form-control w-full mt-4">
                                  <label className="label">
                                    <span className="lg:text-[20px] font-bold text-black">
                                      ডেলিভারী ঠিকানা{" "}
                                    </span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                                    {...register("address", {
                                      required: "ডেলিভারী ঠিকানা  is Required",
                                    })}
                                    className="input  rounded lg:h-[60px] w-full bg-white"
                                  />
                                  {errors.address && (
                                    <p className="text-red-500">
                                      {errors.address.message}
                                    </p>
                                  )}
                                </div>

                                {/* Other form elements and submit button */}
                              </form>
                            </div>
                          </div>

                          <div className=" lg:mt-0 mt-16">
                            <div className="border-b-2 border-dotted pb-3 border-[#7A7A7A]">
                              <h1 className="lg:text-[26px] font-bold text-[#98042F]">
                                আপনার অর্ডার
                              </h1>
                              <div className="grid grid-cols-2 mt-4">
                                <div>
                                  <h1 className=" lg:text-[18px] text-[16px] font-bold">
                                    Product
                                  </h1>
                                </div>
                                <div>
                                  <h1 className=" lg:text-[18px] text-[16px] font-bold text-center">
                                    Subtotal
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div className=" grid grid-cols-2 mt-4 border-b-2 border-dotted pb-3 border-[#7A7A7A]">
                              <div className=" flex">
                                <img
                                  className=" lg:w-[20%] w-[30%] h-[70%] "
                                  src="https://i.ibb.co/0J22GkK/Gift-it-Silver.jpg"
                                  alt=""
                                />
                                <h1 className=" lg:text-[20px] text-[18px]">
                                  ম্যাগনেটিক হার্ট নেকলেস V1 - Silver
                                </h1>
                              </div>

                              <div className=" flex items-center ml-4">
                                <ul className="">
                                  {cartItems.map((item) => (
                                    <li className="text-[20px]" key={item.id}>
                                      X {item.quantity}
                                    </li>
                                  ))}
                                </ul>
                                <p className=" ml-4 text-[20px] text-black">
                                  <span className="  lg:text-[24px] text-[20px] font-bold">
                                    ৳
                                  </span>{" "}
                                  {calculateTotalSilver().toFixed(2)}
                                </p>
                              </div>
                            </div>

                            <div className=" grid grid-cols-2 border-b-2 border-dotted lg:pt-6 pb-6 border-[#7A7A7A] ">
                              <div className=" flex items-center">
                                <h1 className=" lg:text-[18px] text-[16px] font-bold">
                                  Shipping
                                </h1>
                              </div>

                              <div className=" lg:ml-0 -ml-4 lg:mt-0 mt-4">
                                <div className="border-[#b0b0b0] bg-[#f7f7f7] rounded pl-2 border-2 lg:w-full w-[180px]">
                                  <input
                                    type="radio"
                                    name="role"
                                    id="role1"
                                    value="Out of Dhaka"
                                    checked={
                                      selectedLocation === "Out of Dhaka"
                                    }
                                    onChange={handleLocationChange}
                                  />
                                  <label
                                    className="ml-2 lg:text-[20px]"
                                    htmlFor="role1"
                                  >
                                    <span>
                                      {" "}
                                      ঢাকার বাহিরে:{" "}
                                      <span className=" lg:text-[18px] text-[14px] lg:font-[800]">
                                        ৳{" "}
                                      </span>{" "}
                                      100
                                    </span>
                                  </label>
                                </div>

                                <div className="border-[#b0b0b0] bg-[#f7f7f7] rounded pl-2 border-2 mt-2 lg:w-full w-[180px]">
                                  <input
                                    type="radio"
                                    name="role"
                                    id="role2"
                                    value="In Dhaka"
                                    checked={selectedLocation === "In Dhaka"}
                                    onChange={handleLocationChange}
                                  />
                                  <label
                                    className="ml-2 lg:text-[20px]"
                                    htmlFor="role2"
                                  >
                                    <span>
                                      {" "}
                                      ঢাকার মধ্যে:{" "}
                                      <span className=" lg:text-[18px] text-[14px] lg:font-[800]">
                                        ৳{" "}
                                      </span>{" "}
                                      60
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className=" grid grid-cols-2 pt-4 mb-7">
                              <h1 className=" lg:text-[18px] text-[16px] font-bold">
                                Total
                              </h1>
                              <div>
                                <h1 className=" lg:text-[18px] text-[16px] font-bold text-center">
                                  {calculateTotalSilver().toFixed(2)}
                                </h1>
                              </div>
                            </div>

                            <div className=" bg-[#f7f7f7] p-[20px] mb-6">
                              <h1 className=" text-[#515151] lg:text-[20px] text-[16px]">
                                ক্যাশ অন ডেলিভারি (হোম ডেলিভারি){" "}
                              </h1>

                              <div className=" bg-[#EAEAEA] lg:px-[30px] px-[20px] py-[20px] mt-[10px]">
                                <h1 className=" text-[#515151] lg:text-[20px] text-[16px]">
                                  আপনার ঠিকানায় পণ্যটি হোম ডেলিভারি হবে। পণ্য
                                  হাতে পাওয়ার পর সম্পূর্ণ টাকা দিন।
                                </h1>
                              </div>
                            </div>

                            <div className=" mb-12">
                              <button
                                onClick={handleExternalSubmitSilver}
                                className="bg-[#98042F] rounded leading-6 text-white lg:text-4xl text-2xl font-bold px-5  lg:py-3 py-3 lg:mr-0 mr-4 tracking-tighter w-full"
                              >
                                অর্ডার করুন
                              </button>
                            </div>
                          </div>

                          <div></div>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFrom;
