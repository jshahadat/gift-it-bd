import React from "react";
import Banner from "../Banner/Banner";
import HeartTwoVideo from "./HeartTwoVideo";
import HearTwoSlider from "./HearTwoSlider";
import HearTwoCustomerReview from "./HearTwoCustomerReview";
import HeartTwoOrderForm from "./HeartTwoOrderForm";

const HeartVersionTwo = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <HeartTwoVideo></HeartTwoVideo>
        <HearTwoSlider></HearTwoSlider>
        <HearTwoCustomerReview></HearTwoCustomerReview>
        <HeartTwoOrderForm></HeartTwoOrderForm>
      </div>
    </div>
  );
};

export default HeartVersionTwo;
