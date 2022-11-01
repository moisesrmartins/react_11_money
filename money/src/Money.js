import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./elements/Header";
import Home from "./pages/Home";
import Moviment from "./pages/Moviment";

function Money() {
  return (
    <div className="Money">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviment/:data" element={<Moviment />} />
      </Routes>
    </div>
  );
}
export default Money;
