import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import {
  Login,
  GameDashboard,
  Signup,
  Terms,
  Wallet,
  About,
  Contact,
} from "./Screens";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/game-dashboard" element={<GameDashboard />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/my-wallet" element={<Wallet />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
