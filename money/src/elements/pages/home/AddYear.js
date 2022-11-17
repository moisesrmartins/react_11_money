import React from "react";

const minYear = 2019;
const maxYear = 2022;

const AddYear = () => {
  const years = [];
  for (let i = minYear; i <= maxYear; i++) {
    years.push(i);
  }

  return (
    <div>
      <h2>Add Year</h2>
      <select>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
      <button>Add Year</button>
    </div>
  );
};

export default AddYear;
