import React from "react";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="px-20 py-3">
        <div className="grid grid-flow-col">
          <div className="">
            <p className="font-bold text-2xl text-accent">Ludo79.</p>
          </div>
          <div className="flex justify-center">
            <ul className="flex items-center gap-5 mainNav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/my-profile"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <li>My Profile</li>
              </NavLink>
              <NavLink
                to="/game-history"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <li>Game History</li>
              </NavLink>
              <NavLink
                to="/my-wallet"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <li>My Wallet</li>
              </NavLink>
              <NavLink
                to="/refer-and-earn"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <li>Refer & Earn</li>
              </NavLink>
              <NavLink
                to="/terms-conditions"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <li>Terms & Policy</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <li>Contact</li>
              </NavLink>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  isActive ? "text-accent" : undefined
                }
              >
                <li>Support</li>
              </NavLink>
            </ul>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <NavLink to="/notifications" className="border border-cyan-500 p-2 rounded-full group hover:bg-cyan-500">
              <BsBellFill className="text-cyan-500 group-hover:text-white rotate-12" />
            </NavLink>
            <button className="bg-transparent border border-slate-300 text-black px-3 py-1 flex items-center gap-2 rounded">
              <FaMoneyBillWaveAlt className="text-green-600" /> 20 ₹
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
