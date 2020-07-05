import React from "react";
import { Slider, Slide, Caption } from "react-materialize";

import background1 from "../../images/background1.jpg"
import background2 from "../../images/background2.jfif"

import "./howto.css";

const HowTo = props => {
  return (
    <Slider
      fullscreen={false}
      options={{
        duration: 500,
        height: 400,
        indicators: true,
        interval: 8000
      }}
    >
      <Slide image={<img alt="Blue and Teal Background" src={background1} />}>
        <Caption placement="left">
          <h3>
            What we do
      </h3>
          <h5 className="light grey-text text-lighten-3">
            We provide customers with an easy, online experience to connect with 5(or more) qualified vendors based on your business needs.
      </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="Blue and Grey Background" src={background2} />}>
        <Caption placement="center">
          <h3>
            How it works
      </h3>
          <h5 className="light grey-text text-lighten-3">
            Select your product below and complete the forms to help our vendors understand your needs. The best suited vendors for you will give you a call to discuss your best options.
      </h5>
        </Caption>
      </Slide>
    </Slider>
  )
};

export default HowTo;