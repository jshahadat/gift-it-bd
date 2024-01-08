import React from "react";
import SunflowerRingBanner from "./SunflowerRingBanner";
import SunflowerRingVideo from "./SunflowerRingVideo";
import SunflowerRingSlider from "./SunflowerRingSlider";
import SunflowerRingCustomerReview from "./SunflowerRingCustomerReview";
import SunflowerRingOrderForm from "./SunflowerRingOrderForm";

const SunflowerRing = () => {
  return (
    <div>
      <SunflowerRingBanner></SunflowerRingBanner>
      <SunflowerRingVideo></SunflowerRingVideo>
      <SunflowerRingSlider></SunflowerRingSlider>
      <SunflowerRingCustomerReview></SunflowerRingCustomerReview>
      <SunflowerRingOrderForm></SunflowerRingOrderForm>
    </div>
  );
};

export default SunflowerRing;
