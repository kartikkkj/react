import React from "react";
import Image from "next/future/image";
import Link from "next/link";
import OtpField from "react-otp-field";
import { useState } from "react";

export default function Index() {
  const [value, setValue] = useState("");
  return (
    <>
      <section className="flex justify-center items-center -mt-20 max-w-7xl mx-auto min-h-screen  ">
        <div className="w-full ">
          <div className="flex justify-center items-center ">
            <div className="bg-white  py-3 rounded text-center p-10 m-10 shadow-lg">
              <h1 className="text-2xl font-bold">OTP Verification</h1>
              <div className="flex flex-col mt-4">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">+91 ******876</span>
              </div>

              <div className="py-4">
                <OtpField
                  value={value}
                  onChange={setValue}
                  numInputs={6}
                  onChangeRegex={/^([0-9]{0,})$/}
                  autoFocus
                  isTypeNumber={false}
                  inputProps={{
                    className:
                      "flex flex-col w-10 h-10 mx-2 text-center text-2xl rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500",
                    disabled: false,
                  }}
                />
                <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                  <span className="font-bold">Resend OTP</span>
                  <i className="bx bx-caret-right ml-1"></i>
                </a>
              </div>

              <div className="flex justify-center text-center mt-5">
                <Link href="/">
                  <a
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Submit
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
