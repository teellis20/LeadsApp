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
    interval: 6000
  }}
>
  <Slide image={<img alt="Blue and Teal Background" src={background1} />}>
    <Caption placement="left">
      <h3>
        How it works
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Describe how it works (maybe put a time limit ie: "It takes 5 minutes to fill out, and you'll be on your way")
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="Blue and Grey Background" src={background2}/>}>
    <Caption placement="center">
      <h3>
        What we do for you(or something else)
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Describe here. 
      </h5>
    </Caption>
  </Slide>
</Slider>
    )
};

export default HowTo;