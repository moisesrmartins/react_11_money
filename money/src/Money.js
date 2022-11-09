import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./elements/use/Header";
import Home from "./elements/pages/Home";
import Moviment from "./elements/pages/Moviment";
import Moves from "./elements/pages/Moves";
import Id1 from "./elements/pages/Id1";

function Money() {
  return (
    <div className="Money">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviment/:data" element={<Moviment />} />
        <Route path="/moves" element={<Moves />} />
        <Route path="/id1" element={<Id1 />} />
      </Routes>
    </div>
  );
}
export default Money;
