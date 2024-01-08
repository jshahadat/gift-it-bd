import React from "react";
import GiftLandPage from "../../GiftLandPage/GiftLandPage";
import Review from "../../GiftLandPage/Review/Review";
import Contact from "../../GiftLandPage/Contact/Contact";
import Banner from "../../GiftLandPage/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GiftLandPage></GiftLandPage>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default Home;
