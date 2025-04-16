import React from "react";
import ImageSlider from "react-image-comparison-slider";

import classes from "./Compare.module.scss";




export default function Compare() {
  return (
    <div className={classes.mainWarapper}>
     <div className={classes.sliderWrapper}>
        <ImageSlider
          image2={"https://img.freepik.com/premium-vector/coffee-white-cup-photorealistic-style-isolated_108964-951.jpg"}
          image1={"2.png"}
          sliderWidth={3}
          sliderColor="white"
          handleColor="white"
          handleBackgroundColor="grey"
        />
      </div>
    </div>
  );
}

