import React from "react";
import BG from "../Assets/bg/game_bg.webp";
import SVG from "../Assets/svg/signup.svg";
import { FaLock, FaTimes } from "react-icons/fa";
import { useStateContext } from "../Contexts/ContextProvider";
import { Link } from "react-router-dom";

const Signup = () => {
  const { opt, alert, setAlert, submitOtp, phone, mainOtp } = useStateContext();

  return (
    <>
      <div className="w-screen min-h-screen bg-[#00000099] flex items-center justify-center">
        <img
          src={BG}
          alt=""
          className="fixed object-cover w-screen h-screen mix-blend-overlay"
        />
        <div className="login bg-[#ffffff] grid grid-cols-2 p-20 rounded-md z-50 max-w-[900px]">
          <div className="">
            <img src={SVG} alt="" className="" />
          </div>
          <div className="flex gap-5 flex-col justify-center items-center text-center px-10">
            <p className="text-2xl font-medium">Welcome to Ludo79</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              laborum!
            </p>
            {alert && (
              <>
                <div className="relative w-full flex items-center">
                  <p className="bg-red-500 text-white text-xs p-2 rounded-md w-full">
                    Please Enter Valid Number
                  </p>
                  <FaTimes
                    className="absolute text-white text-sm right-3 z-20 cursor-pointer"
                    onClick={() => setAlert(false)}
                  />
                </div>
              </>
            )}
            <div className="relative w-full flex items-center">
              <input
                type="number"
                placeholder="Number"
                className="border pl-14 py-1 w-full rounded-sm"
                ref={phone}
              />
              <p className="absolute left-3 pr-2 border-r">+91</p>
            </div>
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
                </div>
              </>
            )}
            <button
              className="border border-accent bg-transparent text-accent hover:bg-accent hover:text-white w-full"
              onClick={() => submitOtp()}
            >
              Submit
            </button>

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
