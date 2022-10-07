import React from "react";
import Image from "next/future/image";
import Rating from "../../../../components/Doctors/rating";
import {
  ShareIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let [categories] = useState({
    Overview: [
      {
        id: 1,
        title: "About Me",
        discription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    Locations: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Reviews: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    "Business Hour": [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <>
      <section className="w-full bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row w-full p-4 md:p-0 bg-white shadow-md rounded-md mb-4  overflow-hidden">
            <div className="md:w-[78%] flex flex-col md:flex-row justify-center  md:justify-start w-full ">
              <div className="h-60 w-auto flex justify-center  md:justify-start">
                <Image
                  src="/Doctors/doctor-thumb-01.jpg"
                  alt="doctor"
                  width={250}
                  height={200}
                  className="rounded-md md:rounded-none  overflow-hidden h-auto w-56 "
                />
              </div>
              <div className="ml-4 space-y-2 py-4">
                <div className="flex flex-col justify-center items-center md:items-start">
                  <h1 className="flex text-xl font-semibold items-center">
                    Dr. Darren Elder
                  </h1>
                  <p className="font-sm">
                    MDS - Periodontology and Oral Implantology, BDS
                  </p>
                </div>
                <div className="space-y-2 flex flex-col w-full items-center md:items-start">
                  <p>🦷 Denist</p>
                  <div className="flex">
                    <Rating /> <p className="pl-3">(4)</p>
                  </div>
                  <div className="flex ">
                    <MapPinIcon className="h-auto w-5 text-green-500" />
                    <p className="pl-2"> Florida, USA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[22%] w-full flex flex-col justify-center md:justify-between md:py-6 items-center space-y-2 md:items-start ">
              <div className="">
                <div className="flex flex-row space-x-2">
                  <MapPinIcon className="h-auto w-4 " />
                  <p className="truncate text-md">Darbhanga, Bihar</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <BuildingOfficeIcon className="h-auto w-4 " />
                  <p className="truncate text-md">Near India Gate</p>
                </div>
              </div>
              <div className=" md:pr-4">
                <button className="text-green-700 w-full hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                  Book Appoinment
                </button>
              </div>
            </div>
          </div>

          <div className="block bg-white ">
            <div className="w-full  px-2 py-8 sm:px-0">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl  p-1">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          "w-full  py-2.5 text-sm font-medium leading-5 text-blue-700",
                          "ring-white  ring-offset-blue-400 focus:outline-none ",
                          selected
                            ? "border-b-4 border-sky-400 text-sky-400 text-xl"
                            : "text-black text-xl font-bold"
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {Object.values(categories).map((posts, idx) => (
                    <Tab.Panel
                      key={idx}
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    >
                      <ul>
                        {posts.map((post) => (
                          <li
                            key={post.id}
                            className="relative rounded-md p-3 hover:bg-gray-100"
                          >
                            <h3 className="text-sm font-medium leading-5">
                              {post.title}
                            </h3>

                            <div className="">{post.discription}</div>

                            <a
                              href="#"
                              className={classNames(
                                "absolute inset-0 rounded-md",
                                "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                              )}
                            />
                          </li>
                        ))}
                      </ul>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
