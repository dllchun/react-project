"use client";

// components/DemoCarousel.js
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This imports the styles directly
import heroImg from "../../../../public/heroImg.svg";
import Image from "next/image";

class DemoCarousel extends Component {
  render() {
    const { router } = this.props;
    const handleChange = (index, item) => {
      console.log(index, item);
    };
    return (
      <Carousel
        set
        showThumbs={false}
        swipeable={true}
        showStatus={false}
        onChange={handleChange}
        infiniteLoop={true}
        onClickItem={() => router.push("/")}
      >
        <div>
          <Image src={heroImg} alt="Project 1" width="300" height="300" />
        </div>
        <div>
          <Image src={heroImg} alt="Project 2" width="300" height="300" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <Image src={heroImg} alt="Project 3" width="300" height="300" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
