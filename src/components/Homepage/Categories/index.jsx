
import React from "react";
import TopCategoriesFile from "./Data";
export default function index() {
  // categories data listed here

  return (
    <>
      <div className="border-b-4 shadow-md w-full">
        <div className="flex flex-row justify-center items-center w-full  ">
          <div className=" flex justify-around w-full px-6 py-1 ">
            {/* List of Categories in Map Function  */}
            {/* Data are comming form category array which is in line no. 4 */}
            {TopCategoriesFile.map((category) => (
                <a href={"/"} key={category.id} >
                  <div className="  flex flex-shrink flex-col p-2 justify-center items-center hover:bg-gray-100 rounded-md">
                    <div className="flex justify-center flex-shrink-0 ">
                      <img
                        className="shrink w-10 h-10 lg:w-12 lg:h-12 "
                        src={category.image}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <h1 className="text-xs sm:text-sm md:text-base  text-center hover:to-blue-600 login">
                        {category.title}
                      </h1>
                    </div>
                  </div>
                </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
