
import React from "react";
import Data from "./data";
import Slider from "react-slick";

export default function index() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div className="min-h-[70vh] max-w-7xl mx-auto md:pb-24 pb-12">
          <div className="space-y-6">
            <div className="flex flex-col justify-center items-center space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
                Clinic and Specialities
              </h1>
              <div className="flex flex-col justify-center items-center">
                <p className="text-md md:text-lg lg:text-xl text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
                <p className="text-md md:text-lg lg:text-xl text-center">
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <Slider {...settings} className="px-5">
                  {Data.map((item) => (
                    <div index={item.id} key={item.id} className="">
                      <div className="felx flex-col justify-center items-center ">
                        <div className="shadow-lg rounded-full transition duration-300 ease-in-out hover:scale-95  w-48 h-48 justify-center items-center flex flex-col space-y-2 p-4 m-4">
                          <img
                            src={`/` + item.image}
                            layout="fill"
                            objectFit="cover"
                            alt="doctor"
                            width={120}
                            height={60}
                            className=""
                          />
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <h2 className="text-xl font-semibold">
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
