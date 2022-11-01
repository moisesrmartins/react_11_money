import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./elements/Header";
import Home from "./pages/Home";

const Moviment = () => {
  return <h1>Money</h1>;
};

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
