import React from "react";
import Header from "./elements/Header";
import Year from "./Year";

function Money() {
  return (
    <div className="Money">
      <Header />
      <div className="container">
        <h2>Add Year</h2>
        <select>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>

        <button>Add Year</button>

        <Year />
      </div>
    </div>
  );
}
export default Money;
