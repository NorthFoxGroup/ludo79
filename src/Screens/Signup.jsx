import React from "react";
import BG from "../Assets/bg/game_bg.webp";
import SVG from "../Assets/svg/signup.svg";
import { FaLock, FaTimes, FaUserCheck } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { useStateContext } from "../Contexts/ContextProvider";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    opt,
    error,
    sendOTP,
    submitOTP,
    phone,
    mainOtp,
    name,
    age,
    setError,
    errorMsg,
  } = useStateContext();

  return (
    <>
      <div className="w-screen min-h-screen bg-[#00000099] flex items-center justify-center">
        <img
          src={BG}
          alt=""
          className="fixed object-cover w-screen h-screen mix-blend-overlay"
        />
        <div className="login bg-[#ffffff] grid grid-cols-2 p-20 rounded-md z-50 max-w-[900px]">
          <div className="flex items-center justify-center">
            <img src={SVG} alt="" className="" />
          </div>
          <div className="flex gap-5 flex-col justify-center items-center text-center px-10">
            <p className="text-2xl font-medium">Welcome to Ludo79</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              laborum!
            </p>
            {error && (
              <>
                <div className="relative w-full flex items-center">
                  <p className="bg-red-500 text-white text-xs p-2 rounded-md w-full">
                    {errorMsg}
                  </p>
                  <FaTimes
                    className="absolute text-white text-sm right-3 z-20 cursor-pointer"
                    onClick={() => setError(false)}
                  />
                </div>
              </>
            )}
            {!opt && (
              <>
                <div className="relative w-full flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="border pl-10 py-1 w-full rounded-sm"
                    ref={name}
                  />
                  <BsFillPencilFill className="text-sm absolute left-4" />
                </div>
                <div className="relative w-full flex items-center">
                  <input
                    type="number"
                    placeholder="Enter Your Age"
                    className="border pl-10 py-1 w-full rounded-sm"
                    ref={age}
                    min={12}
                    maxLength={100}
                  />
                  <FaUserCheck className="text-sm absolute left-4" />
                </div>
                <div className="relative w-full flex items-center">
                  <input
                    type="number"
                    placeholder="Number"
                    className="border pl-14 py-1 w-full rounded-sm"
                    ref={phone}
                  />
                  <p className="absolute left-3 pr-2 border-r">+91</p>
                </div>
                <button
                  className="border border-accent bg-transparent text-accent hover:bg-accent hover:text-white w-full"
                  onClick={() => sendOTP()}
                >
                  Send OTP
                </button>
              </>
            )}

            {opt && (
              <>
                <div className="relative w-full flex items-center">
                  <input
                    type="number"
                    className="border pl-14 py-1 w-full rounded-sm"
                    placeholder="Number"
                    min={0}
                    ref={mainOtp}
                  />
                  <FaLock className="absolute left-5 text-accent" />
                  <p
                    className="text-xs absolute right-2 hover:text-accent cursor-pointer"
                    onClick={() => alert("We send otp Again...")}
                  >
                    Resend OTP
                  </p>
                </div>
                <button
                  className="border border-accent bg-transparent text-accent hover:bg-accent hover:text-white w-full"
                  onClick={() => submitOTP()}
                >
                  Submit
                </button>
              </>
            )}
            <Link to="/login" className="hover:text-accent">
              Already have an Account ?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
