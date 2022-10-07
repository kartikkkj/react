import React from "react";
import Data from "./data";

export default function index() {
  return (
    <>
      <section className="flex flex-col min-h-[70vh] justify-center items-center py-12 px-0 md:px-24 md:mb-24 ">
        <div className="pt-10 md:pt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            What are you looking for?
          </h1>
        </div>
        <div className="md:mt-16 mt-10">
          <section className="flex text-gray-600 body-font">
            <div className="flex justify-center items-center w-full flex-wrap ">
              {Data.map((item) => (
                <div
                  key={item.id}
                  className="lg:w-1/3 md:w-1/2 p-4 w-full relative flex justify-center items-center"
                >
                  <a className="block relative  rounded overflow-hidden ">
                    <img
                      src={`/` + item.image}
                      layout="fill"
                      objectFit="cover"
                      alt="doctor"
                      width={500}
                      height={600}
                      className="transition duration-300 ease-in-out hover:scale-110 brightness-50 "
                    />
                  </a>
                  <div className="absolute  w-full h-full top-0 left-0  flex flex-col justify-center items-center  ">
                    <h1 className="text-2xl   font-bold text-white">
                      {item.title}
                    </h1>
                    <button
                      type="button"
                      class="text-gray-200 mt-2 bg-rose-400 hover:bg-sky-500  font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2"
                    >
                      Search Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
