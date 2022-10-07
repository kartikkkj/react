import React from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function index() {
  return (
    <>
      <section className="">
        <div className="">
          <div className="back flex min-h-[70vh] justify-center items-center py-12 px-0 md:px-24">
            <div className="flex flex-col w-full  space-y-6 pb-32 ">
              <div className="flex flex-col justify-center items-center space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
                  Search Doctor, Make an Appointment
                </h1>
                <p className="text-md md:text-lg lg:text-xl text-center ">
                  Discover the best doctors, clinic & hospital the city nearest
                  to you.
                </p>
              </div>
              <div className="w-full  px-10">
                <form className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto space-y-6 md:space-y-0 space-x-0 md:space-x-4">
                  <div className="relative w-full  md:w-2/6">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <MapPinIcon className="w-4 h-auto" />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-xl rounded-md  block w-full pl-10 p-3 "
                      placeholder="location"
                      required
                    />
                  </div>
                  <div className="relative w-full  md:w-5/6">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <MagnifyingGlassIcon className="w-4 h-auto" />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-xl rounded-md  block w-full pl-10 p-3 "
                      placeholder="Search"
                      required
                    />
                  </div>
                  <div
                    className="flex justify-center space-x-2 items-center bg-green-400  text-xl font-semibold rounded-md p-3 w-full md:w-1/6"
                    type="submit"
                  >
                    <MagnifyingGlassIcon className="w-7 h-auto text-white" />
                    <p className="text-white">Search</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
