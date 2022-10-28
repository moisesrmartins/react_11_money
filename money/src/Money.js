import React from "react";
import useGet from "./useGet";

const url = "https://money-7d9fd-default-rtdb.firebaseio.com/months.json";

function Money() {
  const data = useGet(url);

  /*
  if (data.loading) {
    return <p>Loading...</p>;
  }
  */

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

      {JSON.stringify(data)}
    </div>
  );
}
export default Money;
