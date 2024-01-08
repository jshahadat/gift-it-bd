import React from "react";
import JewelryBoxVersionOneBanner from "./JewelryBoxVersionOneBanner";
import JewelryBoxVersionOneVideo from "./JewelryBoxVersionOneVideo";
import JewelryBoxVersionOneSlider from "./JewelryBoxVersionOneSlider";
import JewelryBoxVersionOneCustomerReview from "./JewelryBoxVersionOneCustomerReview";
import JewelryBoxVersionOneOrderFrom from "./JewelryBoxVersionOneOrderFrom";

const JewelryBoxVersionOne = () => {
  return (
    <div>
      <JewelryBoxVersionOneBanner></JewelryBoxVersionOneBanner>
      <JewelryBoxVersionOneVideo></JewelryBoxVersionOneVideo>
      <JewelryBoxVersionOneSlider></JewelryBoxVersionOneSlider>
      <JewelryBoxVersionOneCustomerReview></JewelryBoxVersionOneCustomerReview>
      <JewelryBoxVersionOneOrderFrom></JewelryBoxVersionOneOrderFrom>
    </div>
  );
};

export default JewelryBoxVersionOne;
