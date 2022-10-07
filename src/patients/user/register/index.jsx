import React from "react";
import Image from "next/future/image";
import Link from "next/link";

export default function index() {
  return (
    <>
      <section className="flex flex-col justify-center items-center -mt-20 max-w-7xl mx-auto min-h-screen">
        <div className="px-6 h-full text-gray-800 space-x-10">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6  ">
            <div className="hidden lg:block grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <Image
                src="/login/login-banner.png"
                alt="login"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className="p-4 shadow-md w-96">
              <form>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-xl font-semibold">User Register</h2>
                  <Link href="/doctor/register">
                    <a>
                      <h2 className="text-lg text-teal-400">
                        Are you a Doctor?
                      </h2>
                    </a>
                  </Link>
                </div>
                {/* <!-- Name input --> */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Enter Name"
                  />
                </div>

                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Phone Number"
                    maxLength={10}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="text-center ">
                  <Link href="./register/verify">
                    <a>
                      <button
                        type="button"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Sign Up
                      </button>
                    </a>
                  </Link>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0 ">
                    Already have an account?
                    <Link href="/user/login">
                      <a className="text-red-600 pl-2 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                        Sign In
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
