import {
  BuildingOfficeIcon,
  MapPinIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Slider from "react-slick";
import Data from "./Data";

export default function Index() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <>
      <section className=" ">
        <div className="bg-slate-100 w-full p-10">
          <div className="flex flex-col md:flex-row  flex-wrap ">
            <div className="w-full md:w-2/6 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                  Book Our Doctor
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-md md:text-lg lg:text-xl">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </p>
                <p className="text-md md:text-lg lg:text-xl">
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for &apos;lorem ipsum&apos; will uncover
                  many web sites still in their infancy. Various versions have
                  evolved over the years, sometimes
                </p>
              </div>
              <div className="">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Read More..
                </button>
              </div>
            </div>
            <div className=" w-full md:w-4/6">
              <Slider {...settings} className="">
                {Data.map((item) => (
                  <div key={item.id}>
                    <div className="flex flex-wrap justify-center items-center shadow-lg w-72 my-1 rounded-lg overflow-hidden p-2 ">
                      <div className="p-4 w-full shrink ">
                        <div className="">
                          <img
                            className="shrink"
                            src="https://www.mdoc.in/assets/img/blur-hospital.jpg"
                            alt="Background"
                          />
                          <div className="flex justify-center -m-14 ">
                            <img
                              className="rounded-full overflow-hidden border-solid border-white border-8"
                              src="https://app.mdoc.in/appv2_0_1/assets/images/doctor.png"
                              alt="profile"
                            />
                          </div>
                        </div>
                        <div className="mt-16 overflow-hidden">
                          <div className="my-1 px-2 space-y-3">
                            <div className="">
                              <div className="flex flex-row items-center justify-between">
                                <h3 className="text-xl font-bold text-gray-600 drop-shadow-lg shadow-black ">
                                  {item.name}
                                </h3>
                                  <a href="/">
                                    <ShareIcon className="h-5 w-5 right-0 text-gray-500 inline-block" />
                                  </a>
                              </div>
                              <p className="text-red-500 font-semibold">
                                {item.exper}
                              </p>
                              <p className="text-sm text-gray-400">
                                {item.degree}
                              </p>
                              <p className="text-sm text-gray-400">
                                {item.speciality}
                              </p>
                            </div>
                            <div className="flex flex-row space-x-2">
                              <MapPinIcon className="h-auto w-16 " />
                              <p className="truncate text-md">{item.address}</p>
                            </div>
                            <div className="flex flex-row space-x-2">
                              <BuildingOfficeIcon className="h-auto w-12 " />
                              <p className="truncate text-md">
                                {item.location}
                              </p>
                            </div>
                            <div className="flex flex-row space-x-2">
                              <p className="truncate text-md text-2xl p-2 text-red-600 font-semibold">
                                {item.fee}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-shrink justify-between">
                            <div className="">
                              <button className="flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-pink-500 group-hover:from-red-500 group-hover:to-pink-500 hover:text-white  ">
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                                  View Profile
                                </span>
                              </button>
                            </div>
                            <div className="">
                              <button
                                type="button"
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
