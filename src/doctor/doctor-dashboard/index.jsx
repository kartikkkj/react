import React from "react";
import Image from "next/image";
import { BiCategory, BiCalendarCheck, BiStar, BiLockAlt } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaRegEye, FaCheck } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { TbFileInvoice, TbLogout } from "react-icons/tb";
import { RiWechatLine } from "react-icons/ri";
import { IoPeopleOutline, IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
export default function index() {
  const data = [
    {
      id: 1,
      icon: BiCategory,
      title: "Dashboard",
    },
    {
      id: 2,
      icon: BiCalendarCheck,
      title: "Appointments",
    },
    {
      id: 3,
      icon: IoPeopleOutline,
      title: "My Patients",
    },
    {
      id: 4,
      icon: GiSandsOfTime,
      title: "Schedule Timings",
    },
    {
      id: 5,
      icon: TbFileInvoice,
      title: "Invoices",
    },
    {
      id: 6,
      icon: BiStar,
      title: "Reviews",
    },
    {
      id: 7,
      icon: RiWechatLine,
      title: "Message",
    },
    {
      id: 8,
      icon: GrUserSettings,
      title: "Profile Settings",
    },
    {
      id: 9,
      icon: IoShareSocialOutline,
      title: "Social Media",
    },
    {
      id: 10,
      icon: BiLockAlt,
      title: "Chagne Password",
    },
    {
      id: 11,
      icon: TbLogout,
      title: "Logout",
    },
  ];

  const tableData = [
    {
      id: 1,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 2,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 3,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 1,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 2,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 3,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 1,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 2,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 3,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 1,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 2,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 3,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 1,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 2,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 3,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 1,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 2,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
    {
      id: 3,
      name: "John Doe",
      date: "12 Jan 2021",
      time: "10:00 AM",
      purpose: "General Checkup",
      type: "new patient",
      amount: "₹ 500",
    },
  ];
  return (
    <>
      <div className="w-full bg-white ">
        <div className="py-4 pl-2 md:pl-10">
          <div className="">
            <div className="">
              <p className="text-sm">Home / Dashboard</p>
            </div>
            <div className="">
              <p className="text-3xl font-bold text-gray-700">Dashboard</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col w-full bg-slate-100">
        <div className="w-full  lg:w-1/4 lg:sticky  flex-col top-2 h-fit  p-4">
          <div className="bg-white  shadow-md pt-4 ">
            <div className="w-full">
              <div className="w-full">
                <div className="flex flex-col justify-center items-center py-4">
                  <div className="">
                    <Image
                      src="/Profile/dp.jpg"
                      width={120}
                      height={120}
                      className="rounded-full overflow-hidden border-solid border-white border-4 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-gray-700 font-semibold text-lg">
                      Dr.Pasand Hai
                    </h2>
                    <p className="text-center text-gray-500 text-sm">
                      BDS, MDS - Oral & Maxillofacial Surgery
                    </p>
                  </div>
                </div>
                {data.map((i) => {
                  const Items = i.icon;
                  return (
                    <>
                      <hr />
                      <Link href="/dashboard">
                        <a>
                          <div className="flex item-center py-2 px-4  hover:text-sky-400">
                            <div className="flex items-center text-lg">
                              <Items />
                            </div>
                            <p className="pl-4 text-lg">{i.title}</p>
                          </div>
                        </a>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full p-4">
          <div className="">
            <div className="bg-white ">
              <div className="flex flex-col md:flex-row py-0 md:py-6 divide-solid divide-y md:divide-y-0 md:divide-x">
                <div className=" w-full md:w-1/3 pl-6 py-6 md:py-0 space-y-1">
                  <h2 className="text-gray-700 font-semibold text-lg">
                    Total Patients
                  </h2>
                  <p className="text-gray-900 text-3xl font-semibold">1500</p>
                  <p className=" text-gray-500 text-sm">Till Today</p>
                </div>
                <div className=" w-full md:w-1/3  pl-6 py-6 md:py-0 space-y-1">
                  <h2 className="text-gray-700 font-semibold text-lg">
                    Today Patient
                  </h2>
                  <p className="text-gray-900 text-3xl font-semibold">160</p>
                  <p className=" text-gray-500 text-sm">06, Nov 2019</p>
                </div>
                <div className=" w-full md:w-1/3  pl-6 py-6 md:py-0 space-y-1">
                  <h2 className="text-gray-700 font-semibold text-lg">
                    Appoinments
                  </h2>
                  <p className="text-gray-900 text-3xl font-semibold">85</p>
                  <p className=" text-gray-500 text-sm">06, Apr 2019</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <div className="pb-6 pt-8 ">
                  <h2 className="text-gray-900 font-semibold text-lg">
                    Patient Appoinment
                  </h2>
                </div>
                <div className="bg-white ">
                  <div className="p-6">
                    <div className="">
                      <button
                        type="button"
                        class="text-green-700 hover:text-white border border-green-700 hover:bg-green-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                      >
                        Upcoming
                      </button>
                      <button
                        type="button"
                        class="text-green-700 hover:text-white border border-green-700 hover:bg-green-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                      >
                        Today
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="">
                    <div className="">
                      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead class="text-sm text-gray-700 uppercase bg-gray-50 border-b  dark:border-gray-300">
                            <tr>
                              <th scope="col" class="py-4 px-6">
                                Patient Name
                              </th>
                              <th scope="col" class="py-4 px-6">
                                Appt Date
                              </th>
                              <th scope="col" class="py-4 px-6">
                                Purpose
                              </th>
                              <th scope="col" class="py-4 px-6">
                                Type
                              </th>
                              <th scope="col" class="py-4 px-6">
                                Paid Amount
                              </th>
                              <th scope="col" class="py-4 px-6"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData.map((item) => (
                              <tr
                                key={item.id}
                                class="border-b  dark:border-gray-300  text-gray-900 whitespace-nowrap "
                              >
                                <th
                                  scope="row"
                                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                                >
                                  {item.name}
                                </th>
                                <td class="py-4 px-6">
                                  {item.date} {item.time}
                                </td>
                                <td class="py-4 px-6">{item.purpose}</td>
                                <td class="py-4 px-6">{item.type}</td>
                                <td class="py-4 px-6">{item.amount}</td>
                                <td class="flex space-x-2 justify-center items-center py-4 px-6">
                                  <button className="bg-blue-200 flex justify-center items-center text-blue-600 px-2 py-1 rounded-md">
                                    <FaRegEye />{" "}
                                    <span className="pl-2">View</span>
                                  </button>
                                  <button className="bg-green-200 flex justify-center items-center text-green-600 px-2 py-1 rounded-md">
                                    <FaCheck />{" "}
                                    <span className="pl-2">Accept</span>
                                  </button>
                                  <button className="bg-rose-200 flex justify-center items-center text-rose-600 px-2 py-1 rounded-md">
                                    <ImCross />
                                    <span className="pl-2">Cancel</span>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
