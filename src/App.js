import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, GameDashboard, Signup } from "./Screens";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/game-dashboard" element={<GameDashboard />} />
      </Routes>
    </>
  );
};

export default App;
