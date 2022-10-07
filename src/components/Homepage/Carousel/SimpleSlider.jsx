import React from "react";
import Slider from "react-slick";
import data from "./Data";

export default function SimpleSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider
      {...settings}
      className="w-full px-2 py-1 overflow-hidden outline-none"
    >
      {data.map((item) => (
        <div className="outline-none " key={item.id} index={item.id}>
          <img
            className="h-28 md:h-36 lg:h-48 w-full shadow-md object-cover"
            src={`/` + item.image}
          />
        </div>
      ))}
    </Slider>
  );
}
