import React from "react";
import "./style.css";
import KeynoteSpeaker from "./KeynoteSpeaker/KeynoteSpeaker";
import LifeChangingProcess from "./LifeChangingProcess/index";
import Carousel from "./carousel/carousel";
import Pricing from "./Pricing/index";
const Fl = () => {
  return (
    <div>
      <LifeChangingProcess />
      <Carousel />
      <Pricing />
      <KeynoteSpeaker />
    </div>
  );
};

export default Fl;
