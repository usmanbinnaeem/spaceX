import React from "react";
import NavBar from "./Components/NavBar/Navbar";
import Display from "./Display";
import RocketDetail from "./Components/RocketDetails";
import ShipDetail from "./Components/ShipDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/RocketDetail" element={<RocketDetail />} />
        <Route path="/shipDetail" element={<ShipDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
