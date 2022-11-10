import React from "react";
import rest from "../use/rest";
import { Link } from "react-router-dom";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Moves = () => {
  const data = useGet("moves");

  if (data.loading) {
    return <span>Loading...</span>;
  }

  if (data.data) {
    return (
      <div className="container">
        <h1>Moves</h1>
        <h2>
          <Link to={"/moviment/:data"} style={{ textDecoration: "none" }}>
            Moviment
          </Link>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID 1</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data.data).map((moves) => {
              return (
                <tr key={moves}>
                  <td>
                    <Link style={{ textDecoration: "none" }} to={"/id1"}>
                      {data.data[moves].id_1}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <thead>
            <tr>
              <th>ID 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data.data).map((moves) => {
              return (
                <tr key={moves}>
                  <td>
                    <Link style={{ textDecoration: "none" }} to={"/id2"}>
                      {data.data[moves].id_2}
                    </Link>
                  </td>
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

export default Moves;
