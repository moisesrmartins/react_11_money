import React from "react";
import rest from "../use/rest";
import { Link } from "react-router-dom";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Id2 = () => {
  const data = useGet("id2");
  const data2 = useGet("total2");

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
            {Object.keys(data.data).map((id2) => {
              return (
                <tr key={id2}>
                  <td to={`/id2/${id2}`}>
                    <b>{id2}</b>
                  </td>

                  <td>{data.data[id2].value1}</td>
                  <td>{data.data[id2].value2}</td>
                  <td>{data.data[id2].total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th>Ending</th>
              <th>Value 1</th>
              <th>Value 2</th>
              <th>Grand Total</th>
            </tr>
          </thead>

          <tfoot>
            {Object.keys(data2.data).map((total2) => {
              return (
                <tr key={total2}>
                  <td to={`/id2/${total2}`}>
                    <b>{total2}</b>
                  </td>

                  <td>{data2.data[total2].grandvalue1}</td>
                  <td>{data2.data[total2].grandvalue2}</td>
                  <td>{data2.data[total2].grandtotal}</td>
                </tr>
              );
            })}
          </tfoot>
        </table>
      </div>
    );
  }

  return null;
};

export default Id2;
