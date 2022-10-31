import React from "react";
import useGet from "./useGet";

const url = "https://money-7d9fd-default-rtdb.firebaseio.com/months.json";

const Months = () => {
  const data = useGet(url);

  if (data.loading) {
    return <span>Loading...</span>;
  }

  if (data.data) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Input Forecast</th>
            <th>Input</th>
            <th>Output Forecast</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.data).map((month) => {
            return (
              <tr key={month}>
                <td>2019</td>
                <td>{month}</td>
                <td>{data.data[month].input_forecast}</td>
                <td>{data.data[month].input}</td>
                <td>{data.data[month].output_forecast}</td>
                <td>{data.data[month].output}</td>
              </tr>
            );
          })}
        </tbody>
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Input Forecast</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2020</td>
            <td>01</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>02</td>
            <td>2200</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>03</td>
            <td>2400</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>04</td>
            <td>2600</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default Months;
