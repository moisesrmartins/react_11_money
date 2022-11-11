import React from "react";
import rest from "../use/rest";
import { Link } from "react-router-dom";

const baseURL = "https://money-7d9fd-default-rtdb.firebaseio.com/";
const { useGet } = rest(baseURL);

const Moves = () => {
  const data = useGet("move1");
  const data2 = useGet("move2");

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
              <th>IDs</th>
              <th>Moviments</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(data.data).map((move1) => {
              return (
                <tr key={move1}>
                  <td>{move1}</td>
                  <td>
                    <Link style={{ textDecoration: "none" }} to={"/id1"}>
                      {data.data[move1].id1}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tbody>
            {Object.keys(data2.data).map((move2) => {
              return (
                <tr key={move2}>
                  <td>{move2}</td>
                  <td>
                    <Link style={{ textDecoration: "none" }} to={"/id2"}>
                      {data2.data[move2].id2}
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
