import React from "react";
import rest from "../use/rest";
import { Link } from "react-router-dom";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Id1 = () => {
  const data = useGet("id1");

  if (data.loading) {
    return <span>Loading...</span>;
  }

  if (data.data) {
    return (
      <div className="container">
        <h1>Bank Moviment</h1>
        <h2>
          <Link to={"/moves"} style={{ textDecoration: "none" }}>
            Moves
          </Link>
        </h2>

        <table className="table">
          <thead>
            <tr>
              <th>Periods</th>
              <th>Value 1</th>
              <th>Value 2</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(data.data).map((id1) => {
              return (
                <tr key={id1}>
                  <td to={`/id1/${id1}`}>
                    <b>{id1}</b>
                  </td>

                  <td>{data.data[id1].value1}</td>
                  <td>{data.data[id1].value2}</td>
                  <td>{data.data[id1].total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default Id1;
