import Image from "next/future/image";
import React, { useState } from "react";
import {
  ShareIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Rating from "../rating";
import Link from "next/link";
import Data from "./data";

export default function index() {
  return (
    <>
      {Data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row w-full p-4 md:p-0 bg-white shadow-md rounded-md mb-4  overflow-hidden"
        >
          <div className="absolute right-0 pr-8 pt-2">
            <HeartIcon className="h-auto w-6  text-gray-400 hover:text-green-700 cursor-pointer pb-2" />
            <ShareIcon className="h-auto w-6 text-gray-400 hover:text-green-700 cursor-pointer " />
          </div>
          <div className="md:w-[78%] flex flex-col md:flex-row justify-center  md:justify-start w-full ">
            <div className="h-60 w-auto flex justify-center  md:justify-start">
              <Image
                src={item.image}
                alt="doctor"
                width={250}
                height={200}
                className="rounded-md md:rounded-none  overflow-hidden h-auto w-56 "
              />
            </div>
            <div className="ml-4 space-y-2 py-4">
              <div className="flex flex-col justify-center items-center md:items-start">
                <h1 className="flex text-xl font-semibold items-center">
                  {item.title}
                </h1>
                <p className="font-sm">{item.description}</p>
              </div>
              <div className="space-y-2 flex flex-col w-full items-center md:items-start">
                <p>🦷 {item.specilist}</p>
                <div className="flex">
                  <Rating /> <p className="pl-3">({item.rating})</p>
                </div>
                <div className="flex ">
                  <MapPinIcon className="h-auto w-5 text-green-500" />
                  <p className="pl-2"> {item.state}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[22%] w-full flex flex-col justify-center md:justify-between md:py-6 items-center space-y-2 md:items-start ">
            <div className="">
              <div className="flex flex-row space-x-2">
                <MapPinIcon className="h-auto w-4 " />
                <p className="truncate text-md">{item.location}</p>
              </div>
              <div className="flex flex-row space-x-2">
                <BuildingOfficeIcon className="h-auto w-4 " />
                <p className="truncate text-md">{item.landMark}</p>
              </div>
            </div>
            <div className=" md:pr-4">
              <Link href={"../search-doctor/profile"}>
                <a>
                  <button className="text-green-700 w-full hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                    View Profile
                  </button>
                </a>
              </Link>
              <button className="text-green-700 w-full hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                Book Appoinment
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
