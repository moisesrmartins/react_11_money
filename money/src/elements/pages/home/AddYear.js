import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";

const minYear = 2019;
const maxYear = 2022;

const AddYear = () => {
  const refYear = useRef();
  const [redir, setRedir] = useState("");

  const years = [];
  for (let i = minYear; i <= maxYear; i++) {
    years.push(i);
  }

  const seeYear = () => {
    setRedir(refYear.current.value);
    console.log("seeYear", refYear.current.value);
  };

  if (redir !== "") {
    return <Navigate to={"/moviment/:data" + redir} />;
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

      <button onClick={seeYear}>Add Year</button>
    </div>
  );
};

export default AddYear;
