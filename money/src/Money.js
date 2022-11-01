import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./elements/Header";
import Year from "./Year";
import AddYear from "./AddYear";

const Home = () => {
  return (
    <div className="container">
      <AddYear />
      <Year />
    </div>
  );
};

function Money() {
  return (
    <Routes>
      <div className="Money">
        <Header />
        <Route path="/" element={<Home />} />
        <Home />
      </div>
    </Routes>
  );
}
export default Money;
