import React from "react";
import { Link } from "react-router-dom";
import rest from "../../use/rest";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Year = () => {
  const data = useGet("year");

  if (data.loading) {
    return <span>Loading...</span>;
  }

  if (data.data) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Input</th>
            <th>Input Forecast</th>
            <th>Output</th>
            <th>Output Forecast</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.data).map((year) => {
            return (
              <tr key={year}>
                <td>
                  <Link to={`/moviment/${year}`}>{year}</Link>
                </td>
                <td>{data.data[year].input}</td>
                <td>{data.data[year].input_forecast}</td>
                <td>{data.data[year].output}</td>
                <td>{data.data[year].output_forecast}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  return null;
};

export default Year;
