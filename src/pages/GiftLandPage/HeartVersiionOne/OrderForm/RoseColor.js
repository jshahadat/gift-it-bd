import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const RoseColor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [deliveryAdderss, setDeliveryAddress] = useState("");

  const [selectedLocation, setSelectedLocation] = useState("In Dhaka");
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10.99, quantity: 1 },
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

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value); // Update selected location on radio button change
  };

  const onSubmit = async (data) => {
    const orderDetails = {
      cartItems: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        total: (item.price * item.quantity).toFixed(2),
      })),
      totalPrice: calculateTotal().toFixed(2),
      location: selectedLocation,
      name: name,
      mobileNumber: mobileNumber,
      deliveryAdderss: deliveryAdderss,
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
        // Order successfully placed, handle the response accordingly
        console.log("Order placed successfully!");
      } else {
        // Handle errors
        console.error("Failed to place the order");
      }
    } catch (error) {
      console.error("Error while making the request:", error);
    }
  };
  const handleExternalSubmit = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div>
      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10 lg:ml-0 ml-4 lg:mr-0 mr-4">
        <div>
          <h1 className=" lg:text-[26px] font-bold text-[#98042F]">
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
                  <p className="text-red-500">{errors.name.message}</p>
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
                  <p className="text-red-500">{errors.mobileNumber.message}</p>
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
                  <p className="text-red-500">{errors.address.message}</p>
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
                src="https://gifolo.com/wp-content/uploads/2022/12/4heart-v2-product-1-300x300.png"
                alt=""
              />
              <h1 className=" lg:text-[20px] text-[18px]">
                ম্যাগনেটিক হার্ট নেকলেস V2 - Golden
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
                <label className="ml-2 lg:text-[20px]" htmlFor="role1">
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
                <label className="ml-2 lg:text-[20px]" htmlFor="role2">
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
            <h1 className=" lg:text-[18px] text-[16px] font-bold">Total</h1>
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
                আপনার ঠিকানায় পণ্যটি হোম ডেলিভারি হবে। পণ্য হাতে পাওয়ার পর
                সম্পূর্ণ টাকা দিন।
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
    </div>
  );
};

export default RoseColor;
