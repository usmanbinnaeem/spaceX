import React from "react";
import NavBar from "./Components/NavBar/Navbar";
import Display from "./Display";
import RocketDetail from "./Components/RocketDetails";
import ShipDetail from "./Components/ShipDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/RocketDetail" element={<RocketDetail />} />
        <Route path="/shipDetail" element={<ShipDetail />} />
      </Routes>
    </div>
  );
};

export default App;
