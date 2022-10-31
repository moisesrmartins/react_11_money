import React from "react";
import useGet from "./useGet";

const url = "https://money-7d9fd-default-rtdb.firebaseio.com/months.json";

function Money() {
  const data = useGet(url);

  return (
    <div className="Money">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand">Money</h1>
        </div>
      </nav>

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

      {data.loading && <span>Loading...</span>}
      {!data.loading && (
        <table className="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Month</th>
              <th>Input Forecast</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2019</td>
              <td>01</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>02</td>
              <td>1200</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>03</td>
              <td>1400</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>04</td>
              <td>1600</td>
            </tr>
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
      )}

      {JSON.stringify(data)}
    </div>
  );
}
export default Money;
