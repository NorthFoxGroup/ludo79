import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, GameDashboard, Signup, Terms } from "./Screens";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/game-dashboard" element={<GameDashboard />} />
        <Route path="/terms-conditions" element={<Terms />} />
      </Routes>
    </>
  );
};

export default App;
