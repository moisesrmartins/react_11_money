import React from "react";
import rest from "../use/rest";
import { Link } from "react-router-dom";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Id1 = () => {
  const data = useGet("id1");
  const data2 = useGet("total");

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
            {Object.keys(data2.data).map((total) => {
              return (
                <tr key={total}>
                  <td to={`/total/${total}`}>
                    <b>{total}</b>
                  </td>

                  <td>{data2.data[total].grandvalue1}</td>
                  <td>{data2.data[total].grandvalue2}</td>
                  <td>{data2.data[total].grandtotal}</td>
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

export default Id1;
