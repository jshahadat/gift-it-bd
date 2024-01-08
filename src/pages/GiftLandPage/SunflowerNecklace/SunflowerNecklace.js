import React from "react";
import SunflowerNecklaceBanner from "./SunflowerNecklaceBanner";
import SunflowerNecklaceVideo from "./SunflowerNecklaceVideo";
import SunflowerNecklaceSlider from "./SunflowerNecklaceSlider";
import SunflowerNecklaceOrderForm from "./SunflowerNecklaceOrderForm";
import SunflowerNecklaceCustomerreview from "./SunflowerNecklaceCustomerreview";

const SunflowerNecklace = () => {
  return (
    <div>
      <SunflowerNecklaceBanner></SunflowerNecklaceBanner>
      <SunflowerNecklaceVideo></SunflowerNecklaceVideo>
      <SunflowerNecklaceSlider></SunflowerNecklaceSlider>
      <SunflowerNecklaceCustomerreview></SunflowerNecklaceCustomerreview>
      <SunflowerNecklaceOrderForm></SunflowerNecklaceOrderForm>
    </div>
  );
};

export default SunflowerNecklace;
