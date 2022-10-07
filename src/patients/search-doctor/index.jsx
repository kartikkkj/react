import Image from "next/future/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ShareIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Cards from "../../../components/Doctors/Cards";

const specilist = [
  {
    id: 1,
    name: "Dentist",
  },
  {
    id: 2,
    name: "Cardiologist",
  },
  {
    id: 3,
    name: "Dermatologist",
  },
  {
    id: 4,
    name: "Gastroenterologist",
  },
  {
    id: 5,
    name: "Neurologist",
  },
  {
    id: 6,
    name: "Ophthalmologist",
  },
  {
    id: 7,
    name: "Orthopedic",
  },
  {
    id: 8,
    name: "Psychiatrist",
  },
  {
    id: 9,
    name: "Urologist",
  },
  {
    id: 10,
    name: "Gynecologist",
  },
  {
    id: 11,
    name: "Pediatrician",
  },
  {
    id: 12,
    name: "Physiotherapist",
  },
  {
    id: 13,
    name: "ENT Specialist",
  },
  {
    id: 14,
    name: "General Physician",
  },
  {
    id: 15,
    name: "Homeopath",
  },
  {
    id: 16,
    name: "Ayurveda",
  },
  {
    id: 17,

    name: "Acupuncturist",
  },
  {
    id: 18,
    name: "Allergist",
  },
  {
    id: 19,
    name: "Anesthesiologist",
  },
  {
    id: 20,
    name: "Chiropractor",
  },
  {
    id: 21,
    name: "Dietitian",
  },
  {
    id: 22,
    name: "Endocrinologist",
  },
  {
    id: 23,
    name: "Hematologist",
  },
  {
    id: 24,
    name: "Infectious Disease Specialist",
  },
  {
    id: 25,

    name: "Nephrologist",
  },
  {
    id: 26,
    name: "Neurosurgeon",
  },
  {
    id: 27,
    name: "Obstetrician",
  },
  {
    id: 28,
    name: "Oncologist",
  },
  {
    id: 29,
    name: "Osteopath",
  },
  {
    id: 30,
    name: "Pain Management Specialist",
  },
  {
    id: 31,
    name: "Pathologist",
  },
  {
    id: 32,
    name: "Plastic Surgeon",
  },
  {
    id: 33,
    name: "Podiatrist",
  },
  {
    id: 34,
    name: "Pulmonologist",
  },
  {
    id: 35,
    name: "Radiologist",
  },

  {
    id: 36,
    name: "Rheumatologist",
  },
  {
    id: 37,
    name: "Sports Medicine Specialist",
  },
  {
    id: 38,
    name: "Surgeon",
  },
];

export default function Index() {
  const router = useRouter();
  const pid = router.query;
  return (
    <>
      <div className="flex lg:flex-row flex-col w-full bg-slate-100">
        <div className="w-full  lg:w-1/4 lg:sticky  flex-col top-2 h-fit  p-4">
          <div className="bg-white  shadow-md p-4">
            <div className="">
              <h2 className="text-lg font-semibold pb-2">Search Filters</h2>
              <hr />
            </div>
            <div className="">
              <div className="p-4">
                <input
                  type="date"
                  name="appoinment"
                  id="appoinment"
                  placeholder="Select Date"
                  className="w-full border-2 border-gray-300 p-2 rounded-md "
                />
              </div>
              <div className="pb-4">
                <h2 className="text-lg font-semibold pb-2">Gender</h2>
                <div className="space-y-1">
                  <div className="">
                    <input type="checkbox" name="male" id="male" />
                    <span className="pl-2">Male</span>
                  </div>
                  <div className="">
                    <input type="checkbox" name="female" id="female" />
                    <span className="pl-2">Female</span>
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <h2 className="text-lg font-semibold pb-2">Specilist</h2>
                <div className="space-y-1">
                  {specilist.map((item) => (
                    <div key={item.id}>
                      <input type="checkbox" name={item.name} id={item.name} />
                      <span className="pl-2">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center pb-4">
                <a className="text-green-700 w-full hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full p-4">
          <div className="">
            <Cards />
          </div>
          <div className="flex w-full justify-center items-center py-3">
            <button className="text-green-700  hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
