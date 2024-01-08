import React from "react";

const JewelryBoxVersionOneBanner = () => {
  return (
    <div>
      <div>
        <div className=" bg-gradient-to-t from-[#DA3750] to-[#9A072F] lg:h-[350px] h-[300px]">
          <div className=" flex justify-center lg:pt-6 pt-3  lg:pb-6 pb-3">
            <img
              className="lg:w-[10%] w-[30%]"
              src="https://gifolo.com/wp-content/uploads/2022/10/logo-small-white.png"
              alt=""
            />
          </div>
          <h1 className="text-center text-white lg:text-[50px] text-[32px] leading-tight  font-bold">
            এত টাকা-পয়াসা জমিয়ে কি হবে, যদি প্রিয় মানুষকে খুশি না রাখতে পারেন?
          </h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 283.5 19.6"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill h-3"
            style={{ opacity: 0.33, fill: "#DA3750" }}
            d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
          ></path>
          <path
            class="elementor-shape-fill h-1"
            style={{ opacity: 0.33, fill: "#f78da7" }}
            d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
          ></path>
          <path
            class="elementor-shape-fill"
            style={{ opacity: 0.33, fill: "#f78da7" }}
            d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
          ></path>
          <path
            class="elementor-shape-fill"
            d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
            style={{ fill: "#f78da7" }}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default JewelryBoxVersionOneBanner;
