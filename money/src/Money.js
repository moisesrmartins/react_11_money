import React from "react";
import Header from "./elements/Header";
import Months from "./Months";

function Money() {
  return (
    <div className="Money">
      <Header />
      <div className="container">
        <h2>Add Month</h2>
        <select>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
        <select>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
        </select>

        <button>Add Month</button>

        <Months />
      </div>
    </div>
  );
}
export default Money;
