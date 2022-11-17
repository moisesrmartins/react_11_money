import React, { useRef } from "react";

const minYear = 2019;
const maxYear = 2022;

const AddYear = () => {
  const refYear = useRef();

  const years = [];
  for (let i = minYear; i <= maxYear; i++) {
    years.push(i);
  }

  return (
    <div>
      <h2>Add Year</h2>

      <select ref={refYear}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <button>Add Year</button>
    </div>
  );
};

export default AddYear;
