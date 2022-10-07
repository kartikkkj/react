import React from "react";
import { GiDrop, GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

import { Doctors, Patients } from "./data";





import {useNavigate} from 'react-router-dom'


function Index() {
  const navigate = useNavigate();
  function handle(){
    navigate("/login")
  }




  return (
    <div className="bg-sky-400 z-50 ">
      <div className="h-auto ">
        <div className="flex  flex-row items-center  h-16 w-full px-0 md:px-16">
          <div className="flex items-center justify-center w-full md:w-5/6 lg:w-4/6">
            <div className="absolute flex space-x-4 right-0 md:hidden mr-4">
              {/* <div className="">
                <MapPinIcon className="h-6 w-6 " />
              </div> */}
              <div className="">
                <MagnifyingGlassIcon className="h-6 w-6 " />
              </div>
            </div>
            <div className="" >
                <a href={"/"}>
                  <img src="/favicon-head.png" width={200} height={65} />
                </a>
            </div>
            <div className="relative w-auto hidden md:block md:w-5/6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-auto" />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-xl rounded-md  block w-full pl-10 p-1 "
                placeholder="Search"
                required
              />
            </div>
          </div>
          <div className="hidden md:block lg:w-2/6 ">
            <div className="flex items-center mr-4 lg:mr-0 md:space-x-6 justify-end px-0 md:px-10 lg:px-16">
              <div className="flex items-center justify-center ">
                <p>Darbhanga</p>
                <div className="ml-1">
                  <ChevronDownIcon className="w-4 h-auto" />
                </div>
              </div>
              <div className="" onClick= {handle}>
                  <div

                    type="button"
                    class=" text-white bg-rose-500 font-medium rounded-lg text-xs px-4 py-1 login "
                  >
                    Sign In
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Disclosure as="nav" className="bg-blue-400 overflow-y-scroll h-full  ">
          <Disclosure.Button className="absolute top-3  left-4 md:left-auto md:right-16  inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <GiHamburgerMenu
              // className="block md:hidden h-6 w-6"
              className="block  h-6 w-6"
              aria-hidden="true"
            />
          </Disclosure.Button>
          <div className=" w-4/6 bg-white z-20 fixed h-fit top-0 -left-full md:-left-full sm:w-72  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start item-center ">
              <div className="flex flex-col w-full  justify-center items-center bg-sky-400 px-6 pt-6">
                
                  <a  href={"/"}>
                    <img
                      src="/Profile/dp.jpg"
                      width={120}
                      height={120}
                      className="rounded-full overflow-hidden border-solid border-white border-4 object-cover"
                    />
                  </a>
                <h1 className="text-lg font-semibold text-white pt-2 pb-4">
                  Dr. Pasand Hai Kya
                </h1>
              </div>
              <div className="overflow-y-auto h-screen scroll-smooth scrollbar-hide">
                <div className=" my-4 border-b border-gray-100 pb-4">
                  {Doctors.map((items) => (
                      <a href={`../` + items.slug} key={items.id} className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-green-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        {items.icon}
                        <span className="text-base text-gray-800 group-hover:text-white font-semibold ">
                          {items.title}
                        </span>
                      </a>
                  ))}
                </div>
                {/* setting  */}
                <div className=" my-4 border-b border-gray-100 pb-4">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      Settings
                    </h3>
                  </div>
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      More
                    </h3>
                  </div>
                </div>
                {/* logout */}
                <div className=" my-4">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      Logout
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
      </div>
    </div>
  );
}

export default Index;
