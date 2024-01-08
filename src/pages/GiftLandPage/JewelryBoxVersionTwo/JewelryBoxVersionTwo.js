import React from "react";
import JewelryBoxVersionTwoBanner from "./JewelryBoxVersionTwoBanner";
import JewelryBoxVersionTwoVideo from "./JewelryBoxVersionTwoVideo";
import JewelryBoxVersionTwoSlider from "./JewelryBoxVersionTwoSlider";
import JewelryBoxVersionTwoCustomerReview from "./JewelryBoxVersionTwoCustomerReview";
import JewelryBoxVersionTwoOrderForm from "./JewelryBoxVersionTwoOrderForm";

const JewelryBoxVersionTwo = () => {
  return (
    <div>
      <JewelryBoxVersionTwoBanner></JewelryBoxVersionTwoBanner>
      <JewelryBoxVersionTwoVideo></JewelryBoxVersionTwoVideo>
      <JewelryBoxVersionTwoSlider></JewelryBoxVersionTwoSlider>
      <JewelryBoxVersionTwoCustomerReview></JewelryBoxVersionTwoCustomerReview>
      <JewelryBoxVersionTwoOrderForm></JewelryBoxVersionTwoOrderForm>
    </div>
  );
};

export default JewelryBoxVersionTwo;
